export const METADATA = {
  title: "Portfolio | Manish Bulchandani",
  description:
    "Experienced Full Stack Developer specializing in high-quality, production-grade, and scalable code. Explore my portfolio to see how I bring innovative solutions to life with robust back-end systems and sleek, responsive front-end designs.",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Experience",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I create scalable solutions",
  "I develop robust back-end systems",
  "I design responsive interfaces",
  "I deliver high-quality code",
];

export const EMAIL = "manishbulchandani4@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/manishbulchandani/",
  github: "https://github.com/manishbulchandani",
  instagram: "https://www.instagram.com/themanishbulchandani/",
};


export const SKILLS = {
  frontend: [
    "javascript",
    "reactjs",
    "redux",
    "nextjs",
    "tailwindcss",
    "html",
    "css",
  ],
  backend: ["typescript","nodejs", "expressjs", "mongodb","jwt"],
  other: ["c++", "python", "automation"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
    },
      {
        type: NodeTypes.CHECKPOINT,
        title: "Creative Upaay (current)",
        size: ItemSize.SMALL,
        subtitle:
          "Working as a Lead Tech Developer at Creative Upaay since one year and delievered more than 8 full stack web-apps and several minor projects for our clients",
        image: "/timeline/creative-upaay.svg",
        slideImage: "/timeline/creative-upaay-slide.jpg",
        shouldDrawLine: true,
        alignment: Branch.LEFT,
      },
      {
        type: NodeTypes.CHECKPOINT,
        title: "Authentimate",
        size: ItemSize.SMALL,
        subtitle:
          "Leading a team of 4 developers to build a blockchain-based digital certificate validation system, employing scalable architecture for efficiency and reliability.",
        image: "/timeline/authentimate.svg",
        slideImage: "/timeline/authentimate-slide.png",
        shouldDrawLine: true,
        alignment: Branch.LEFT,
      },
      {
        type: NodeTypes.CHECKPOINT,
        title: "Full Stack Developer (current)",
        size: ItemSize.SMALL,
        subtitle:
          "Developed a comprehensive admin panel with role-based authentication, dynamic data visualizations, and various support features using React, Redux Toolkit, RTK Query, Node.js, and MongoDB.",
        image: "/timeline/beesi.svg",
        slideImage: "/timeline/beesi-slide.jpg",
        shouldDrawLine: true,
        alignment: Branch.LEFT,
      },
  
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Freelance Developer",
    size: ItemSize.SMALL,
    subtitle:
      "Worked as a freelance web developer at Imperiums Edutech, building both their main landing page and various client projects, contributing to the overall web presence and client satisfaction",
    image: "/timeline/imperium-edutech.svg",
    slideImage: "/timeline/imperium-edutech-slide.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "hackitup Hackathon ",
    size: ItemSize.SMALL,
    subtitle:
      "A full-stack hostel mess transaction application with machine learning-based diet prediction, utilizing microservices architecture.",
    image: "/timeline/easymess.svg",
    slideImage: "/timeline/easymess-slide.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
      type: NodeTypes.CONVERGE,
    },
    {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Piclet",
    size: ItemSize.SMALL,
    subtitle:
      "At Piclet, I developed a web app and managed backend operations, handling image file compression and integrating a CMS for blog management, ensuring efficient server performance and a seamless user experience.",
    image: "/timeline/piclet.svg",
    slideImage: "/timeline/piclet-slide.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },  
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
