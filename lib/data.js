export const profile = {
  name: "Aakash Chauhan",
  initials: "AC",
  role: "Full Stack / Software Engineer",
  tagline:
    "I build full-stack web applications, AI-powered systems, and developer tools — from responsive interfaces to reliable backend services.",
  email: "aakashchuahan200@gmail.com",
  resumeUrl: "/aakash-chauhan-resume.pdf",
  socials: {
    github: "https://github.com/Aakashcchauhan",
    linkedin: "https://www.linkedin.com/in/aakash-chauhan-/",
  },
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Lab", href: "#lab" },
  { label: "Experience", href: "#experience" },
  { label: "Focus", href: "#focus" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "8+", label: "Major Projects" },
  { value: "1+", label: "Year Development" },
  { value: "10+", label: "Technologies" },
];

export const marqueeItems = [
  "Full-Stack Development",
  "Web Applications",
  "AI & RAG",
  "Developer Tools",
  "Open to Opportunities",
];

export const about = {
  lead: "I'm Aakash Chauhan, a Full Stack / Software Engineer focused on building practical, scalable software. I enjoy working across the stack — from responsive interfaces and APIs to AI-powered systems, databases, and background workflows.",
  builds: [
    {
      title: "AI & RAG Pipelines",
      desc: "Semantic search, embeddings, retrieval systems and AI-powered applications.",
    },
    {
      title: "E-Commerce & APIs",
      desc: "Product platforms, authentication, payments, inventory and order workflows.",
    },
    {
      title: "Developer Tools",
      desc: "Code auditing, automation, CLI tools and developer workflows.",
    },
    {
      title: "Web Platforms",
      desc: "Full-stack applications using modern frontend and backend architectures.",
    },
  ],
  goal: "I want to work with engineering teams where I can contribute to real products, deepen my systems knowledge, and continue growing as a full-stack engineer.",
};

export const stack = [
  {
    title: "Languages",
    icon: "code",
    items: ["JavaScript (ES6+)", "Java (Basic)", "C (Basic)", "C++ (Basic)"],
    note: "Core programming languages for application logic, backend systems, and object-oriented development.",
  },
  {
    title: "Frontend",
    icon: "terminal",
    items: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS", "HTML5", "CSS3"],
    note: "Responsive web interfaces built with modern component architectures and state management.",
  },
  {
    title: "Backend",
    icon: "database",
    items: ["Node.js", "Express.js", "RESTful API Design", "JWT Authentication", "WebSocket"],
    note: "Scalable backend services, secure authentication, real-time protocols and API architecture.",
  },
  {
    title: "Databases",
    icon: "cube",
    items: ["MongoDB", "Mongoose", "Supabase"],
    note: "Document and relational database design, ODM modeling, and cloud database platforms.",
  },
  {
    title: "DevOps & Cloud",
    icon: "terminal",
    items: ["Docker", "CI/CD", "Firebase"],
    note: "Containerization, automated build & deployment pipelines, and cloud platform services.",
  },
  {
    title: "Tools & Platforms",
    icon: "git",
    items: ["Git", "GitHub", "Postman", "GSAP"],
    note: "Version control, API testing, developer tools, and web animation libraries.",
  },
];

export const projects = [
  {
    index: "01",
    title: "Advanced RAG Pipeline",
    kind: "Production-grade document retrieval & AI response system",
    summary:
      "A semantic search and AI response generation system designed for handling large document collections at scale. Features BullMQ background job processing, WebSocket real-time updates, and resilient error handling for enterprise use.",
    problem:
      "Naive document search returns irrelevant results and LLMs hallucinate without proper context. Built a production RAG pipeline with semantic chunking, parent-child retrieval, and real-time monitoring to deliver accurate, grounded AI responses.",
    features: [
      "Semantic Document Retrieval — parent-child chunking for context accuracy",
      "Pinecone Vector Database — fast similarity search at scale",
      "OpenAI Integration — powered response generation",
      "Real-time Monitoring — WebSocket dashboards for job tracking",
      "Background Job Processing — BullMQ for resilient document ingestion",
      "Scalable REST APIs — handles high-throughput search and inference",
      "Production-Ready — error handling, logging, rate limiting",
    ],
    tech: ["Next.js", "Node.js / Express.js", "OpenAI API", "Pinecone", "Redis", "WebSocket", "BullMQ"],
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80",
    links: {
      github: "https://github.com/Aakashcchauhan/Advanced-RAG-Pipeline",
      demo: null,
      docs: null,
    },
  },
  {
    index: "02",
    title: "Divya Drishti GitAgent",
    kind: "AI-powered code auditor & workflow agent",
    summary:
      "An automated code review and security auditing system that runs before deployment. Runs as a CLI tool, integrates with GitHub Actions, and generates structured audit reports — making pre-deployment checks fast and reliable.",
    problem:
      "Manual code reviews miss edge cases and take time. Divya Drishti scans entire codebases in seconds, detects security risks, logic flaws, and performance bottlenecks, then suggests auto-fixes.",
    features: [
      "CLI Distribution — local code analysis and CI/CD pipelines",
      "Repository Analysis — deep scanning for logic flaws and edge cases",
      "GitHub Actions Integration — runs automated reviews on push/PR",
      "AI Security Audit — detects unsafe patterns, secrets, and injection risks",
      "Structured Reports — detailed issue breakdowns with remediation steps",
    ],
    tech: ["Node.js", "JavaScript", "OpenAI API", "GitHub Actions", "CLI"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80",
    links: {
      github: "https://github.com/Aakashcchauhan/Divya-drishti",
      npm: null,
      docs: null,
    },
  },
  {
    index: "03",
    title: "A1 Enterprises",
    kind: "Medical/ophthalmic e-commerce platform backend",
    summary:
      "Production backend for a live e-commerce platform serving healthcare distribution. Deployed and handling real transactions with secure payment verification and audit logging.",
    problem:
      "Building secure, scalable payment and inventory systems from scratch requires careful API design and payment integration. Built a complete REST backend with product catalogs, order management, user authentication, and secure Razorpay payment integration.",
    features: [
      "Product Catalogue & Inventory — structured healthcare distribution APIs",
      "Authentication & Roles — JWT and Firebase Admin for user identity",
      "Orders & Checkout — server-side order verification and transaction handling",
      "Razorpay Integration — secure payment processing with HMAC signature verification",
      "MongoDB Database — schema design for products, orders, and audit logs",
      "Admin Functionality — backend management APIs for store operations",
    ],
    tech: ["Next.js API Routes", "Node.js / Express.js", "MongoDB / Mongoose", "Firebase Admin", "JWT", "Razorpay"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80",
    links: {
      github: "https://github.com/Aakashcchauhan",
      live: null,
    },
  },
  {
    index: "04",
    title: "Career Guidance Platform",
    kind: "Personalized career roadmap & mock interview tool",
    summary:
      "An interactive platform that helps students and professionals navigate career decisions with personalized guidance. Includes secure authentication, profile persistence, and interview history tracking.",
    problem:
      "Career advice is scattered and generic. Built a full-stack platform using OpenAI to provide personalized career recommendations and conduct mock interviews that adapt to the user's background and goals.",
    features: [
      "Firebase Authentication — secure sign-up, login, and session persistence",
      "Career Roadmaps — AI-generated step-by-step career navigation",
      "AI Guidance — adaptive career consultation tailored to user skills",
      "Mock Interviews — interactive practice sessions with instant AI feedback",
      "User Profiles — Firestore database for storing progress and preferences",
      "Interview History — track improvement over time with detailed session logs",
    ],
    tech: ["React.js", "Next.js", "Tailwind CSS", "Firebase / Firestore", "OpenAI API"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
    links: {
      github: "https://github.com/Aakashcchauhan/Career-Guidance",
      demo: "https://career-guidance-opal.vercel.app/",
    },
  },
];

export const layers = [
  {
    id: "frontend",
    name: "Frontend",
    headline: "Make it feel obvious.",
    blurb:
      "Build interfaces with clear hierarchy, responsive layouts, reusable components and purposeful motion.",
    badge: "React + Next.js",
    command: "ship --surface thoughtful-ui",
    code: [
      "const experience = {",
      "  clarity: true,",
      "  responsive: true,",
      "  motion: 'meaningful'",
      "}",
    ],
  },
  {
    id: "backend",
    name: "Backend & Systems",
    headline: "Make it reliable.",
    blurb:
      "Build predictable services with clean data models, validation and structured API flows.",
    badge: "Node.js + APIs",
    command: "ship --service resilient-api",
    code: [
      "router.post('/api/query', async (req, res) => {",
      "  const context = await vectorDb.query(req.body.embeddings)",
      "",
      "  return res.status(200).json({ context })",
      "})",
    ],
  },
  {
    id: "automation",
    name: "Automation & Queues",
    headline: "Make it repeatable.",
    blurb:
      "Move heavy asynchronous work into background workers instead of blocking user-facing requests.",
    badge: "Redis + BullMQ",
    command: "ship --pipeline async-workers",
    code: [
      "worker.process(async (job) => {",
      "  const result = await processJob(job.data)",
      "",
      "  await saveResult(result)",
      "})",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    institution: "Maharshi Dayanand University",
    period: "Aug 2023 — July 2026",
    grade: "67%",
  },
  {
    degree: "Diploma — Computer Science & Engineering",
    institution: "Aditya Institute of Technology",
    period: "Aug 2020 — May 2023",
    grade: "First Class with Distinction",
  },
];

export const training = [
  {
    title: "Node.js Back-End Development Training",
    institution: "Internshala Trainings · Online",
    period: "Jun 2024 — Jul 2024 · 6 Weeks",
    description:
      "Successfully completed a 6-week online certified training in Node.js. Covered JavaScript fundamentals, asynchronous programming, Node.js modules, and building web applications with Express.js.",
  },
  {
    title: "Full Stack Developer Training",
    institution: "Cetpa Infotech Pvt. Ltd. · Noida",
    period: "Nov 2022 — May 2023",
    description:
      "Completed hands-on training in full-stack web development using Django. Gained practical experience in HTML, CSS, JavaScript, Python, and Django, building dynamic web applications with user authentication, database integration, and RESTful APIs.",
  },
];

export const focus = {
  status: "Open to opportunities",
  lead:
    "I'm currently looking for Full-Stack and Software Engineering opportunities where I can contribute to real-world products while continuing to strengthen my backend, systems, and AI engineering skills.",
  items: [
    {
      title: "Learning",
      body: "Java Backend Development · Spring Boot · System Design · Redis · Distributed Systems · Queue Architectures",
    },
    {
      title: "Building",
      body: "AI-Powered Full-Stack Dashboards · RAG Pipelines · Async Workflows · Developer Tools · AI Analysis Systems",
    },
    {
      title: "Looking for",
      body: "Full-Stack / Software Engineering Roles",
    },
  ],
};

