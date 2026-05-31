export const projectsData = [
  {
    slug: "verdantia-global",
    title: "Verdantia Global",
    description:
      "Built for Verdantia Global, this sophisticated sustainability intelligence platform delivers real-time carbon accounting, ecological analytics, and actionable insights, empowering enterprises to measure, optimize, and accelerate their sustainability performance.",
    longDescription:
      "Verdantia Global is a premium sustainability intelligence platform designed to elevate the way organizations engage with environmental data and ESG strategy. Developed as a fully frontend experience, the project blends modern interface design, immersive visual storytelling, and sophisticated user interactions to create a seamless enterprise-grade experience. From elegant layouts and responsive architecture to dynamic data visualizations and polished micro-interactions, every element was crafted to communicate sustainability insights with precision and clarity. The result is a contemporary digital presence that reflects Verdantia Global’s vision of innovation, environmental responsibility, and data-driven decision-making for a more sustainable future.",
    github: "https://github.com/salarmehfooz/verdantia-global",
    demo: "https://www.verdantiaglobal.com/",
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Tailwind CSS",
      "Recharts",
      "Framer Motion",
      "JWT",
      "Mongoose",
    ],
    coverImage: "/projects/verdantia-global/cover.png",
    gallery: [
      "/projects/verdantia-global/dashboard.png",
      "/projects/verdantia-global/analytics.png",
      "/projects/verdantia-global/reporting.png",
    ],
    challenges:
      "The platform required presenting large amounts of sustainability-related information through interactive dashboards, animated sections, and rich visual storytelling without compromising load times or responsiveness. Maintaining a consistent user experience across diverse screen sizes added further complexity.",

    solutions:
      "Leveraged modern React patterns, component-driven development, and optimized rendering techniques to create a scalable frontend architecture. Combined responsive design principles, lazy-loaded assets, and carefully orchestrated animations to deliver a fast, accessible, and visually engaging experience across all devices.",

    features: [
      "Interactive Sustainability Intelligence Dashboard",
      "Custom Data Visualization & Analytics Components",
      "Fully Responsive Enterprise-Grade User Experience",
      "Engaging Environmental Reporting Interfaces",
      "Modern Design System with Seamless User Journeys",
    ],
    role: "Full Stack Developer",
    client: "Verdantia Global",
    date: "April 2026",
  },
  {
    slug: "cmscents",
    title: "CM Scents",
    description:
      "An immersive, cinematic-themed luxury e-commerce application for premium fragrances, featuring signature notes modeling, aroma layering engines, and instant checkout.",
    longDescription:
      "CM Scents shifts perfume shopping into a multi-sensory digital experience. Built as a high-performance MERN solution with modern clean architecture, CMScents features dynamic, multi-layered filtration based on aroma accords (woody, floral, citrus, oriental notes). Users are guided through a sleek fragrance customizer, adding layer accords on top of classic bases to visualizes the composite fragrance wheel before secure payment checking.",
    github: "https://github.com/salarmehfooz/cmscents",
    demo: "https://cmscents.vercel.app",
    technologies: [
      "React",
      "Express",
      "Node.js",
      "MongoDB",
      "Redux Toolkit",
      "Stripe API",
      "Tailwind CSS",
      "Framer Motion",
    ],
    coverImage: "/projects/cmscents/cover.png",
    gallery: [
      "/projects/cmscents/storefront.png",
      "/projects/cmscents/aroma-wheel.png",
      "/projects/cmscents/checkout.png",
    ],
    challenges:
      "Building a responsive fragrance e-commerce experience with real-time cart updates, product browsing, and seamless page interactions required careful performance optimization to maintain smooth user engagement on mobile devices.",

    solutions:
      "Leveraged React performance optimizations, centralized application state with Redux Toolkit, and implemented efficient data persistence strategies to deliver a fast, responsive, and consistent shopping experience.",
    features: [
      "Elegant and fully responsive fragrance e-commerce experience",
      "Intuitive product discovery through search, categories, and curated collections",
      "Real-time cart management with persistent shopping sessions",
      "Secure and user-friendly checkout workflow for seamless purchasing",
      "Comprehensive admin dashboard for inventory tracking, product management, and order processing",
    ],

    role: "Full Stack Engineer",
    client: "CMS Scents",
    date: "May 2026",
  },
  {
    slug: "mental-health-app-portal",
    title: "Mindcure Wellness App",
    description:
      "A highly private cognitive wellness assistant, emotional logging portal, and mindful utility deck supporting daily mental health tracking and therapy coordination.",
    longDescription:
      "Recognizing that privacy and simplicity are vital during mental vulnerability, Mindcure combines intuitive daily logging tools with clinical mental wellness indexes. Built entirely inside a server-client design targeting HIPAA-aligned standards, the application maps mood fluctuations, triggers journaling exercises, provides breathing synchronization clocks, and hosts a directory of certified counselors.",
    github: "https://github.com/salarmehfooz/mental-health-app-portal",
    demo: "https://mental-health-app-portal.vercel.app",
    technologies: [
      "React",
      "Express",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Context API",
      "Recharts",
      "JSON Web Tokens",
      "BCrypt",
    ],
    coverImage: "/projects/mental-health/cover.png",
    gallery: [
      "/projects/mental-health/diary.png",
      "/projects/mental-health/tracker.png",
      "/projects/mental-health/counselor.png",
    ],
    challenges:
      "Creating highly expressive calendar charts tracking long-term mood patterns without sacrificing loading performance or data privacy on standard mobile connections.",
    solutions:
      "Constructed customized SVG layout grids mapping historical data arrays statically. Applied AES-256 server-side encryption to all user journal documents before saving to MongoDB, keeping all private data completely anonymized.",
    features: [
      "Secure encrypted Daily Journaling utilizing rich rich text elements",
      "Dynamic Mood Calendar styled visually with heat-map palettes",
      "Interactive breathing guide with visual pulse and expand transitions",
      "Crisis response directory with automatic coordinates mapping",
      "De-escalation exercise card system customizable by therapists",
    ],
    role: "MERN Engineer",
    client: "MindCure Health",
    date: "December 2025",
  },
];

export const pricingPlans = [
  {
    id: "starter",
    name: "Starter Website",
    subtitle:
      "Ideal for high-impact landing pages, personal branding, & creative portfolios.",
    price: "PKR 50,000",
    period: "one-time rate",
    color: "from-zinc-800/65 to-zinc-900/90 border-zinc-650/40 shadow-xl",
    features: [
      "Single-page immersive interactive layout",
      "Cinematic animated introduction & scroll effects",
      "100% unique custom design (no templates)",
      "Mobile-responsive layout with screen optimizations",
      "Basic contact form integration",
      "SEO setup & metadata tags configuration",
      "1 month of post-launch security support",
    ],
    popular: false,
  },
  {
    id: "professional",
    name: "Professional Website",
    subtitle:
      "Highly polished multi-page websites designed for premium brands and growing businesses.",
    price: "PKR 200,000",
    period: "one-time rate",
    color:
      "from-slate-800/80 via-zinc-900/90 to-amber-950/20 border-amber-500/35 shadow-amber-500/5 shadow-2xl",
    features: [
      "Multi-page core architecture (Up to 6 pages)",
      "Premium, cinematic visual layout & brand transition animations",
      "Custom components & complex interactive cards",
      "Advanced state structures (e.g. search, categorization, filters)",
      "Active Contact Form with backend sync or instant email forwarding",
      "Optimized Google SEO & schema metadata tags",
      "Self-managed CMS capability (easy project/blog editing)",
      "3 months of luxury care & tech support",
    ],
    popular: true,
  },
  {
    id: "premium",
    name: "Premium MERN Solution",
    subtitle:
      "Heavyweight full-stack platforms and bespoke web software tailored to scale.",
    price: "PKR 400,000",
    period: "starting rate",
    color:
      "from-zinc-800/80 to-stone-900/95 border-gold-500/30 shadow-gold-500/5 shadow-2xl",
    features: [
      "Complete custom full-stack architecture (MongoDB, Express, React, Node)",
      "Advanced administrative consoles & user access portals",
      "Real-time sockets telemetry or high-speed aggregation pipelines",
      "SCA-compliant Payment Gateway Gateway (Stripe, Paypal)",
      "Dynamic multi-level authentication & token session hierarchies",
      "High-fidelity custom visual charts (Recharts, D3)",
      "Optimized CDN assets orchestration & caching layers",
      "6 months of priority architect maintenance and scale guidance",
    ],
    popular: false,
  },
];

export const serviceComparisons = [
  {
    featureName: "Design Quality",
    starter: "Bespoke Luxury",
    professional: "Ultra-Premium Luxury",
    premium: "Cinematic Showcase",
  },
  {
    featureName: "Framer Motion Animations",
    starter: "Standard Smooth",
    professional: "Immersive & Cinematic",
    premium: "Complex Kinetic Artistry",
  },
  {
    featureName: "Database Syncing",
    starter: "No ",
    professional: "Optional CMS Sync",
    premium: "MongoDB Platform Integrations",
  },
  {
    featureName: "SEO & Social Tags",
    starter: "Basic",
    professional: "Advanced Optimization",
    premium: "Complete Dynamic Architecture",
  },
  {
    featureName: "Third-Party API Proxy",
    starter: "No",
    professional: "Up to 3 endpoints",
    premium: "Unlimited APIs & Decoupled Architecture",
  },
  {
    featureName: "Admin Dashboard Panel",
    starter: "No",
    professional: "No",
    premium: "Yes (Full-featured panel)",
  },
  {
    featureName: "Post-Launch Consulting",
    starter: "30 Days",
    professional: "90 Days",
    premium: "180 Days Priority Access",
  },
];

export const testimonials = [
  {
    id: "1",
    name: "Fatima Bajwa",
    role: "Chief Executive Officer",
    company: "Verdantia Global",
    content:
      "Working with Salar was an absolute game-changer. He transformed our complex emissions equations into an beautiful, fluid corporate dashboard. Recruiter feedback has been stellar, and his code cleanliness is unparalleled.",
    avatar: "/images/fatima.PNG",
  },
  {
    id: "2",
    name: "Ahmed Bux Memon",
    role: "Chief Executive Officer",
    company: "CM SCENTS ",
    content:
      "As the owner of C.M Scents, I am extremely pleased with the outstanding work done by our website creator. The website reflects the professionalism, elegance, and premium quality that our brand stands for. Every detail, from the design and layout to the user experience, has been carefully crafted to create a smooth and engaging journey for our customers. The creator demonstrated excellent creativity, technical expertise, and dedication throughout the project. Their ability to understand our vision and transform it into a modern, attractive online presence exceeded expectations. I sincerely appreciate their hard work and highly recommend their services to anyone seeking quality web development.",
    avatar: "/images/ahmed.png",
  },
  {
    id: "3",
    name: "Abdullah Khan",
    role: "Technical Co-Founder",
    company: "MindCure Health",
    content:
      "He delivered our MindCure portal on an aggressive timeline with flawless type structures and fully encrypted database pipelines. A remarkably responsive, innovative full-stack developer who values accessibility and user security.",
    avatar: "/images/abdullah.jpg",
  },
];

export const faqs = [
  {
    question: "How do we handle the GitHub data flow?",
    answer:
      "This application pulls meta-information directly from the developer's public repositories dynamically via the GitHub Web API, while keeping full-fidelity visual images safely isolated inside a local configurable directory to protect brand assets.",
  },
  {
    question: "What makes your MERN solutions 'Premium'?",
    answer:
      "Instead of spitting out bootstrap templates, I build custom design languages from scratch in Tailwind CSS, complete with staggered entry layouts, lightweight database querying, secure JWT authentication patterns, and responsive UX interactions.",
  },
  {
    question: "Is there a maintenance scheme for the bespoke systems?",
    answer:
      "Absolutely. Depending on the service package, I provide 1 to 6 months of absolute priority support, code audit, upgrades, and hands-on maintenance guidelines.",
  },
  {
    question: "Can we configure a headless CMS for dynamic content?",
    answer:
      "Yes. For Professional and Premium tiers, I easily hook up robust CMS managers like Sanity, Strapi, or direct markdown structures so you can edit materials in seconds!",
  },
];

export const professionalTimeline = [
  {
    year: "2024 - Present",
    title: "Full-Stack Freelance Engineer",
    company: "Creative Engineering Studio",
    description:
      "Architecting customized high-performance web products, interactive dashboards, and luxury brand assets utilizing React, Node.js, and specialized web motion frameworks.",
  },
];
