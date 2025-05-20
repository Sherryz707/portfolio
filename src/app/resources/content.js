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
    title: <>Recent project: <strong className="ml-4">LatamRecruiting Platform</strong></>,
    href: "/work/Building-a-Scalable-Full-Stack-Recruitment-Platform-at-LatamRecruit",
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
        company: "Final Year Project (AI-Powered Sign Language Platform)",
        timeframe: "Feb 2024 – Present",
        role: "Full Stack Developer & ML Engineer",
        achievements: [
          <>Developed a real-time sign language recognition system using <strong>FastAI</strong>, trained on multilingual gesture datasets (ASL, Urdu ASL, numbers).</>,
          <>Integrated <strong>React Three Fiber</strong> and <strong>Three-VRM</strong> to animate 3D avatars based on ML predictions for immersive feedback.</>,
          <>Engineered a secure, scalable backend using <strong>Supabase (PostgreSQL)</strong> for user auth, content delivery, and progress tracking.</>,
          <>Seamlessly connected model inference to the frontend for <strong>live gesture-to-animation mapping</strong> using structured JSON pipelines.</>,
        ],
        images: [
          {
            src: "/images/projects/sign/game-2.JPG",
            alt: "Sign language e-learning game interface",
            width: 16,
            height: 9
          }
        ]
      },
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
          src: "/images/projects/recruit/home.JPG",
          alt: "image",
          width: 16,
          height: 9
        }]
      },{
        company: "ML Algorithms Series (Colab Notebooks)",
        timeframe: "Present",
        role: "ML Engineer (Self-Driven Learning Project)",
        achievements: [
          <>Completed a hands-on deep dive into core <strong>supervised machine learning algorithms</strong> using <strong>Jupyter Notebooks</strong> in <strong>Google Colab</strong>.</>,
          <>Implemented and compared performance of key models including <strong>Linear Regression</strong>, <strong>Ridge/Lasso/ElasticNet</strong>, <strong>Logistic Regression</strong>, <strong>Naive Bayes</strong>, <strong>KNN</strong>, <strong>Decision Trees</strong>, <strong>Random Forests</strong>, <strong>Gradient Boosting</strong>, <strong>AdaBoost</strong>, and <strong>XGBoost</strong>.</>,
          <>Visualized model metrics and feature impact using <strong>Matplotlib</strong>, <strong>Seaborn</strong>, and <strong>Confusion Matrices</strong> for interpretability.</>,
          <>Followed and completed the Udemy course "<em>The Complete Data Science with Machine Learning and NLP</em>" by <strong>Krish Naik</strong> as structured curriculum guidance.</>
        ],
        images: [
          {
            src: "/images/projects/ml-algos/colab-cover.PNG",
            alt: "Tree Algo in Colab",
            width: 16,
            height: 9
          }
        ]
      },
      {
        company: "AIQ Decisions",
        timeframe: "Jan 2025 – Feb 2025",
        role: "No-Code Developer Intern",
        achievements: [
          <>Developed a responsive <strong>real-time inventory management system</strong> using <strong>Google AppSheet</strong>, enabling seamless multi-device access and operational oversight.</>,
          <>Integrated <strong>BigQuery</strong> for scalable backend data handling and <strong>live reporting dashboards</strong> to support informed supply chain decisions.</>,
          <>Automated workflows for <strong>stock alerts, purchase orders, and supplier coordination</strong>, significantly reducing manual overhead.</>,
          <>Helped replace costly third-party systems like Zoho and NetSuite with a <strong>lightweight, AI-assisted internal tool</strong> tailored to business logic.</>
        ],
        images: [
          {
            src: "/images/projects/smartflow/img-1.png",
            alt: "Inventory workflow dashboard interface",
            width: 16,
            height: 9
          }
        ]
      },
      {
        company: "Reborn Electronics",
        timeframe: "Sep 2023 – Sep 2024",
        role: "Full Stack Developer & AI Chatbot Integrator",
        achievements: [
          <>Engineered scalable e-commerce pages using <strong>Next.js</strong>, <strong>Saleor</strong>, and <strong>GraphQL</strong>, with dynamic catalog features like filtering, pagination, and personalized recommendations.</>,
          <>Integrated <strong>JazzCash</strong> for secure, localized payment processing, ensuring smooth UX and data privacy compliance.</>,
          <>Built and styled a fully responsive UI from <strong>Figma</strong> designs using <strong>Headless UI</strong> and <strong>Tailwind CSS</strong> for consistent multi-device performance.</>,
          <>Developed a basic <strong>RAG-based AI assistant</strong> using <strong>LangChain</strong> and <strong>Ollama</strong> with vector embeddings to help customers browse and find products intelligently.</>
        ],
        images: [
          {
            src: "/images/projects/reborn/cover.jpeg",
            alt: "E-commerce platform",
            width: 16,
            height: 9
          }
        ]
      },
      {
        company: "Resilience",
        timeframe: "Feb 2024 – Feb 2024",
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
        company: "NutriDiaries",
        timeframe: "Feb 2024 – Mar 2024",
        role: "Full Stack Developer",
        achievements: [
          <>Created a dynamic blog using Next.js + Sanity.cms</>,
          <>Fullstack development complete with blog and admin panel for adding blogs</>,
        ],
        images: [ {
      src: "/images/projects/nutridiaries/Screenshot (3).png",
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
      src: "/images/projects/sign/game-2.JPG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/sign/game-png.JPG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/sign/category.JPG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/sign/colouring.JPG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/sign/1.JPG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/sign/2.JPG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/sign/3.JPG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/sign/quiz-2-reaction.JPG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/sign/wuiz-2.JPG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/smartflow/img-2.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/ml-algos/colab-2.PNG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/ml-algos/colab-3.PNG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/ml-algos/colab-cover.PNG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/ml-algos/colab.PNG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/scrypthub/cover.PNG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/recruit/home.JPG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/recruit/aboutUs.JPG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/recruit/admin-login.JPG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/recruit/admin-seo.JPG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/recruit/admin.JPG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/recruit/admon-leads.JPG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/recruit/users.JPG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/recruit/faq.JPG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/nutridiaries/Screenshot (3).png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/nutridiaries/Screenshot (2).png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/nutridiaries/Screenshot (4).png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/nutridiaries/Screenshot (5).png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/nutridiaries/Screenshot (6).png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/nutridiaries/Screenshot (7).png",
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
