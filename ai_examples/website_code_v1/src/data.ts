import { DeveloperProfile } from './types';

export const alexMorganProfile: DeveloperProfile = {
  name: 'Alex',
  surname: 'Morgan',
  role: 'Full-Stack Engineer & Systems Architect',
  subTitle: 'Hello, I am',
  bio: 'I build robust, scalable web applications and distributed systems. Passionate about clean code, performance optimization, and creating elegant solutions to complex technical challenges.',
  location: 'San Francisco, CA',
  passion: 'Building scalable systems',
  coffeeLevel: 'Infinity',
  experienceYears: 6,
  usersScaled: '1M+',
  techStack: [
    {
      title: 'Frontend',
      iconType: 'layout',
      skills: ['React & Next.js', 'TypeScript', 'Tailwind CSS', 'Redux / Zustand', 'HTML5 / CSS3'],
    },
    {
      title: 'Backend',
      iconType: 'code',
      skills: ['Node.js & Express', 'Python & Django', 'Go', 'PostgreSQL', 'MongoDB'],
    },
    {
      title: 'Infrastructure & Tools',
      iconType: 'cloud',
      skills: ['AWS (EC2, S3, RDS)', 'Docker & Kubernetes', 'CI/CD (GitHub Actions)', 'Git', 'Jest & Cypress'],
    },
  ],
  experience: [
    {
      id: 'alex-job1',
      title: 'Senior Frontend Engineer',
      company: 'TechCorp Inc.',
      period: '2021 - Present',
      tasks: [
        'Lead the migration of a legacy monolithic frontend to a modern micro-frontend architecture using Next.js.',
        'Improved core web vitals by 40% through code splitting, lazy loading, and image optimization.',
        'Mentored junior developers and established frontend coding standards.',
      ],
      iconType: 'work',
    },
    {
      id: 'alex-job2',
      title: 'Full-Stack Developer',
      company: 'StartUp Solutions',
      period: '2018 - 2021',
      tasks: [
        'Developed and maintained RESTful APIs using Node.js and Express.',
        'Built responsive, interactive user interfaces with React and Redux.',
        'Integrated third-party payment gateways and authentication services.',
      ],
      iconType: 'code',
    },
  ],
  projects: [
    {
      id: 'alex-proj1',
      title: 'Nexus Analytics',
      description: 'A high-performance data visualization dashboard built for enterprise clients. Features real-time data streaming, customizable widgets, and export capabilities.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzb7WVoyoE0oQz89mZASBD4FJHRMmTqiC98bpNguwl-qSutI5PTVEvuEwAaDeuq4WhgE3K2Jf7eSkgbGmRt-o5EfVrMnz6oZ1Sba-iBuy7ERGT5RabHvsfOdUfh755aGuOOEldoGGFTPHgsZCHq02Dm5R6whmVhGsMDs3Ei9h7wXVGgnaOZGCzQZSgF38bf-TLCHfWIJVjTWJMIV4QEsVk391uNasF-sekSBnzB7qyCUMPf8GKpVW_ouEQufeeKVf43gHpRoRi4xVS',
      dataAlt: 'A sleek, modern data visualization dashboard displayed on a high-resolution screen. The UI features crisp line graphs, bar charts, and data tables rendered in a light mode palette of white, pale blue, and indigo. The overall design is clean, professional, and technically focused, embodying a fresh corporate tech aesthetic.',
      tags: ['React', 'D3.js', 'Node.js'],
      codeUrl: '#',
      demoUrl: '#',
      iconType: 'analytics',
    },
    {
      id: 'alex-proj2',
      title: 'DevSync',
      description: 'A collaborative code editor supporting real-time multi-user editing, integrated terminal, and intelligent syntax highlighting for over 20 languages.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMfXOntXeBESKFgb8nE8CnzMacZ84WQ-56vzxEbbdmlwFEKBmfS12gfBMkLkixsEpu-HiBXuVLl4o6dh7o9J6KxvF1YgtbLvx1tMshwyxI3kdKWVqJtRlAPI2RQQ1zZSQ0OkRO_sfh9ND-0KahUGUrc8SKkHy6bvZviAtBIAAp3KBChNnfpk6k-qdgGQcS5KjY8cSi9qqpS6rgSm5CXsi98NAeq9P2EFF6ftRt8_OoGJl2vp7J9IJAdppVZQj65-VnhrWlnslGa8ha',
      dataAlt: 'A close-up view of a modern code editor interface displaying neatly formatted lines of code. The background is a clean, light gray, with syntax highlighting in subtle shades of teal, indigo, and dark slate. The scene is bright and well-lit, conveying a sense of focused, intelligent minimalism typical of a professional developer environment.',
      tags: ['TypeScript', 'WebSockets', 'Monaco'],
      codeUrl: '#',
      demoUrl: '#',
      iconType: 'code',
    },
  ],
  codeSnippet: `const engineer = {
  name: 'Alex Morgan',
  role: 'Full-Stack Engineer',
  skills: ['React', 'Node.js', 'TypeScript', 'Go'],
  location: 'San Francisco, CA',
  passion: 'Building scalable systems',
  coffeeLevel: Infinity
};

function buildAwesomeThings() {
  while(engineer.coffeeLevel > 0) {
    engineer.writeCode();
    engineer.solveProblems();
  }
}`,
  codeLanguage: 'javascript',
};

export const devArchitectProfile: DeveloperProfile = {
  name: 'DEV',
  surname: 'ARCHITECT',
  role: 'Senior Software Engineer',
  subTitle: 'SENIOR SOFTWARE ENGINEER',
  bio: 'Specializing in scalable backend infrastructure, distributed systems, and elegant architectural patterns. Transforming complex business logic into resilient, highly available technical solutions.',
  location: 'Remote',
  passion: 'Sub-millisecond high-throughput engines',
  coffeeLevel: '100',
  experienceYears: 10,
  usersScaled: '5M+',
  techStack: [
    {
      title: 'Languages',
      iconType: 'code',
      skills: ['Go (Golang)', 'Rust', 'TypeScript', 'Python', 'SQL'],
    },
    {
      title: 'Cloud & Infra',
      iconType: 'cloud',
      skills: ['AWS / GCP', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD (Actions/GitLab)'],
    },
    {
      title: 'Data',
      iconType: 'database',
      skills: ['PostgreSQL', 'Redis', 'Elasticsearch', 'Kafka', 'MongoDB'],
    },
    {
      title: 'Frameworks',
      iconType: 'layout',
      skills: ['React / Next.js', 'gRPC / Protobuf', 'GraphQL', 'Gin / Echo', 'Tailwind CSS'],
    },
  ],
  experience: [
    {
      id: 'arch-job1',
      title: 'Staff Software Engineer',
      company: 'TechCorp Global',
      period: '2021 - Present',
      tasks: [
        'Architected a distributed event-driven platform handling 10k+ TPS using Go and Kafka.',
        'Reduced infrastructure costs by 35% through Kubernetes resource optimization and scaling policies.',
        'Mentored a team of 8 mid-level engineers, establishing firm-wide code review standards.',
      ],
      iconType: 'terminal',
    },
    {
      id: 'arch-job2',
      title: 'Senior Backend Engineer',
      company: 'DataFlow Systems',
      period: '2018 - 2021',
      tasks: [
        'Migrated legacy monolith to a microservices architecture, improving deployment frequency by 4x.',
        'Designed and implemented a real-time analytics dashboard backend using Rust and WebSockets.',
        'Optimized PostgreSQL queries, reducing p99 latency by 60% on critical API routes.',
      ],
      iconType: 'code',
    },
  ],
  projects: [
    {
      id: 'arch-proj1',
      title: 'Distributed KV Store',
      description: 'A highly available, distributed key-value store built from scratch implementing the Raft consensus algorithm. Designed for partition tolerance and high read throughput.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzb7WVoyoE0oQz89mZASBD4FJHRMmTqiC98bpNguwl-qSutI5PTVEvuEwAaDeuq4WhgE3K2Jf7eSkgbGmRt-o5EfVrMnz6oZ1Sba-iBuy7ERGT5RabHvsfOdUfh755aGuOOEldoGGFTPHgsZCHq02Dm5R6whmVhGsMDs3Ei9h7wXVGgnaOZGCzQZSgF38bf-TLCHfWIJVjTWJMIV4QEsVk391uNasF-sekSBnzB7qyCUMPf8GKpVW_ouEQufeeKVf43gHpRoRi4xVS',
      tags: ['Go', 'gRPC', 'Raft'],
      codeUrl: '#',
      demoUrl: '#',
      iconType: 'hub',
    },
    {
      id: 'arch-proj2',
      title: 'Telemetry Pipeline',
      description: 'High-throughput data ingestion pipeline processing billions of events daily. Includes custom real-time aggregation engine and long-term cold storage management.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMfXOntXeBESKFgb8nE8CnzMacZ84WQ-56vzxEbbdmlwFEKBmfS12gfBMkLkixsEpu-HiBXuVLl4o6dh7o9J6KxvF1YgtbLvx1tMshwyxI3kdKWVqJtRlAPI2RQQ1zZSQ0OkRO_sfh9ND-0KahUGUrc8SKkHy6bvZviAtBIAAp3KBChNnfpk6k-qdgGQcS5KjY8cSi9qqpS6rgSm5CXsi98NAeq9P2EFF6ftRt8_OoGJl2vp7J9IJAdppVZQj65-VnhrWlnslGa8ha',
      tags: ['Rust', 'Kafka', 'ClickHouse'],
      codeUrl: '#',
      demoUrl: '#',
      iconType: 'analytics',
    },
  ],
  codeSnippet: `func (s *Server) Handle(
    ctx context.Context, 
    req Request
) (Response, error) {
    span := trace.StartSpan(ctx)
    defer span.End()

    res, err := s.router.Route(req)
    if err != nil {
        return nil, s.errHandler(err)
    }
    return res, nil
}`,
  codeLanguage: 'go',
};
