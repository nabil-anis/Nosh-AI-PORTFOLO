import { Project, AtmosphereItem, Achievement, Website, TeamMember } from './types.ts';

export const PROJECTS: Project[] = [
  // AI Automations
  {
    id: 'logic-flow-omega',
    client: 'Lumina Health',
    scope: 'Clinical Logic Engine',
    description: "We worked with Lumina Health to solve a critical bottleneck: their triage team was drowning in data while patients waited for answers. We built a 'Clinical Brain' that understands patient data in real-time, instantly routing every piece of information to the right specialist. This wasn't just about overhead—it was about creating a system that thinks alongside doctors, allowing Lumina to respond 40% faster when every second counts.",
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
    description: "Shift Capital came to us needing more than just better data—they needed an unfair advantage in a market that never sleeps. We developed a neural intelligence layer that scans millions of global signals per second, identifying subtle market shifts that human analysts might miss for hours. By turning chaos into clear, actionable signals, we gave their team a 3x speed advantage, allowing them to move with total confidence before the rest of the world even knows the market is shifting.",
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
    description: "Logistics is often a constant battle against the unexpected. For Veridian, we transformed their static warehouse into a 'Living Organism.' We built a digital nervous system that predicts bottlenecks before they happen, automatically re-routing assets and labor in real-time. By automating 85% of their core logic, the system now self-corrects and optimizes without human intervention, ensuring that the supply chain never stops moving.",
    category: 'AI Automations',
    media: [
      { type: 'image', src: '/assets/auto-infra.jpg' }
    ]
  },

  // Websites
  {
    id: 'doctor-alex-carter',
    client: 'Dr. Alex Carter',
    scope: 'Virtual Healthcare Portfolio',
    description: "Dr. Alex Carter's vision was to make medical expertise available to everyone, regardless of the time. We built a platform that isn't just a website—it's a digital practice. It features an AI-driven medical consultant that can guide patients through complex health questions with the same empathy and precision as a face-to-face visit. This deployment proves that technology can actually make healthcare feel more human, not less, by being there for patients the exact moment they need help.",
    category: 'Websites',
    media: [
      { type: 'image', src: '/assets/logic-flow.jpg' }
    ],
    url: 'https://www.doctoralexcarter.com/',
    techStack: ['React', 'AI Orchestration', 'Node.js', 'PostgreSQL']
  },
  {
    id: 'construction-sales',
    client: 'Apex Construction',
    scope: 'AI-Driven Recruitment Hub',
    description: "In the high-stakes world of construction sales, the biggest limit on growth is the speed of hiring. We worked with Apex to build a recruitment ecosystem that interviews and vets candidates using autonomous AI agents. By automating the screening process, we allowed their management team to focus only on the top 5% of talent. It’s a case study in how AI can help a company double its workforce without adding a single extra hour of administrative work.",
    category: 'Websites',
    media: [
      { type: 'image', src: '/assets/neural-interface.jpg' }
    ],
    url: 'https://construction-tan-two.vercel.app/',
    isEmbeddable: true,
    efficiency: '91.4%',
    registry: 'APX_CNSTR_02',
    techStack: ['Next.js', 'Tailwind CSS', 'AI Orchestration', 'Vercel']
  },
  {
    id: 'online-ebook-fair',
    client: 'Online Ebook Fair',
    scope: 'Digital Literary Marketplace',
    description: "We were tasked with taking the legacy concept of a book fair and scaling it for a global audience. We built a massive digital marketplace that handles thousands of authors and millions of transactions through a fluid, high-performance interface. By optimizing the discovery layer, we made it just as easy for a reader to find a niche title as it is for an author to reach a new continent. It’s more than a store; it’s a living tribute to literary discovery in the digital age.",
    category: 'Websites',
    media: [
      { type: 'image', src: '/assets/grid-system.jpg' }
    ],
    url: 'https://onlineebookfair.com/home-2/',
    efficiency: '88.7%',
    registry: 'LIT_MARK_09',
    techStack: ['PHP', 'WooCommerce', 'MySQL', 'Custom API']
  },

  // Chatbots
  {
    id: 'sme-friend-chat-bot',
    client: 'The SME Friend',
    scope: 'Cognitive Business Concierge',
    description: "The SME Friend is a perfect example of how we help business owners who know they need AI but aren't sure where to start. Through a deep consultative process, we helped the client move from uncertainty to a powerful, easy-to-use digital assistant. This chatbot acts as a 24/7 business advisor for small and medium enterprises, helping them navigate complex tasks like creating business plans, managing cash flow, and discovering the best digital tools to grow their company. It’s not just a chatbot—it's a digital bridge that makes sophisticated business management accessible to everyone, helping entrepreneurs focus on what they do best while the AI handles the complexity.",
    category: 'Chatbots',
    url: 'https://thesmefriend.com/',
    isEmbeddable: true,
    efficiency: '92.1%',
    registry: 'SME_FRND_01',
    media: [
      { type: 'image', src: '/assets/chatbot.png' }
    ]
  },

  // Voice Agents
  {
    id: 'burq-digital-voice',
    client: 'Burq Digital',
    scope: 'Autonomous AI Agent',
    description: "Burq Digital wanted to provide a premium concierge experience without the massive overhead of a 24/7 call center. We architected a voice agent that doesn't just respond to commands—it understands conversation. Operating with total independence, this agent manages client inquiries and service bookings in both English and Arabic. It ensures that every lead is captured and every customer feels valued, even if they call at 3 AM. It’s a 24/7 front desk that never takes a day off.",
    category: 'Voice Agents',
    efficiency: '89.5%',
    registry: 'BRQ_VOX_88',
    media: [
      { type: 'video', src: '/assets/Arabic-voice.mp4' }
    ]
  },
  {
    id: 'dr-alex-voice',
    client: 'Dr. Alex',
    scope: 'Clinical Scheduling Engine',
    description: "Dr. Alex was spending so much time on patient scheduling that his time in the operating room was being compromised. We solved this with a high-precision voice agent that manages his entire practice's calendar. It handles everything from complex medical booking and rescheduling to automated patient reminders, all through natural conversation. The result is a system that gives a top surgeon hours of his life back every week while providing patients with an instant, human-like booking experience.",
    category: 'Voice Agents',
    efficiency: '93.2%',
    registry: 'DRX_MED_77',
    media: [
      { type: 'video', src: '/assets/Sarah-Voice.mp4' }
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
    id: 'doctor-alex-carter',
    name: 'Dr. Alex Carter',
    description: 'AI-driven healthcare consultant platform.',
    url: 'https://www.doctoralexcarter.com/',
    techStack: ['React', 'AI Orchestration', 'Node.js']
  },
  {
    id: 'construction-sales',
    name: 'Apex Construction',
    description: 'AI-driven recruitment and sales training ecosystem.',
    url: 'https://construction-tan-two.vercel.app/',
    techStack: ['Next.js', 'Tailwind CSS', 'AI Orchestration']
  },
  {
    id: 'online-ebook-fair',
    name: 'Online Ebook Fair',
    description: 'Digital ecosystem for literary marketplaces.',
    url: 'https://onlineebookfair.com/home-2/',
    techStack: ['PHP', 'WooCommerce', 'MySQL']
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