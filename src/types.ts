
export interface Project {
  id: string;
  client: string;
  scope: string;
  description: string;
  category: 'AI Automations' | 'Websites' | 'Chatbots' | 'Voice Agents';
  media: { type: 'image' | 'video'; src: string }[];
  url?: string;
  isEmbeddable?: boolean;
  techStack?: string[];
}

export interface AtmosphereItem {
  id: string;
  src: string;
  alt: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export enum Page {
  Engine = 'engine',
  Work = 'work',
  Gallery = 'gallery'
}

export interface Achievement {
  id: string;
  category: string;
  title: string;
  date: string;
  description: string;
  video?: string;
  images?: string[];
}

export interface Website {
  id: string;
  name: string;
  description: string;
  url: string;
  techStack: string[];
}
