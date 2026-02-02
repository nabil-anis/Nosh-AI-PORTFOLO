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
      { type: 'video', src: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-circuit-board-1582-large.mp4' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2340&auto=format&fit=crop' }
    ]
  },
  {
    id: 'neural-interface-one',
    client: 'Shift Capital',
    scope: 'Market Intelligence Layer',
    description: 'A high-frequency data pipeline that processes global market signals into actionable intelligence. Optimized for speed and precision, it identifies capital trends 3x faster than manual monitoring.',
    category: 'AI Automations',
    media: [
      { type: 'video', src: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-elements-loop-video-31627-large.mp4' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2344&auto=format&fit=crop' }
    ]
  },
  {
    id: 'auto-infra-3',
    client: 'Veridian Logistics',
    scope: 'Supply Chain Synapse',
    description: 'Automated 85% of warehouse dispatch logic through a decentralized system that predicts bottlenecks and re-routes assets in real-time.',
    category: 'AI Automations',
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2340&auto=format&fit=crop' }
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
      { type: 'video', src: 'https://assets.mixkit.co/videos/preview/mixkit-digital-binary-code-background-31624-large.mp4' }
    ]
  },
  {
    id: 'minimal-store-2',
    client: 'Aether Collective',
    scope: 'Bespoke Commerce Flow',
    description: 'A premium, headless commerce experience for high-end digital assets. Focused on low-friction checkout flows and retina-grade visual fidelity.',
    category: 'Websites',
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2340&auto=format&fit=crop' }
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
      { type: 'video', src: 'https://assets.mixkit.co/videos/preview/mixkit-holographic-display-of-a-planet-and-data-31631-large.mp4' }
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
      { type: 'video', src: 'https://assets.mixkit.co/videos/preview/mixkit-spinning-head-hologram-31628-large.mp4' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2340&auto=format&fit=crop' }
    ]
  }
];

export const ATMOSPHERE: AtmosphereItem[] = [
  { id: '1', src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2340&auto=format&fit=crop', alt: 'Production Huddle' },
  { id: '2', src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2340&auto=format&fit=crop', alt: 'The Lab' },
  { id: '3', src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2340&auto=format&fit=crop', alt: 'Strategy Handshake' },
  { id: '4', src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2340&auto=format&fit=crop', alt: 'System Deployment' },
  { id: '5', src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2340&auto=format&fit=crop', alt: 'Architecture Session' },
  { id: '6', src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2340&auto=format&fit=crop', alt: 'Infrastructure Audit' }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'infra-01',
    category: 'Engineering',
    title: 'Neural Core Alpha',
    date: 'February 2025',
    description: 'Developed a proprietary state management system for real-time agentic workflows.',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-elements-loop-video-31627-large.mp4',
    images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2340&auto=format&fit=crop']
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
    name: 'Nabil',
    role: 'Founder & Lead Architect',
    bio: 'A builder, not a spectator. Nabil architects the primary logic gates and technical philosophy that drives NOSH.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2340&auto=format&fit=crop'
  },
  {
    id: 'member-1',
    name: 'Sarah Chen',
    role: 'Neural Interface Designer',
    bio: 'Specializing in the visual grammar of AI systems. Sarah ensures that high-complexity logic remains aesthetically accessible.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2340&auto=format&fit=crop'
  },
  {
    id: 'member-2',
    name: 'Marcus Thorne',
    role: 'Systems Orchestrator',
    bio: 'The engineer behind the curtain. Marcus builds the resilient back-end infrastructures that handle multi-agent orchestration at scale.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2340&auto=format&fit=crop'
  },
  {
    id: 'member-3',
    name: 'Elena Rossi',
    role: 'Agentic Workflow Engineer',
    bio: 'Expert in RAG pipelines and autonomous logic loops. Elena bridges the gap between raw data and intelligent execution.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2340&auto=format&fit=crop'
  },
  {
    id: 'member-4',
    name: 'David Kim',
    role: 'Voice Infrastructure Lead',
    bio: 'Architecting zero-latency vocal Cadence. David manages the tele-reasoning systems that allow machines to talk like humans.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2340&auto=format&fit=crop'
  }
];