/**
 * KAFEEL RAZA — EDITORIAL PORTFOLIO DATA CONFIGURATION
 * Complete with Exact Live Deployment URLs & GitHub Open Source Imagery
 */

export const portfolioData = {
  editorName: "KAFEEL RAZA",
  editionTitle: "THE KAFEEL RAZA GAZETTE",
  roleTitle: "BACKEND & BLOCKCHAIN DEVELOPER",
  volumeNo: "VOL. 2026 — EDITION 01",
  location: "BAREILLY, UTTAR PRADESH",
  phone: "+91 63955 33990",
  email: "kafeelraza55@gmail.com",
  githubUrl: "https://github.com/kafeelraza",
  linkedinUrl: "https://linkedin.com/in/kafeelraza",
  resumePdfUrl: "file:///C:/Users/kafee/OneDrive/Desktop/Kafeel_Raza_Resume_TeamFlow.pdf",

  stamp: {
    date: "2026/2027",
    signatureText: "Kafeel Raza",
    subtitle: "AUTHENTIC CS RESUME"
  },

  heroBio: {
    nameHeader: "KAFEEL RAZA",
    subHeader: "BACKEND & BLOCKCHAIN DEVELOPER | FINAL-YEAR CS STUDENT",
    dropCap: "C",
    text: "omputer Science student focused on backend and blockchain development, with hands-on experience building MERN applications, production-ready SaaS features, and Ethereum smart-contract systems. Comfortable developing REST APIs, authentication flows, MVC-based applications, and Web3 integrations. Seeking a software engineering, backend, or blockchain internship."
  },

  skills: [
    {
      category: "LANGUAGES & FOUNDATIONS",
      items: ["JavaScript (ES6+)", "TypeScript", "Solidity (Smart Contracts)", "C Programming", "Data Structures & Algorithms", "Problem Solving"]
    },
    {
      category: "BACKEND & APIS",
      items: ["Node.js & Express.js", "NestJS Framework", "RESTful API Design", "MVC Architecture", "JWT Auth & Refresh Tokens", "Swagger API Docs"]
    },
    {
      category: "BLOCKCHAIN & WEB3",
      items: ["Ethereum Ecosystem", "Polygon Network", "Smart Contracts", "Web3.js Integration", "Wallet Integration (MetaMask)"]
    },
    {
      category: "DATABASES & TOOLING",
      items: ["PostgreSQL & Prisma ORM", "MongoDB & Mongoose", "Git & GitHub Workflows", "Postman & VS Code", "Cloudinary & Vercel/Render"]
    }
  ],

  experience: [
    {
      year: "OPEN SOURCE",
      role: "Open Source Contributor — ethereum.org",
      company: "ETHEREUM FOUNDATION ECOSYSTEM | GITHUB: KAFEELRAZA",
      description: "Authored 2 merged pull requests in ethereum/ethereum-org-website. Centralized site-title suffix in metadata across 14 files (<a href='https://github.com/ethereum/ethereum-org-website/pull/18196' target='_blank' class='editorial-link'>PR #18196</a>). Added Stylus to official Rust resources (<a href='https://github.com/ethereum/ethereum-org-website/pull/18189' target='_blank' class='editorial-link'>PR #18189</a>). Proposed Netlify Edge Function Integration for Matomo AI traffic tracking (<a href='https://github.com/ethereum/ethereum-org-website/pull/18284' target='_blank' class='editorial-link'>PR #18284</a>)."
    },
    {
      year: "2023 — 2027",
      role: "B.Tech in Computer Science & Information Technology",
      company: "MAHATMA JYOTIBA PHULE ROHILKHAND UNIVERSITY (MJPRU), BAREILLY",
      description: "Final-year Computer Science student focusing on backend architecture, distributed systems, and Web3 smart contracts. Secured 1st position in C Programming Workshop at MJPRU."
    }
  ],

  projects: [
    {
      id: "teamflow-saas",
      spineTitle: "TEAMFLOW SAAS",
      year: "2024",
      isNew: true,
      category: "NESTJS / POSTGRESQL / REACT",
      title: "TEAMFLOW SAAS",
      subtitle: "Multi-Tenant Project Management Platform",
      shortDescription: "Production-ready SaaS with JWT auth, refresh tokens, organizations, RBAC, projects, tasks, comments, attachments, activity logs, notifications, and dashboard metrics.",
      storyText: "Integrated Neon PostgreSQL, Prisma migrations, Render API deployment, Vercel frontend deployment, Cloudinary uploads, CORS, health/readiness checks, and Swagger API docs. Implemented email verification and forgot-password flows with validation, rate limiting, and automated unit/e2e test coverage.",
      role: "Backend & Systems Architect",
      techStack: ["NestJS", "React", "TypeScript", "Prisma", "PostgreSQL", "Cloudinary"],
      coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&auto=format&fit=crop&q=80",
      liveSiteUrl: "https://teamflow.dareel.online/",
      githubUrl: "https://github.com/kafeelraza"
    },
    {
      id: "legacy-vault",
      spineTitle: "LEGACY VAULT",
      year: "2024",
      isNew: true,
      category: "SOLIDITY / BLOCKCHAIN / WEB3",
      title: "LEGACY VAULT",
      subtitle: "Decentralized Digital Inheritance System",
      shortDescription: "Smart contract platform for transferring digital assets to designated beneficiaries through a decentralized inheritance workflow.",
      storyText: "Developed smart contracts for transferring digital assets on Ethereum & Polygon networks. Implemented wallet-recovery logic and integrated smart contracts with a web interface using Web3.js.",
      role: "Smart Contract & Web3 Engineer",
      techStack: ["Solidity", "Ethereum", "Polygon", "Web3.js", "Smart Contracts"],
      coverImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1400&auto=format&fit=crop&q=80",
      liveSiteUrl: "https://legacy-vault-ui.vercel.app/app",
      githubUrl: "https://github.com/kafeelraza"
    },
    {
      id: "ethereum-org-os",
      spineTitle: "ETHEREUM.ORG OS",
      year: "2024",
      isNew: true,
      category: "OPEN SOURCE / ETHEREUM",
      title: "ETHEREUM.ORG OS",
      subtitle: "Open Source Contributor — Ethereum Foundation",
      shortDescription: "Authored merged pull requests in ethereum/ethereum-org-website, contributing production code and ecosystem documentation.",
      storyText: "Centralized site-title suffix in metadata across 14 files (PR #18196). Added Stylus to official Rust resources (PR #18189). Proposed Netlify Edge Function Integration for Matomo AI traffic tracking (PR #18284).",
      role: "Core Ecosystem Contributor",
      techStack: ["TypeScript", "Next.js", "Edge Functions", "Open Source"],
      coverImage: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1400&auto=format&fit=crop&q=80",
      liveSiteUrl: "https://github.com/ethereum/ethereum-org-website/pulls?q=is%3Apr+author%3Akafeelraza",
      githubUrl: "https://github.com/ethereum/ethereum-org-website"
    }
  ]
};
