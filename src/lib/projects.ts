export type Project = {
  id: string;
  title: string;
  description: string;
  url: string;
  githubUrl?: string;
  category: string;
  tags: string[];
  descriptionColorClass?: string;
  showVisit?: boolean;
};

export const projects: Project[] = [
  {
    id: "tik-menu",
    title: "The TIK Menu",
    description:
      "An API powered menu for Food Court 2 at MIT Manipal that dynamically shows the current/upcoming meal with a highlight, but also has menu data for the food court, powered via an API built in collaboration with The Indian Kitchen. (TIK)",
    url: "https://fc2.coolstuff.work",
    githubUrl: "https://github.com/aaditagrawal/fc-menu",
    category: "Campus Dining",
    tags: ["API", "Menu", "MIT Manipal"],
  },
  {
    id: "tik-api",
    title: "The TIK API",
    description:
      "An API for the food data, handled by an admin dashboard with a dynamic data extracter for the XLSX uploaded by the admins. API documenation is available at https://tikm.coolstuff.work/docs/reference",
    url: "https://tikm.coolstuff.work",
    githubUrl: undefined,
    category: "APIs",
    tags: ["API", "Admin", "XLSX", "Docs"],
  },
  {
    id: "vcf-creator",
    title: "The Mass Contact Maker",
    description:
      " This application is designed to solve a simple problem. You might need to save a bunch of contacts from an excel sheet. This does that.",
    url: "https://vcf.aadit.cc/",
    githubUrl: "https://github.com/aaditagrawal/The-Mass-Contact-Maker",
    category: "Standard File Formats",
    tags: ["VCF", "Contacts", "Data Standards"],
  },
  {
    id: "placement-tracker",
    title: "The Placement Tracker",
    description:
      "A tracker for internship opportunities for third years at MIT, Manipal, taken down by the Placement Department due to their unwillingness towards structured data distribution and without providing an equally accessible service to users.",
    url: "#",
    githubUrl: undefined,
    category: "Campus Tools",
    tags: ["Internships", "MIT Manipal"],
    descriptionColorClass: "#b0b3b8",
    showVisit: false,
  },
];


