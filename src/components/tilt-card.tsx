"use client";

import { useRef, useState, useEffect, useCallback } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  id: string;
  defaultSelected?: boolean;
}

let activeCardId: string | null = null;
let hoveredCardId: string | null = null;
let hasInteracted = false;
const listeners: Set<() => void> = new Set();

function notifyListeners() {
  listeners.forEach((fn) => fn());
}

function setActiveCard(id: string | null) {
  hasInteracted = true;
  activeCardId = id;
  notifyListeners();
}

function setHoveredCard(id: string | null) {
  hasInteracted = true;
  hoveredCardId = id;
  notifyListeners();
}

export function TiltCard({ children, className = "", id, defaultSelected = false }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [touchOrigin, setTouchOrigin] = useState({ x: 50, y: 50 });
  const [trailAngle, setTrailAngle] = useState(0);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
  const [shimmerPos, setShimmerPos] = useState(-100);
  const [isSelected, setIsSelected] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (defaultSelected && !hasInteracted) {
      activeCardId = id;
      notifyListeners();
    }
  }, [defaultSelected, id]);

  const syncState = useCallback(() => {
    const selected = activeCardId === id;
    const hovered = hoveredCardId === id;
    setIsSelected(selected);
    setIsActive(selected || hovered);
  }, [id]);

  useEffect(() => {
    listeners.add(syncState);
    syncState();
    return () => {
      listeners.delete(syncState);
    };
  }, [syncState]);

  useEffect(() => {
    if (!isActive) {
      return;
    }
    
    let angle = 0;
    const interval = setInterval(() => {
      angle = (angle + 2) % 360;
      setTrailAngle(angle);
    }, 20);

    let shimmer = -100;
    const shimmerInterval = setInterval(() => {
      shimmer += 4;
      if (shimmer > 200) shimmer = -100;
      setShimmerPos(shimmer);
    }, 30);

    let tiltTime = 0;
    let tiltInterval: ReturnType<typeof setInterval> | null = null;
    if (isSelected && isTouchDevice) {
      tiltInterval = setInterval(() => {
        tiltTime += 0.03;
        const rotateX = Math.sin(tiltTime) * 3;
        const rotateY = Math.cos(tiltTime * 0.7) * 4;
        setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`);
      }, 30);
    }

    return () => {
      clearInterval(interval);
      clearInterval(shimmerInterval);
      if (tiltInterval) clearInterval(tiltInterval);
    };
  }, [isActive, isSelected, isTouchDevice]);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`);

      const glowX = (x / rect.width) * 100;
      const glowY = (y / rect.height) * 100;
      setTouchOrigin({ x: glowX, y: glowY });
    };

    const handleMouseEnter = () => {
      setHoveredCard(id);
    };

    const handleMouseLeave = () => {
      setHoveredCard(null);
      setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [id]);

  const handleTouch = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = ((touch.clientX - rect.left) / rect.width) * 100;
    const y = ((touch.clientY - rect.top) / rect.height) * 100;
    setTouchOrigin({ x, y });

    if (activeCardId === id) {
      setActiveCard(null);
      setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
    } else {
      setActiveCard(id);
    }
  };

  return (
    <div
      ref={cardRef}
      onTouchStart={handleTouch}
      className={`relative overflow-hidden rounded-xl ${className}`}
      style={{
        transform,
        transformStyle: "preserve-3d",
        transition: "transform 0.2s ease-out",
      }}
    >
      {/* Animated border - using two layers for the effect */}
      {isActive && (
        <>
          <div
            className="absolute -inset-[1px] rounded-xl pointer-events-none overflow-hidden"
            style={{
              background: `conic-gradient(from ${trailAngle}deg at 50% 50%, #FF4D00, transparent 25%, transparent 75%, #FF4D00)`,
            }}
          />
          <div className="absolute inset-0 rounded-xl pointer-events-none bg-neutral-950" />
        </>
      )}

      {/* Shimmer effect */}
      {isActive && (
        <div className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(105deg, transparent ${shimmerPos - 30}%, rgba(255,77,0,0.08) ${shimmerPos}%, transparent ${shimmerPos + 30}%)`,
            }}
          />
        </div>
      )}

      {/* Cursor/touch origin glow */}
      {isActive && (
        <div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${touchOrigin.x}% ${touchOrigin.y}%, rgba(255,77,0,0.12) 0%, transparent 50%)`,
          }}
        />
      )}

      {/* Content */}
      <div className="relative h-full">
        {children}
      </div>
    </div>
  );
}
