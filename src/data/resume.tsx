import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Gourav Chaudhary",
  initials: "GC",
  url: "https://github.com/GouravSittam",
  location: "Kangra, Himachal Pradesh, India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Developer. I love building things and helping people. Very active on Twitter & LinkedIn.",
  summary:
    // "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
    "At the start of 2022, [I began combining my academic journey in Computer Science at Lovely Professional University](/#education) with real-world development work as a full-stack engineer. In the past, I built complete platforms like an Airbnb clone, GPTflix AI movie recommender, and a Swiggy-style food delivery app, trained at Gokburu Pvt. Ltd. where I scaled UI performance by 40%, and earned certifications in Cloud Computing, DevOps, and Full-Stack Development. [I've also contributed to open-source and maintained a year-long GitHub streak.](https://github.com/GouravSittam) I'm passionate about merging creativity with code to craft seamless, scalable, and intelligent web experiences.",
  avatarUrl: "/G.jpeg",
  skills: [
    "React",
    // "Next.js",
    "Typescript",
    "Node.js",
    "AWS",
    // "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "JavaScript",
    "MongoDB",
    "Express",
    "TailwindCSS",
    "Git",
    "GitHub",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "gouravsittam@gmail.com",
    tel: "+91 7018389596",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/GouravSittam",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/gouravsittam/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Gouravv_c",
        icon: Icons.x,
        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Gokburu Pvt. Ltd.",
      href: "https://gokburu.com",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/gokburu.svg",
      start: "June 2024",
      end: "Aug 2024",
      description:
        "Implemented and optimized UI components using React and TailwindCSS, resulting in a 40% performance improvement. Developed RESTful APIs using Node.js and Express, and integrated MongoDB for data storage. Containerized applications using Docker and deployed them on AWS.",
    },
    
  ],
  education: [
    {
      school: "Lovely Professional University",
      href: "https://www.lpu.in/",
      degree: "Computer Science & Engineering (CSE)",
      logoUrl: "/lpu.png",
      start: "2022",
      end: "2026",
    },
    // {
    //   school: "University of Waterloo",
    //   href: "https://uwaterloo.ca",
    //   degree: "Bachelor's Degree of Computer Science (BCS)",
    //   logoUrl: "/waterloo.png",
    //   start: "2016",
    //   end: "2021",
    // },
    // {
    //   school: "Wilfrid Laurier University",
    //   href: "https://wlu.ca",
    //   degree: "Bachelor's Degree of Business Administration (BBA)",
    //   logoUrl: "/laurier.png",
    //   start: "2016",
    //   end: "2021",
    // },
    // {
    //   school: "International Baccalaureate",
    //   href: "https://ibo.org",
    //   degree: "IB Diploma",
    //   logoUrl: "/ib.png",
    //   start: "2012",
    //   end: "2016",
    // },
  ],
  projects: [
    // {
    //   title: "Chat Collect",
    //   href: "https://chatcollect.com",
    //   dates: "Jan 2024 - Feb 2024",
    //   active: true,
    //   description:
    //     "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://chatcollect.com",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    // },
    {
      title: "DevTinder",
      href: "https://github.com/GouravSittam/DevTinder",
      dates: "Jan 2025 - Apr 2025",
      active: true,
      description:
        "With the launch of DevTinder, I built a platform that helps developers connect based on shared tech stacks and interests. DevTinder simplifies networking by matching coders with potential collaborators, teammates, or like-minded tech enthusiasts. It's a fun, targeted way for developers to expand their network, find new opportunities, and work on exciting projects they're passionate about.",
      technologies: [
        "ReactJS",
        "TailwindCSS",
        "Node,Js",
        "Express",
        "MongoDB",
        "Socket.io",
        "Docker",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://github.com/GouravSittam/DevTinder",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/GouravSittam/DevTinder",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/P1.png",
     
    },
    // {
    //   title: "Magic UI",
    //   href: "https://magicui.design",
    //   dates: "June 2023 - Present",
    //   active: true,
    //   description:
    //     "Designed, developed and sold animated UI components for developers.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://magicui.design",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/magicuidesign/magicui",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.magicui.design/bento-grid.mp4",
    // },
    {
      title: "Query Quest",
      href: "https://queryquestmern.vercel.app/",
      dates: "Sep 2024 - Nov 2024",
      active: true,
      description:
        "With the launch of QueryQuest, I built a platform that helps developers and data analysts optimize, explore, and execute SQL queries with ease. QueryQuest simplifies database interaction by offering real-time query execution, optimization suggestions, and performance insights. It's a powerful, intuitive way to enhance database management, troubleshoot faster, and work more efficiently on data-driven projects.",
      technologies: [
       "ReactJS",
        "TailwindCSS",
        "Node,Js",
        "Express",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://queryquestmern.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/GouravSittam/QueryQuest",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/P2.png",
      // video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    // {
    //   title: "llm.report",
    //   href: "https://llm.report",
    //   dates: "April 2023 - September 2023",
    //   active: true,
    //   description:
    //     "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://llm.report",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/dillionverma/llm.report",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.llm.report/openai-demo.mp4",
    // },
    {
      title: "humanchain-incident-api",
      href: "https://humanchain-incident-api.vercel.app/",
      dates: "Mar 2025 - Apr 2025",
      active: true,
      description:
        "​With the launch of the HumanChain Incident API, I developed a RESTful service to log and manage hypothetical AI safety incidents. Built as a take-home assignment for HumanChain's Backend Intern position, it features a user-friendly web interface with CRUD operations and integrates MongoDB for data persistence. This project demonstrates practical backend development skills and database integration.",
      technologies: [
        "Typescript",
        "ReactJS",
        "Node.js",
        "Express",
        "MongoDB",
        "TailwindCSS",
        
      ],
      links: [
        {
          type: "Website",
          href: "https://humanchain-incident-api.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/GouravSittam/humanchain-incident-api",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/P3.png",
      // video: "https://cdn.llm.report/openai-demo.mp4",
    },
    // {
    //   title: "Automatic Chat",
    //   href: "https://automatic.chat",
    //   dates: "April 2023 - March 2024",
    //   active: true,
    //   description:
    //     "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://automatic.chat",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    // },
    {
      title: "YumYum-restaurant website",
      href: "https://yummyum.netlify.app/",
      dates: "Oct 2024 - Dec 2024",
      active: true,
      description:
        "Welcome to YumYum, the ultimate restaurant website built with React, Redux, and Tailwind CSS! Discover tantalizing dishes, browse menus, and make reservations effortlessly. Our sleek design ensures a seamless user experience, making your online dining journey delightful. Dive into YumYum – where every click leads to deliciousness!!",
      technologies: [
        "ReactJS",
        "Redux",
        "TailwindCSS",
        "JavaScript",
        "HTML",
        "CSS",
        "Netlify",
        "Vercel",
        "Git",
        "GitHub",
      ],
      links: [
        {
          type: "Website",
          href: "https://yummyum.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/GouravSittam/YumYum",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/P4.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 14th - 16th, 2018",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mobile application which delivers university campus wide events in real time to all students.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "FirstNet Public Safety Hackathon",
  //     dates: "March 23rd - 24th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
  //     icon: "public",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
  //     links: [],
  //   },
  //   {
  //     title: "DeveloperWeek Hackathon",
  //     dates: "February 3rd - 4th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
  //     links: [
  //       {
  //         title: "Github",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/cryptotrends/cryptotrends",
  //       },
  //     ],
  //   },
  // ],
} as const;
