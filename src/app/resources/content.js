import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Shahr Bano",
  lastName: "Bokhari",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer & AI Engineer",
  avatar: "/images/avatar.jpeg",
  email: "sbano.dev@gmail.com",
  location: "Asia/Karachi",
  languages: ["English", "Urdu"],
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I write about full-stack development, AI systems, and building intelligent digital solutions
      using modern tools and frameworks.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Sherryz707",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/shahrbano-bokhari-55989135b/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building intelligent, full-stack applications and AI-powered systems</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">AI Hiring Agent</strong></>,
    href: "/work/intelligent-hiring-agent-system",
  },
  subline: (
    <>
      I'm {person.firstName}, a full stack developer passionate about applied AI, agentic systems,
      and building meaningful software experiences.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Shahr Bano Bokhari is a Lahore-based full stack developer and AI engineer with deep
        experience in web development, backend architecture, and machine learning. Her work
        integrates MERN, TypeScript, Django REST, FastAPI, R, and agentic AI systems to build
        intelligent, scalable solutions.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "ScryptHub",
        timeframe: "Mar 2025 – Present",
        role: "Full Stack Developer",
        achievements: [
          <>Engineered a clean-architecture backend in TypeScript using Express and MongoDB.</>,
          <>Designed RESTful APIs and implemented JWT authentication with RBAC.</>,
        ],
        images: [{
          src: "/images/projects/scrypthub/cover.PNG",
          alt: "image",
          width: 16,
          height: 9
        }],
      },
      {
        company: "LatamRecruit",
        timeframe: "May 2025 – Present",
        role: "Full Stack Developer",
        achievements: [
          <>Developing a secure admin panels and APIs for blog, lead, faq, user management and more.</>,
          <>Integrating Mailtrap (for testing) and SendGrid (for production) for robust email handling in production.</>,
        ],
        images:[{
          src: "/images/projects/recruit/home.jpg",
          alt: "image",
          width: 16,
          height: 9
        }]
      },
      {
        company: "AIQ Decisions",
        timeframe: "Jan 2025 – Feb 2025",
        role: "No-Code Intern",
        achievements: [
          <>Built a real-time inventory app with AppSheet and integrated with BigQuery.</>,
          <>Automated workflows to streamline stock management and purchasing.</>,
        ],
        images: [{
          src: "/images/projects/smartflow/img-1.png",
          alt: "image",
          width: 16,
          height: 9
        }],
      },
      {
        company: "Reborn Electronics",
        timeframe: "Sep 2024 – Sep 2025",
        role: "Full Stack Developer",
        achievements: [
          <>Developed e-commerce pages with Next.js, Saleor, and GraphQL.</>,
          <>Integrated JazzCash and implemented dynamic product features.</>,
        ],
        images: [{
          src: "/images/projects/reborn/figma.jpeg",
          alt: "image",
          width: 16,
          height: 9
        }],
      },
      {
        company: "Resilience",
        timeframe: "Feb 2024 – Feb 2025",
        role: "Web Developer",
        achievements: [
          <>Built a modern business site with custom ThemeForest template implementation.</>,
          <>Improved brand presence through responsive design and UX refinement.</>,
        ],
        images: [{
          src: "/images/projects/resilience/home.png",
          alt: "image",
          width: 16,
          height: 9
        }],
      },
      {
        company: "FYP Project",
        timeframe: "Feb 2024 – Jul 2025",
        role: "Full Stack Developer",
        achievements: [
          <>Created 3D sign recognition app using FastAI and React Three Fiber.</>,
          <>Implemented Supabase backend for user data and content delivery.</>,
        ],
        images: [ {
        src: "/images/projects/sign/game-2.jpg",
        alt: "image",
        width: 16,
        height: 9
      }],
      },
      {
        company: "NutriDiaries",
        timeframe: "Feb 2024 – Feb 2025",
        role: "Full Stack Developer",
        achievements: [
          <>Created a dynamic blog using Next.js + Sanity.cms</>,
          <>Fullstack development complete with blog and admin panel for adding blogs</>,
        ],
        images: [ {
      src: "/images/projects/nutridiaries/screenshot (3).png",
      alt: "image",
      width: 16,
      height: 9
    }],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "University of Management and Technology (UMT), Lahore",
        description: <>B.S. in Computer Science, graduating July 2025.</>,
      },
      {
        name: "Punjab Group of Colleges (PGC), Lahore",
        description: <>Intermediate – 2021</>,
      },
      {
        name: "Beaconhouse School System (BSS), Lahore",
        description: <>Matriculation – 2019</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Frontend & UI",
        description: <>React, Next.js, TypeScript, Shadcn UI, React Three Fiber (R3F)</>,
        images: [],
      },
      {
        title: "Backend & APIs",
        description: <>Node.js, Express, FastAPI, Supabase, PostgreSQL, RESTful API design</>,
        images: [],
      },
      {
        title: "AI/ML & Python",
        description: <>FastAI, scikit-learn, Pandas, LangChain, RAG, Ollama integration</>,
        images: [],
      },
      {
        title: "Data & Visualization",
        description: <>Python, R (ggplot2, dplyr, caret), Matplotlib, Seaborn</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about development, AI, and systems...",
  description: `Read what ${person.name} has been up to recently`,
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Selected full-stack and AI projects by ${person.name}`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A visual archive by ${person.name}`,
  images: [
    {
      src: "/images/projects/sign/game-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/sign/game-png.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/sign/category.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/sign/colouring.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/sign/1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/sign/2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/sign/3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/sign/quiz-2-reaction.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/sign/wuiz-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/smartflow/img-2.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/smartflow/img-1.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/scrypthub/cover.PNG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/recruit/home.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/recruit/aboutUs.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/recruit/admin-login.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/recruit/admin-seo.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/recruit/admin.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/recruit/admon-leads.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/recruit/users.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/recruit/faq.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/nutridiaries/screenshot (3).png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/nutridiaries/screenshot (2).png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/nutridiaries/screenshot (4).png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/nutridiaries/screenshot (5).png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/nutridiaries/screenshot (6).png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/nutridiaries/screenshot (7).png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/reborn/figma.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/reborn/cover.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/reborn/img-1.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/reborn/img-2.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/projects/reborn/img-3.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/reborn/img-4.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
