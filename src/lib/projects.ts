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
      "An API powered menu for Food Court 2 at MIT Manipal that dynamically shows the current/upcoming meal with a highlight, but also has menu data for the food court, powered via an API built in collaboration with The Indian Kitchen. 5000+ Daily Users. Includes support for Veg/NonVeg/Jain filtering. (TIK)",
    url: "https://fc2.coolstuff.work",
    githubUrl: "https://github.com/aaditagrawal/fc-menu",
    category: "Campus Dining",
    tags: ["API", "Menu", "MIT Manipal"],
  },
  {
    id: "typsmthng",
    title: "Typsmthng",
    description:
      "A web focused Typst editor with live preview supported by a WASM renderer. Brings a Crixet (now PRISM, post acquisition by OpenAI) experience to live web Typst rendering. Includes vim mode support too.",
    url: "https://typst.coolstuff.work",
    githubUrl: "https://github.com/aaditagrawal/typsmthng",
    category: "Developer Tools",
    tags: ["Typst", "Editor", "WASM", "Live Preview"],
  },
  {
    id: "or-free",
    title: "OR-Free",
    description:
      "A tracker for free AI models on OpenRouter (and paid ones). Updated entirely on the client end, so perenially up to date.",
    url: "https://or.coolstuff.work",
    githubUrl: "https://github.com/aaditagrawal/or-free",
    category: "AI Tools",
    tags: ["OpenRouter", "AI Models", "Free Models", "Tracker"],
  },
  {
    id: "contact-cards",
    title: "Contact Cards",
    description:
      "A personal contact card generator that lets you build, preview, and download contact cards as PNG images with embedded vCard QR codes.",
    url: "https://contacts.coolstuff.work",
    githubUrl: "https://github.com/aaditagrawal/contact-cards",
    category: "Standard File Formats",
    tags: ["Contacts", "VCF", "QR Code", "PNG"],
  },
  {
    id: "mit-campus-directory",
    title: "The MIT Manipal Campus Directory",
    description:
      "A website to collect and share important contact resources and data from MIT Manipal. A crowdsourced effort, with a generate mail to warden feature included.",
    url: "https://cd.coolstuff.work",
    githubUrl: "https://github.com/aaditagrawal/campus-dining",
    category: "Campus Tools",
    tags: ["Data", "Phones", "MIT Manipal"],
  },
  {
    id: "sindhi-mess-menu",
    title: "Sindhi Mess Menu",
    description:
      "A mess menu website for Sindhi mess covering their cyclic menu rotation alongside extras listed by Sindhi mess.",
    url: "https://sindhu.coolstuff.work",
    githubUrl: "https://github.com/aaditagrawal/sindhi-menu",
    category: "Campus Dining",
    tags: ["Menu", "Sindhi Mess", "Rotation", "Extras"],
  },
  {
    id: "tik-api",
    title: "The TIK API",
    description:
      "An API for the food data, handled by an admin dashboard with a dynamic data extractor for the XLSX uploaded by the admins. API documentation is available at https://tikm.coolstuff.work/docs/reference",
    url: "https://tikm.coolstuff.work",
    githubUrl: undefined,
    category: "APIs",
    tags: ["API", "Admin", "XLSX", "Docs"],
  },
  {
    id: "mit-courses",
    title: "MIT Courses Search",
    description:
      "A website for MIT students to search for and find details and reference material for their respective courses.",
    url: "https://courses.coolstuff.work",
    githubUrl: "https://github.com/aaditagrawal/mit-courses-data",
    category: "Academic Tools",
    tags: ["Search", "Courses", "Reference Material"],
  },
  {
    id: "electives-allocation",
    title: "Electives Allocation Data",
    description:
      "Data for Elective Allocation for Sixth Semester Students for the Academic Year 2025 to 2026.",
    url: "https://electives.coolstuff.work",
    githubUrl: "https://github.com/aaditagrawal/elective-cutoffs",
    category: "Academic Tools",
    tags: ["Electives", "Allocation", "Sixth Semester", "2025-2026"],
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
    id: "cce-b-timetable",
    title: "CCE-B Timetable",
    description:
      "Timetable for CCE-B for sixth semester for easy accessibility from anywhere.",
    url: "https://tt.coolstuff.work",
    githubUrl: "https://github.com/aaditagrawal/semester-timetable-v1",
    category: "Academic Tools",
    tags: ["Timetable", "CCE-B", "Sixth Semester"],
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
