// Project interface
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  image?: string;
}

// Skill interface
export interface Skill {
  name: string;
  level: number;
  icon: string;
  logo?: string;
}

// Social Link interface
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// Form Data interface
export interface FormData {
  name: string;
  email: string;
  message: string;
}