export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  tasks: string[];
  iconType: 'work' | 'code' | 'terminal';
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  dataAlt?: string;
  tags: string[];
  codeUrl: string;
  demoUrl: string;
  iconType: 'hub' | 'analytics' | 'code';
}

export interface TechStackCategory {
  title: string;
  iconType: 'code' | 'cloud' | 'database' | 'layout';
  skills: string[];
}

export interface DeveloperProfile {
  name: string;
  surname: string;
  role: string;
  subTitle: string;
  bio: string;
  location: string;
  passion: string;
  coffeeLevel: string;
  experienceYears: number;
  usersScaled: string;
  techStack: TechStackCategory[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  codeSnippet: string;
  codeLanguage: string;
}
