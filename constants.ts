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
        title: "Authentimate (current)",
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
      "Worked as a freelance web developer at Creative Upaay, building both their main landing page and various client projects, contributing to the overall web presence and client satisfaction",
    image: "/timeline/creative-upaay.svg",
    slideImage: "/timeline/creative-upaay-slide.jpg",
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
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Full Stack Developer (current)",
  //   size: ItemSize.SMALL,
  //   subtitle:[
  //     "Developed a comprehensive admin panel for the support team, implementing role-based authentication and various support features from scratch.",
  //     "Utilized React, Redux Toolkit, RTK Query for frontend development, and Node.js with MongoDB for backend services.",
  //     "Created dynamic data visualizations to enhance support team efficiency and decision-making processes.",
  //   ],
  //   image: "/timeline/beesi.png",
  //   slideImage: "/timeline/reactindia.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "React Developer",
  //   size: ItemSize.SMALL,
  //   subtitle:[
  //     "I worked as a React developer at Creative Upaay, contributing to the main Creative Upaay website and various client projects.",
  //     "My role involved developing and maintaining user interfaces, ensuring high performance and scalability.",
  //   ],
  //   image: "/timeline/creative-upaay.png",
  //   slideImage: "/timeline/reactindia.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Full Stack Developer",
  //   size: ItemSize.SMALL,
  //   subtitle:[
  //     "At Piclet, I developed a web app and managed backend operations, including handling and compressing image files on the server",
  //     "I integrated a CMS for blog management, streamlining content creation and publication.",
  //     "My work ensured efficient server performance and a seamless user experience.",
  //   ],
  //   image: "/timeline/piclet.png",
  //   slideImage: "/timeline/reactindia.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2023",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Speaker at React India",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Discussed on Interaction to Next Paint (INP), a Google Core Web Vital metric",
  //   image: "/timeline/reactindia.svg",
  //   slideImage: "/timeline/reactindia.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2022",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Frontend Engineer 2 (Current)",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Frontend Engineering @ Core team, solving problems around Livingroom device performance",
  //   image: "/timeline/hotstar.svg",
  //   slideImage: "/timeline/hotstar.jpeg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2021",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "UI Engineer",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Contributed to Server driven UI framework for powering experiences @ Flipkart Wholesale 😎",
  //   image: "/timeline/flipkart.svg",
  //   slideImage: "/timeline/flipkart.gif",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2020",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.DIVERGE,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "UI Engineer (freelance)",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Built solutions for employee engagement, productivity and performance 🎯",
  //   image: "/timeline/huminos.svg",
  //   slideImage: "/timeline/huminos-freelance.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.RIGHT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Motion Graphics (freelance)",
  //   size: ItemSize.SMALL,
  //   subtitle: "Motion Graphics content for Product Launch 🚀",
  //   image: "/timeline/octanner.svg",
  //   slideImage: "/timeline/aftereffects.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CONVERGE,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2019",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "UI Engineer",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Worked on enterprise blockchain solutions for web. Transforming UI/UX and frontend framework. Built a design system.",
  //   image: "/timeline/dltlabs.svg",
  //   slideImage: "/timeline/dlt-website.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "UX Engineer",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "First job! 🥳 Product design and development for employee engagement chatbot suite for workplace by facebook",
  //   image: "/timeline/huminos.svg",
  //   slideImage: "/timeline/huminos-website.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Graduated from College 🎓",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Spent 4 years laying the foundation of Frontend Engineering, UI/UX, and Fitness!",
  //   image: "/timeline/akgec.svg",
  //   slideImage: "/timeline/farewell.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2018",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.DIVERGE,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Student lead at SDC-SI",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Represented a team of 39 talented developers. Served different roles of leadership, project management and delivery.",
  //   image: "/timeline/si.svg",
  //   slideImage: "/timeline/si-head.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Lecture on SVG animations",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Guided 200 students to create their first animated SVG using CSS/SMIL at PHP Workshop, SDC-SI",

  //   slideImage: "/timeline/svg-lecture.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2017",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.RIGHT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "1st position in Web Designing, IMSU",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Competed against 20+ teams for design and development of web project from scratch",
  //   slideImage: "/timeline/ims-17.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.RIGHT,
  // },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Lecture on Javascript",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Guided 200 students for javascript fundamentals at Game Development workshop, SDC-SI",
  //   slideImage: "/timeline/js-17.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "1st position in Web Design, ABES ACM",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Competed in web and graphic design challenge with 100+ participants.",
  //   slideImage: "/timeline/abes-17.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.RIGHT,
  // },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2017",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.RIGHT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "1st position in Web Designing, IMSU",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Competed against 20+ teams for design and development of web project from scratch",
  //   slideImage: "/timeline/ims-17.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.RIGHT,
  // },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Lecture on Javascript",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Guided 200 students for javascript fundamentals at Game Development workshop, SDC-SI",
  //   slideImage: "/timeline/js-17.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "1st position in Web Design, ABES ACM",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Competed in web and graphic design challenge with 100+ participants.",
  //   slideImage: "/timeline/abes-17.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.RIGHT,
  // },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Lecture on Web Technologies",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Guided 300+ students on getting started with web technologies like HTML/CSS and JS",
  //   slideImage: "/timeline/web-17.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2016",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.RIGHT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "1st position in Web Designing, IMSU",
  //   size: ItemSize.SMALL,
  //   subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
  //   slideImage: "/timeline/ims-16.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.RIGHT,
  // },
  // {
  //   type: NodeTypes.CONVERGE,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "UI/UX, Frontend Engineer",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Started journey in SDC-SI, where I learnt the fundamentals of Frontend, UI/UX, Graphic design and more...",
  //   image: "/timeline/si.svg",
  //   slideImage: "/timeline/si-start.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2014",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Recognized Themer",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Awarded as recognized themer,  Developed themes and ROMs for Xperia 2011 devices lineup with over 15k+ downloads. Featured on xda portal twice.",
  //   image: "/timeline/xda.svg",
  //   slideImage: "/timeline/xda-rt.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
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
