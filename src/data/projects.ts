export type WorkProject = {
  slug: string;
  name: string;
  subtitle: string;
  summary: string;
  description: string;
  problem: string;
  solution: string;
  outcome: string;
  techStack: string[];
  role: string;
  url: string;
  githubUrl?: string;
  categories: string[];
  cta: string;
  highlights: string[];
};

export const workProjects: WorkProject[] = [
  {
    slug: 'ai-agent-orchestrator',
    name: 'AI Agent Orchestrator',
    subtitle: 'Multi-Agent System for Autonomous Task Execution',
    summary: 'Framework for orchestrating multiple AI agents to decompose, plan, and execute complex tasks autonomously with persistent memory and tool-use.',
    description: 'Built an agentic AI system that coordinates multiple specialized LLM agents. Features include dynamic task decomposition, tool-use execution (web, terminal, code), persistent memory via vector search, and human-in-the-loop approval flows.',
    problem: 'Single LLM calls struggle with complex, multi-step tasks requiring research, coding, and verification. Users need systems that can break down goals and execute them autonomously.',
    solution: 'Designed a multi-agent architecture with an Orchestrator agent that delegates to specialized Workers (Research, Coding, Review). Implemented MCP for tool discovery and a Kanban-style state machine for task tracking.',
    outcome: 'Autonomous system capable of handling complex development tasks, reducing manual coding time by 60% for repetitive workflows.',
    techStack: ['TypeScript', 'LLM APIs', 'CrewAI', 'MCP', 'Vector Search', 'Hermes Framework'],
    role: 'AI Architect — System design, agent logic, tool integration, and memory management',
    url: '',
    categories: ['AI', 'Automation', 'Agentic'],
    cta: 'Case Study',
    highlights: [
      'Multi-agent decomposition & coordination',
      'Tool-use execution with MCP integration',
      'Persistent memory & RAG for context',
      'Human-in-the-loop approval workflow'
    ]
  },
  {
    slug: "ngeditapp",
    name: "NgeditApp",
    subtitle: "AI-Powered Video Editor for Android",
    summary: "Professional video editor with AI scene detection, timeline editing, and Media3/ExoPlayer integration.",
    description: "A professional-grade video editing application for Android designed to bridge the gap between simple mobile editors and complex desktop software.",
    problem: "Mobile video editors are either too simple or too complex. Users need precise control without desktop-level friction.",
    solution: "Built native Android app with Jetpack Compose UI, Media3 playback engine, and AI scene detection that auto-splits footage.",
    outcome: "Full-featured video editor with AI scene detection, professional timeline, real-time 60fps playback on Android.",
    techStack: ["Kotlin", "Jetpack Compose", "Media3", "ExoPlayer", "AI/ML", "Android SDK"],
    role: "Solo Developer — Architecture, UI, AI integration, Media3 pipeline",
    url: "https://github.com/dhikrama/ngeditapp",
    githubUrl: "https://github.com/dhikrama/ngeditapp",
    categories: ["Android", "Video Editing", "AI"],
    cta: "View on GitHub",
    highlights: [
      "AI-powered automatic scene detection and splitting",
      "Professional multi-track timeline with Media3",
      "Real-time 60fps playback preview",
      "Jetpack Compose UI with Material 3 design"
    ]
  },
  {
    slug: "nagili",
    name: "Nagili",
    subtitle: "Full-Stack Logistics Platform",
    summary: "End-to-end logistics platform with Android driver app, Hono API on Cloudflare Workers, Firebase backend, and real-time GPS tracking.",
    description: "A comprehensive logistics solution designed for small to medium operators to manage their fleet and deliveries effectively.",
    problem: "Small logistics operators need affordable, reliable platform to manage drivers, track deliveries, and handle photo proof-of-delivery.",
    solution: "Full-stack platform: Android driver app with offline-capable photo upload and GPS tracking, Cloudflare Workers API, Firebase for auth and storage.",
    outcome: "Production-ready platform with real-time tracking, photo proof-of-delivery, driver management, scalable serverless architecture.",
    techStack: ["Kotlin", "Jetpack Compose", "Hono.js", "Cloudflare Workers", "Firebase", "D1", "TypeScript", "WorkManager"],
    role: "Full-Stack Developer — Android app, API, cloud infrastructure, deployment",
    url: "https://nagili.dhikrama.com",
    categories: ["Full-Stack", "Android", "Cloud", "Logistics"],
    cta: "Visit Nagili",
    highlights: [
      "Real-time GPS tracking with offline fallback",
      "Photo proof-of-delivery with Firebase Storage",
      "Serverless API on Cloudflare Workers (<50ms response)",
      "Firebase Auth with Credential Manager integration"
    ]
  },
  {
    slug: "boringan",
    name: "Boringan",
    subtitle: "SEO-Optimized Service Website",
    summary: "Fast, SEO-optimized website for boring and cable excavation service — Astro 6, Vue islands, Tailwind CSS.",
    description: "A high-performance business website built to establish professional online presence and drive local leads.",
    problem: "Traditional service businesses lack professional online presence, making it hard for clients to find and trust them.",
    solution: "Lightning-fast website with Astro 6 SSR, Vue 3 islands for interactive elements, Tailwind CSS for responsive design, deployed on Cloudflare Pages.",
    outcome: "Sub-1s page load, perfect Lighthouse SEO score, professional web presence ranking for relevant keywords.",
    techStack: ["Astro 6", "Vue 3", "Tailwind CSS", "Cloudflare Pages", "TypeScript"],
    role: "Full-Stack Developer — Design, frontend architecture, SEO optimization, deployment",
    url: "https://boringan.com",
    categories: ["Web", "SEO", "Astro"],
    cta: "Visit Boringan",
    highlights: [
      "Sub-1s page load on Cloudflare Pages CDN",
      "Perfect Lighthouse SEO score",
      "Astro islands pattern for progressive enhancement",
      "Responsive design optimized for mobile-first market"
    ]
  },
  {
    slug: "kang-bangunan",
    name: "Kang Bangunan",
    subtitle: "Construction Progress Video Pipeline",
    summary: "Automated video assembly pipeline — turning site photos into professional progress videos.",
    description: "An automation tool designed to streamline construction documentation by converting static photos into engaging progress videos.",
    problem: "Construction companies need regular progress documentation but manual video editing is time-consuming.",
    solution: "Automated pipeline taking site photos, adding branded overlays and progress data, rendering professional MP4 videos.",
    outcome: "Automated video generation pipeline producing consistent, branded construction progress videos, reducing documentation time by 80%.",
    techStack: ["FFmpeg", "Python", "Image Processing", "Shell Scripts"],
    role: "Developer — Pipeline architecture, FFmpeg automation, video rendering",
    url: "",
    categories: ["Automation", "Video", "Python"],
    cta: "Case Study",
    highlights: [
      "Automated FFmpeg pipeline for video assembly",
      "Branded overlays with project metadata",
      "Consistent output quality across projects",
      "Reduced documentation time by 80%"
    ]
  }
];

export const getWorkProject = (slug: string) => workProjects.find(p => p.slug === slug);
export const getAllWorkSlugs = () => workProjects.map(p => p.slug);
