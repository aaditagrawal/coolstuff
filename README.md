# 🌟 CoolStuff

> A minimalist showcase of projects by Aadit Agrawal

![CoolStuff Banner](./public/banner.png)

CoolStuff is a sleek, dark-themed portfolio website that showcases various projects and tools created by Aadit Agrawal. Built with modern web technologies and featuring a glassmorphic design aesthetic.

## ✨ Features

- **📱 Responsive Design** - Optimized for all devices and screen sizes
- **🌙 Dark Mode** - Beautiful dark theme with glassmorphic effects
- **⚡ Fast & Modern** - Built with Next.js 15 and Turbopack for lightning-fast performance
- **🎨 Glassmorphic UI** - Stunning translucent cards with subtle shadows and gradients
- **🔧 Project Showcase** - Dynamic project cards with tags, descriptions, and links
- **📝 TypeScript** - Fully typed codebase for better developer experience
- **🎯 SEO Optimized** - Built with performance and accessibility in mind


## 🛠️ Tech Stack

- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS with custom design tokens
- **UI Components:** Custom shadcn/ui-inspired components
- **Icons:** Lucide React
- **Fonts:** JetBrains Mono for that perfect monospace aesthetic
- **Build Tool:** Turbopack for ultra-fast builds
- **Package Manager:** Bun for lightning-fast dependency management

## 📁 Project Structure

```
coolstuff/
├── src/
│   ├── app/
│   │   ├── layout.tsx     # Root layout with metadata
│   │   ├── page.tsx       # Main homepage component
│   │   └── globals.css    # Global styles and design tokens
│   ├── components/
│   │   └── ui/           # Reusable UI components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── badge.tsx
│   └── lib/
│       ├── projects.ts    # Project data and types
│       └── utils.ts       # Utility functions
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

## 🎨 Design Philosophy

- **Minimalist** - Clean, distraction-free interface
- **Dark Aesthetic** - Modern dark theme with subtle gradients
- **Glassmorphism** - Translucent elements with backdrop blur
- **Typography** - JetBrains Mono for a tech-focused look
- **Accessibility** - Built with semantic HTML and proper contrast

## 📦 Build & Deployment

### Build for Production

```bash
# Using Bun
bun run build

# Or using npm
npm run build
```

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push
3. Custom domain support available

### Other Platforms

The built files in `out/` can be deployed to any static hosting service like:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any web server

## 🤝 Contributing

While this is primarily a personal project showcase, feel free to:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Aadit Agrawal**
- 🌐 [Website](https://aadit.cc)
- 📧 Contact through [website](https://aadit.cc)

---

<div align="center">
  <p>Built with ❤️ using Next.js and styled with Tailwind CSS</p>
  <p>
    <a href="https://aadit.cc">aadit.cc</a> •
    <a href="https://github.com/aaditagrawal">GitHub</a>
  </p>
</div>
