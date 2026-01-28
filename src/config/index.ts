import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Henry Larreal— Web Developer and Data Enthusiast",
  author: "Henry Larreal",
  description:
    "I specialize in Web Development, Data Science and Data Analysis. In love with this ones HTML, CSS, Javascript, PHP, Python, R, SQL and all the things related to data.",
  lang: "en",
  siteLogo: "/henry.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    //{ text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/henry-larreal-carrera/" },
    { text: "Github", href: "https://github.com/hendevdata/hendevdata" },
    //{ text: "Youtube", href: "https://github.com/immois/astro-zen" },
    //{ text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/henry.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Henry Larreal",
    specialty: "Web Developer and Data Enthusiast",
    summary:
      "Developer based in Bogota, Colombia. I specialize in Web Development, Data Science and Data Analysis. In love with this ones HTML, CSS, Javascript, PHP, Python, R, SQL and all the things related to data.",
    email: "henrylarreal27@gmail.com",
  },
  experience: [
    {
      company: "PMO ADVISORY",
      position: "Web Publisher / Web Content Specialits",
      startDate: "May 2023",
      endDate: "Current",
      summary: [
        "Installed required plugins and additional coding to fit final design and functionality requirement",
        "Converted design assets into component-based HTML, CSS and JavaScript.",
        "Migrated existing websites to WordPress platform without loss of data or functionality, streamlining content updates for clients.",
        "Coded websites using HTML, CSS, JavaScript, and jQuery languages..",
        "Enhanced user experience by implementing responsive web design and optimizing website performance.",

      ],
    },
    {
      company: "The Home Depot",
      position: "Email Marketing Automation Developer",
      startDate: "Feb 2024",
      endDate: "Current",
      summary: [
        "Quality Assurance: Validating email campaigns for cross-platform functionality, visual consistency, and alignment with industry standards.  ",
        "Performance Optimization: Analyzing engagement metrics, segmentation strategies, and personalization techniques to refine campaign effectiveness.  ",
        "Automation & Integration: Developing tools, scripts, and workflows to simplify processes and enhance operational agility. ",
        "Using a blend of HTML, CSS, JavaScript, Python, and tools such as Movable Ink, MessageGears, Jenkins, Google Cloud, and BigQuery, we work alongside analysts, engineers, QA teams, and stakeholders to innovate and scale The Home Depot’s email marketing initiatives.",


      ],
    },
    {
      company: "North American Hand Paper Makers",
      position: "Volunteer Data Analyst",
      startDate: "April 2024",
      endDate: "Dec 2024",
      summary:
        "Analyze large datasets using Python, Pandas, and NumPy to derive actionable insights. Use Streamlit as a reporting tool to create dynamic dashboards for data visualization and trend analysis. Collaborate with cross-functional teams to improve decision-making processes through data-driven reports. ",
    },
  ],
  projects: [
    {
      name: "Hard Hat VR website",
      summary: "Static website using WordPress for a VR training company. Using xAPI services to track user interactions within the VR training modules.",
      linkPreview: "https://hardhatvr.com/",
      //linkSource: '',
      image: "/hhvr.png",
    },
    {
      name: "Data Analysis Dashboard",
      summary: "An streamlit dashboard that analyzes sales data to provide insights and visualizations for better decision-making.",
      linkPreview: "https://nv8yvteodjgps2k6zttase.streamlit.app/",
      //linkSource: "",
      image: "/da.png",
    },
    {
      name: "PMO ADVISORY Website",
      summary: "A corporate website built with WordPress, featuring custom themes and plugins to enhance user experience and functionality.",
      linkPreview: "https://pmoadvisory.com/",
      //linkSource: "https://pmoadvisory.com/",
      image: "/pmo.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Henry Larreal, a passionate Data Scientist and Web Developer with a knack for merging analytical insights with digital solutions. With a strong background in Python and data visualization, as well as front-end web technologies, I thrive in the intersection where data meets design. Over the years, I’ve honed my skills in crafting dynamic dashboards and responsive websites that not only solve complex problems but also drive user engagement. My projects range from optimizing site performance to building data-driven reports, all with a focus on efficiency, clarity, and value.
    `,
    image: "/henry.png",
  },
};

// #5755ff
