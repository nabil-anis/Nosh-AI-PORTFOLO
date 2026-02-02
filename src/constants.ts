import { Project, AtmosphereItem, Achievement, Website, TeamMember } from './types.ts';

export const PROJECTS: Project[] = [
  // AI Automations
  {
    id: 'logic-flow-omega',
    client: 'Lumina Health',
    scope: 'Clinical Logic Engine',
    description: 'An autonomous orchestration layer that automates patient data routing and clinical decision support. This system replaced manual triage, resulting in a 40% reduction in operational overhead.',
    category: 'AI Automations',
    media: [
      { type: 'video', src: '/assets/circuit-board.mp4' },
      { type: 'image', src: '/assets/logic-flow.jpg' }
    ]
  },
  {
    id: 'neural-interface-one',
    client: 'Shift Capital',
    scope: 'Market Intelligence Layer',
    description: 'A high-frequency data pipeline that processes global market signals into actionable intelligence. Optimized for speed and precision, it identifies capital trends 3x faster than manual monitoring.',
    category: 'AI Automations',
    media: [
      { type: 'video', src: '/assets/abstract-tech.mp4' },
      { type: 'image', src: '/assets/neural-interface.jpg' }
    ]
  },
  {
    id: 'auto-infra-3',
    client: 'Veridian Logistics',
    scope: 'Supply Chain Synapse',
    description: 'Automated 85% of warehouse dispatch logic through a decentralized system that predicts bottlenecks and re-routes assets in real-time.',
    category: 'AI Automations',
    media: [
      { type: 'image', src: '/assets/auto-infra.jpg' }
    ]
  },

  // Websites
  {
    id: 'nosh-lab-01',
    client: 'Nosh Lab',
    scope: 'The Orchestrator UI',
    description: 'A high-performance control panel emphasizing sub-second interaction and absolute clarity. Built to handle complex system monitoring with aesthetic restraint.',
    category: 'Websites',
    media: [
      { type: 'video', src: '/assets/binary-code.mp4' }
    ]
  },
  {
    id: 'minimal-store-2',
    client: 'Aether Collective',
    scope: 'Bespoke Commerce Flow',
    description: 'A premium, headless commerce experience for high-end digital assets. Focused on low-friction checkout flows and retina-grade visual fidelity.',
    category: 'Websites',
    media: [
      { type: 'image', src: '/assets/minimal-store.jpg' }
    ]
  },

  // Chatbots
  {
    id: 'intel-bot-9',
    client: 'Nexus Retail',
    scope: 'Predictive Sales Interface',
    description: 'A context-aware support agent that uses purchase history and sentiment analysis to guide users through complex buying decisions.',
    category: 'Chatbots',
    media: [
      { type: 'video', src: '/assets/holographic-planet.mp4' }
    ]
  },

  // Voice Agents
  {
    id: 'voice-agent-delta',
    client: 'Apex Global',
    scope: 'Autonomous Voice Infra',
    description: 'A zero-latency voice system capable of handling thousands of simultaneous calls with human-like vocal cadence and reasoning.',
    category: 'Voice Agents',
    media: [
      { type: 'video', src: '/assets/spinning-head.mp4' },
      { type: 'image', src: '/assets/voice-agent.jpg' }
    ]
  }
];

export const ATMOSPHERE: AtmosphereItem[] = [
  { id: '1', src: '/assets/atmosphere-1.jpg', alt: 'Production Huddle' },
  { id: '2', src: '/assets/atmosphere-2.jpg', alt: 'The Lab' },
  { id: '3', src: '/assets/atmosphere-3.jpg', alt: 'Strategy Handshake' },
  { id: '4', src: '/assets/atmosphere-4.jpg', alt: 'System Deployment' },
  { id: '5', src: '/assets/atmosphere-5.jpg', alt: 'Architecture Session' },
  { id: '6', src: '/assets/atmosphere-6.jpg', alt: 'Infrastructure Audit' }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'infra-01',
    category: 'Engineering',
    title: 'Neural Core Alpha',
    date: 'February 2025',
    description: 'Developed a proprietary state management system for real-time agentic workflows.',
    video: '/assets/abstract-tech.mp4',
    images: ['/assets/achievement.jpg']
  }
];

export const WEBSITES: Website[] = [
  {
    id: 'nosh-lab-01',
    name: 'The Orchestrator',
    description: 'A live control panel for autonomous voice systems.',
    url: 'https://nosh.ai/lab/orchestrator',
    techStack: ['React', 'Framer Motion', 'WebSockets', 'AI']
  },
  {
    id: 'nosh-lab-02',
    name: 'Shift Terminal',
    description: 'High-frequency data orchestration platform for capital management.',
    url: 'https://nosh.ai/lab/terminal',
    techStack: ['TypeScript', 'Next.js', 'PostgreSQL']
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'lead',
    name: 'Founder',
    role: 'Lead Architect',
    bio: 'A builder, not a spectator. Architects the primary logic gates and technical philosophy that drives NOSH.',
    image: '/assets/team-lead.jpg'
  },
  {
    id: 'member-1',
    name: 'Sarah Chen',
    role: 'Neural Interface Designer',
    bio: 'Specializing in the visual grammar of AI systems. Sarah ensures that high-complexity logic remains aesthetically accessible.',
    image: '/assets/team-1.jpg'
  },
  {
    id: 'member-2',
    name: 'Marcus Thorne',
    role: 'Systems Orchestrator',
    bio: 'The engineer behind the curtain. Marcus builds the resilient back-end infrastructures that handle multi-agent orchestration at scale.',
    image: '/assets/team-2.jpg'
  },
  {
    id: 'member-3',
    name: 'Elena Rossi',
    role: 'Agentic Workflow Engineer',
    bio: 'Expert in RAG pipelines and autonomous logic loops. Elena bridges the gap between raw data and intelligent execution.',
    image: '/assets/team-3.jpg'
  },
  {
    id: 'member-4',
    name: 'David Kim',
    role: 'Voice Infrastructure Lead',
    bio: 'Architecting zero-latency vocal Cadence. David manages the tele-reasoning systems that allow machines to talk like humans.',
    image: '/assets/team-4.jpg'
  }
];