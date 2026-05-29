import { useState, useEffect } from 'react';
import {
  alexMorganProfile,
  devArchitectProfile
} from './data';
import {
  ChevronRight,
  Menu,
  Briefcase,
  Code as CodeIcon,
  ExternalLink,
  ArrowRight,
  Terminal,
  TrendingUp,
  Server,
  Cloud,
  Database,
  Grid,
  GitBranch,
  BarChart3,
  X,
  FileText,
  MousePointer,
  Sparkles,
  Award,
  Lock,
  MessageSquare
} from 'lucide-react';
import ProjectVisualization from './components/ProjectVisualization';
import ResumeModal from './components/ResumeModal';
import CodePlayground from './components/CodePlayground';
import ContactForm from './components/ContactForm';
import { DeveloperProfile } from './types';

export default function App() {
  // Config state
  const [activeArchetype, setActiveArchetype] = useState<'alex' | 'architect'>('alex');
  const [selectedProject, setSelectedProject] = useState<{ id: string; title: string } | null>(null);
  const [showResume, setShowResume] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dynamic names customized inside standard session memory
  const [alexName, setAlexName] = useState({ name: 'Alex', surname: 'Morgan', role: 'Full-Stack Engineer & Systems Architect' });
  const [archName, setArchName] = useState({ name: 'DEV', surname: 'ARCHITECT', role: 'Senior Software Engineer' });

  // Select current data profile
  const profile: DeveloperProfile = activeArchetype === 'alex'
    ? {
        ...alexMorganProfile,
        name: alexName.name,
        surname: alexName.surname,
        role: alexName.role
      }
    : {
        ...devArchitectProfile,
        name: archName.name,
        surname: archName.surname,
        role: archName.role
      };

  const isDark = activeArchetype === 'architect';

  // Apply custom dark/light class selector to document element on choice
  useEffect(() => {
    const rootClass = document.documentElement.classList;
    if (isDark) {
      rootClass.add('dark');
      rootClass.remove('light');
    } else {
      rootClass.add('light');
      rootClass.remove('dark');
    }
  }, [isDark]);

  const handleUpdateProfileMeta = (customName: string, customSurname: string, customRole: string) => {
    if (activeArchetype === 'alex') {
      setAlexName({ name: customName, surname: customSurname, role: customRole });
    } else {
      setArchName({ name: customName, surname: customSurname, role: customRole });
    }
  };

  // Icon mapping resolver for tech blocks or timelines
  const renderTechIcon = (type: string) => {
    const iconSize = 'w-5 h-5';
    switch (type) {
      case 'code':
        return <CodeIcon className={iconSize} />;
      case 'cloud':
        return <Cloud className={iconSize} />;
      case 'database':
        return <Database className={iconSize} />;
      case 'layout':
        return <Grid className={iconSize} />;
      default:
        return <Terminal className={iconSize} />;
    }
  };

  const renderTimelineIcon = (type: string) => {
    const styleClass = isDark ? 'text-purple-400' : 'text-indigo-600';
    switch (type) {
      case 'work':
        return <Briefcase className={`w-5 h-5 ${styleClass}`} />;
      case 'code':
        return <CodeIcon className={`w-5 h-5 ${styleClass}`} />;
      default:
        return <Terminal className={`w-5 h-5 ${styleClass}`} />;
    }
  };

  const renderProjectIcon = (type: string) => {
    const styleClass = isDark ? 'text-purple-400' : 'text-indigo-600';
    switch (type) {
      case 'hub':
        return <GitBranch className={`w-5 h-5 ${styleClass}`} />;
      case 'analytics':
        return <BarChart3 className={`w-5 h-5 ${styleClass}`} />;
      default:
        return <CodeIcon className={`w-5 h-5 ${styleClass}`} />;
    }
  };

  return (
    <div
      className={`min-h-screen font-sans transition-all duration-300 antialiased relative overflow-x-hidden flex flex-col ${
        isDark ? 'bg-[#06060e] text-slate-100' : 'bg-[#f8f9ff] text-slate-800'
      }`}
    >
      {/* 1) Dynamic Grid Background for both modes, with themed colors */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: isDark
            ? `
              linear-gradient(to right, rgba(168, 85, 247, 0.25) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(168, 85, 247, 0.25) 1px, transparent 1px)
            `
            : `
              linear-gradient(to right, rgba(79, 70, 229, 0.25) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(79, 70, 229, 0.25) 1px, transparent 1px)
            `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* 2) Floating Global Multi-Mode Switcher */}
      <div className="sticky top-0 z-[60] w-full bg-slate-900/90 text-white shadow-xl backdrop-blur-md px-4 py-2 flex flex-col md:flex-row justify-between items-center border-b border-white/5 gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          </span>
          <span className="text-xs font-mono font-bold tracking-tight uppercase flex items-center gap-1.5 text-slate-300">
            Interactive Schema Lab <span className="opacity-40">|</span> 
            <span className={isDark ? 'text-purple-400 font-black' : 'text-indigo-400 font-black'}>
              {isDark ? 'Obsidian Synth' : 'Fresh Tech'} Active
            </span>
          </span>
        </div>

        {/* Dynamic segmented control triggers */}
        <div className="flex items-center gap-3">
          <div className="bg-slate-950 p-1 rounded-full flex border border-white/5">
            <button
              onClick={() => setActiveArchetype('alex')}
              className={`px-4 py-1 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 ${
                activeArchetype === 'alex'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20 font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ☀️ Fresh Tech Style
            </button>
            <button
              onClick={() => setActiveArchetype('architect')}
              className={`px-4 py-1 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 ${
                activeArchetype === 'architect'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20 font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              🌙 Obsidian Synth Style
            </button>
          </div>

          <span className="text-slate-700 select-none">|</span>

          {/* Core Applet controls */}
          <button
            onClick={() => setShowResume(true)}
            className="bg-slate-800 hover:bg-slate-700 border border-white/10 px-3 py-1 rounded-md text-xs font-mono font-semibold text-slate-300 transition-colors flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            Customize Resume
          </button>
        </div>
      </div>

      {/* 3) Local Navigation header inside selected model style */}
      <nav
        className={`sticky top-[49px] md:top-[45px] w-full border-b backdrop-blur-md z-40 transition-colors duration-300 ${
          isDark
            ? 'bg-[#06060e]/80 border-purple-500/10'
            : 'bg-[#f8f9ff]/85 border-slate-200 shadow-sm'
        }`}
      >
        <div className="flex justify-between items-center h-16 px-6 max-w-7xl mx-auto">
          <div className="font-mono text-lg font-bold">
            <a
              href="#"
              className={isDark ? 'text-purple-400 font-extrabold font-mono tracking-wider' : 'text-indigo-600 font-extrabold font-mono tracking-wider'}
            >
              {isDark ? 'DEV_ARCHITECT' : 'DEV_ALEX'}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 font-mono text-xs font-bold text-slate-500 dark:text-slate-400">
            <a href="#about" className={`hover:underline transition-colors ${isDark ? 'hover:text-purple-400' : 'hover:text-indigo-600'}`}>About_Me</a>
            <a href="#skills" className={`hover:underline transition-colors ${isDark ? 'hover:text-purple-400' : 'hover:text-indigo-600'}`}>Skills_Matrix</a>
            <a href="#experience" className={`hover:underline transition-colors ${isDark ? 'hover:text-purple-400' : 'hover:text-indigo-600'}`}>Experience</a>
            <a href="#projects" className={`hover:underline transition-colors ${isDark ? 'hover:text-purple-400' : 'hover:text-indigo-600'}`}>Selected_Projects</a>
            <a href="#contact" className={`hover:underline transition-colors ${isDark ? 'hover:text-purple-400' : 'hover:text-indigo-600'}`}>Contact_Me</a>
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => setShowResume(true)}
              className={`font-mono text-xs font-bold px-4 py-2.5 rounded-lg border transition-all ${
                isDark
                  ? 'bg-transparent border-purple-600/40 text-purple-400 hover:bg-purple-900/10'
                  : 'bg-transparent border-indigo-600/40 text-indigo-600 hover:bg-indigo-550/10'
              }`}
            >
              Get Custom Resume
            </button>
          </div>

          {/* Mobile triggers */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-500 outline-none"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay Menu */}
      {isMobileMenuOpen && (
        <div
          className={`fixed inset-x-0 top-[110px] z-[55] p-6 flex flex-col space-y-4 border-b ${
            isDark ? 'bg-slate-950 text-slate-100 border-purple-500/10' : 'bg-slate-50 text-slate-800 border-slate-200 shadow-md'
          }`}
        >
          <a
            onClick={() => setIsMobileMenuOpen(false)}
            href="#about"
            className={`font-mono text-sm border-b pb-2 ${isDark ? 'border-purple-500/10 hover:text-purple-400' : 'border-slate-200 hover:text-indigo-600'}`}
          >
            About_Me
          </a>
          <a
            onClick={() => setIsMobileMenuOpen(false)}
            href="#skills"
            className={`font-mono text-sm border-b pb-2 ${isDark ? 'border-purple-500/10 hover:text-purple-400' : 'border-slate-200 hover:text-indigo-600'}`}
          >
            Skills_Matrix
          </a>
          <a
            onClick={() => setIsMobileMenuOpen(false)}
            href="#experience"
            className={`font-mono text-sm border-b pb-2 ${isDark ? 'border-purple-500/10 hover:text-purple-400' : 'border-slate-200 hover:text-indigo-600'}`}
          >
            Experience
          </a>
          <a
            onClick={() => setIsMobileMenuOpen(false)}
            href="#projects"
            className={`font-mono text-sm border-b pb-2 ${isDark ? 'border-purple-500/10 hover:text-purple-400' : 'border-slate-200 hover:text-indigo-600'}`}
          >
            Selected_Projects
          </a>
          <a
            onClick={() => setIsMobileMenuOpen(false)}
            href="#contact"
            className={`font-mono text-sm border-b pb-2 ${isDark ? 'border-purple-500/10 hover:text-purple-400' : 'border-slate-200 hover:text-indigo-600'}`}
          >
            Contact_Me
          </a>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              setShowResume(true);
            }}
            className={`w-full text-center font-mono py-2 rounded-lg text-sm font-semibold transition-colors ${
              isDark ? 'bg-purple-600 hover:bg-purple-500 text-white' : 'bg-indigo-650 hover:bg-indigo-600 text-white'
            }`}
          >
            Generate Custom Resume
          </button>
        </div>
      )}

      {/* MAIN VIEW CONTENT CONTAINER */}
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-24 md:space-y-36">
        
        {/* 4) CORE HERO SECTION */}
        <section
          id="hero"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center min-h-[500px]"
        >
          <div className="space-y-6">
            <p className={`font-mono text-xs font-bold uppercase tracking-wider ${isDark ? 'text-pink-500' : 'text-[#006a61]'}`}>
              {profile.subTitle}
            </p>
            <h1 className="font-mono text-4xl md:text-5xl font-black leading-tight">
              {profile.name} <br />
              <span className={isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 animate-pulse' : 'text-[#3525cd]'}>
                {profile.surname}
              </span>
            </h1>
            <h2 className={`font-mono text-xl md:text-2xl font-bold leading-snug opacity-90 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              {profile.role}
            </h2>
            <p className="font-sans text-sm md:text-base leading-relaxed opacity-80 max-w-xl">
              {profile.bio}
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="#projects"
                className={`flex items-center gap-1.5 px-6 py-3 font-mono text-xs font-bold rounded-lg transition-all ${
                  isDark
                    ? 'bg-purple-600 text-white hover:bg-purple-500 shadow-md shadow-purple-500/10'
                    : 'bg-[#3525cd] text-white hover:bg-[#3525cd]/95 shadow-md shadow-indigo-500/10'
                }`}
              >
                View Projects
                {isDark ? <ArrowRight className="w-4 h-4" /> : null}
              </a>
              <a
                href="#contact"
                className={`px-6 py-3 font-mono text-xs font-bold rounded-lg transition-all border ${
                  isDark
                    ? 'border-purple-600/40 text-purple-400 hover:bg-purple-900/10'
                    : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                }`}
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Simulated IDE Compiler Mockup widget */}
          <div className="w-full">
            <CodePlayground
              code={profile.codeSnippet}
              language={profile.codeLanguage}
              theme={activeArchetype}
            />
          </div>
        </section>

        {/* 5) GENERAL ABOUT ME SECTION */}
        <section id="about" className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="font-mono text-xl md:text-2xl font-black uppercase text-primary">
              About_Me
            </h2>
            <div className={`h-[1px] flex-grow ${isDark ? 'bg-purple-500/20' : 'bg-slate-200'}`}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`p-8 rounded-xl border transition-all flex flex-col justify-center col-span-1 md:col-span-2 space-y-4 ${
              isDark
                ? 'bg-slate-900/40 border-purple-500/10 hover:border-purple-500/30'
                : 'bg-white/80 border-slate-200 hover:border-indigo-600/30 hover:bg-white shadow-md shadow-indigo-500/5'
            }`}>
              <Terminal className={`w-8 h-8 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`} />
              <h3 className="font-mono text-lg font-bold">
                {activeArchetype === 'alex' ? 'Engineering Craft & Vision' : 'Technical Leadership Focus'}
              </h3>
              <p className={`font-sans text-xs md:text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {activeArchetype === 'alex' ? (
                  "I focus on building beautiful, highly performant interfaces paired with robust full-stack design patterns. Specializing in React, Next.js, and TypeScript, I create clean architectures that bridge intuitive user experiences with solid backend system structures. I believe in elegant, accessible code that solves real business requirements natively."
                ) : (
                  "With over a decade of engineering experience, I bridge the gap between product vision and technical execution. I specialize in designing robust microservices, optimizing database performance, and establishing CI/CD pipelines that empower teams to ship faster with confidence. My approach is rooted in pragmatism: choosing the right tool for the job."
                )}
              </p>
            </div>

            <div className={`p-8 rounded-xl border flex flex-col justify-between h-full space-y-8 ${
              isDark
                ? 'bg-gradient-to-b from-slate-900/50 to-purple-950/20 border-purple-500/10 hover:border-purple-500/30'
                : 'bg-gradient-to-b from-white/95 to-indigo-50/20 border-slate-200 hover:border-indigo-600/30 shadow-md shadow-indigo-500/5'
            }`}>
              <div>
                <TrendingUp className={`w-8 h-8 ${isDark ? 'text-pink-500' : 'text-indigo-600'}`} />
                <h3 className="font-mono text-lg font-bold mt-2">Metrics</h3>
              </div>

              <div className="space-y-4 font-mono">
                <div>
                  <div className={`text-3xl font-black ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>
                    {profile.experienceYears}+
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 tracking-wider font-semibold">
                    {activeArchetype === 'alex' ? 'YEARS OF TECH ENG.' : 'YEARS OF DISTRIBUTED LOGIC ENG.'}
                  </div>
                </div>
                <div>
                  <div className={`text-3xl font-black ${isDark ? 'text-pink-500' : 'text-emerald-500'}`}>
                    {profile.usersScaled}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 tracking-wider font-semibold">
                    {activeArchetype === 'alex' ? 'ACTIVE CLIENT RUNTIMES SCALED' : 'CONCURRENT SESSIONS SCALED'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6) CORE TECH STACK LISTING */}
        <section id="skills" className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="font-mono text-xl md:text-2xl font-black uppercase text-primary">
              Skills_Matrix
            </h2>
            <div className={`h-[1px] flex-grow ${isDark ? 'bg-purple-500/20' : 'bg-slate-200'}`}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {profile.techStack.map((category, idx) => {
              const cardBg = isDark
                ? 'bg-slate-900/40 border-purple-500/10 hover:border-purple-500/30'
                : 'bg-white border-slate-200 hover:shadow-lg shadow-indigo-500/5';

              return (
                <div
                  key={idx}
                  className={`p-6 rounded-xl border transition-all ${cardBg}`}
                >
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider mb-6 pb-2 border-b flex items-center gap-2 border-slate-800/10 dark:border-white/5 text-slate-400">
                    {renderTechIcon(category.iconType)}
                    {category.title}
                  </h3>
                  <ul className="space-y-3 font-mono text-[11px] select-all">
                    {category.skills.map((skill, sidx) => (
                      <li key={sidx} className="flex items-center gap-2 text-slate-300 dark:text-slate-400">
                        <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`} />
                        <span className="opacity-95 text-slate-600 dark:text-slate-300">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* 7) EXPERIENCE TIMELINE */}
        <section id="experience" className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="font-mono text-xl md:text-2xl font-black uppercase text-primary">
              Experience
            </h2>
            <div className={`h-[1px] flex-grow ${isDark ? 'bg-purple-500/20' : 'bg-slate-200'}`}></div>
          </div>

          {/* Timeline Wrapper layout */}
          <div className="relative border-l-2 ml-4 md:ml-6 pl-8 md:pl-12 space-y-12 pb-4 border-slate-200 dark:border-purple-500/15">
            {profile.experience.map((job) => {
              const cardBg = isDark
                ? 'bg-slate-900/40 border-purple-500/10 hover:border-purple-500/20'
                : 'bg-white border-slate-200 hover:border-indigo-600/30 shadow-sm';

              return (
                <div key={job.id} className="relative group/timeline">
                  {/* Glowing connected node point */}
                  <span className={`absolute -left-[41px] md:-left-[57px] top-6 w-5 h-5 rounded-full border-4 flex items-center justify-center transition-transform group-hover/timeline:scale-110 ${
                    isDark
                      ? 'bg-slate-950 border-[#06060e] ring-2 ring-purple-500/40 text-purple-400'
                      : 'bg-white border-white shadow-md text-indigo-600'
                  }`}>
                    {renderTimelineIcon(job.iconType)}
                  </span>

                  {/* Main experience details card block */}
                  <div className={`p-6 md:p-8 rounded-xl border transition-all ${cardBg}`}>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
                      <div>
                        <h3 className="font-mono text-base font-bold text-slate-800 dark:text-slate-100">
                          {job.title}
                        </h3>
                        <p className={`font-mono text-xs font-bold leading-none mt-1 ${isDark ? 'text-pink-500' : 'text-[#006a61]'}`}>
                          {job.company}
                        </p>
                      </div>

                      <span className={`font-mono text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap self-start ${
                        isDark ? 'bg-purple-950/40 text-purple-300' : 'bg-indigo-50 text-indigo-700'
                      }`}>
                        {job.period}
                      </span>
                    </div>

                    <ul className="mt-4 space-y-2 text-xs md:text-sm leading-relaxed text-slate-600 dark:text-slate-400 list-disc pl-4">
                      {job.tasks.map((task, tidx) => (
                        <li key={tidx}>{task}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 8) SELECTED PROJECTS GRID & VISUALIZATION DRAWER */}
        <section id="projects" className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="font-mono text-xl md:text-2xl font-black uppercase text-primary">
              Selected_Projects
            </h2>
            <div className={`h-[1px] flex-grow ${isDark ? 'bg-purple-500/20' : 'bg-slate-200'}`}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {profile.projects.map((project) => {
              const cardBg = isDark
                ? 'bg-slate-900/40 border-purple-500/10 hover:border-purple-500/30'
                : 'bg-white border-slate-200 hover:shadow-lg shadow-indigo-500/5';

              return (
                <div
                  key={project.id}
                  className={`rounded-xl overflow-hidden border group transition-all flex flex-col h-full ${cardBg}`}
                >
                  {/* Unified Blueprint Sandbox header click triggers live viz */}
                  <div
                    onClick={() => setSelectedProject({ id: project.id, title: project.title })}
                    className={`h-48 relative border-b overflow-hidden cursor-pointer ${
                      isDark ? 'border-purple-500/10' : 'border-slate-200'
                    }`}
                  >
                    <div className={`absolute inset-0 flex flex-col items-center justify-center space-y-3 p-4 ${
                      isDark ? 'bg-slate-950/90' : 'bg-slate-50/90'
                    }`}>
                      <div
                        className="absolute inset-0 opacity-80 group-hover:scale-105 transition-transform duration-500"
                        style={{
                          backgroundImage: isDark
                            ? 'linear-gradient(to top right, rgba(168, 85, 247, 0.08), transparent)'
                            : 'linear-gradient(to top right, rgba(79, 70, 229, 0.08), transparent)',
                        }}
                      />
                      {/* Blueprint Grid pattern in the banner itself */}
                      <div
                        className="absolute inset-0 pointer-events-none opacity-5"
                        style={{
                          backgroundImage: isDark
                            ? 'linear-gradient(to right, rgba(168, 85, 247, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(168, 85, 247, 0.3) 1px, transparent 1px)'
                            : 'linear-gradient(to right, rgba(79, 70, 229, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(79, 70, 229, 0.3) 1px, transparent 1px)',
                          backgroundSize: '20px 20px',
                        }}
                      />
                      
                      <span className={`w-12 h-12 rounded-full flex items-center justify-center animate-pulse border transition-colors ${
                        isDark 
                          ? 'bg-purple-900/20 text-purple-400 border-purple-500/20' 
                          : 'bg-indigo-50 text-indigo-600 border-indigo-100'
                      }`}>
                        {renderProjectIcon(project.iconType)}
                      </span>
                      
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-widest group-hover:underline flex items-center gap-1 ${
                        isDark ? 'text-purple-400' : 'text-indigo-600'
                      }`}>
                        <MousePointer className="w-3 h-3 animate-ping" />
                        Launch Terminal Sandbox
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-3">
                      <h4
                        onClick={() => setSelectedProject({ id: project.id, title: project.title })}
                        className="font-mono text-base font-bold text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h4>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setSelectedProject({ id: project.id, title: project.title })}
                          title="Interactive dashboard"
                          className="text-slate-400 hover:text-indigo-500 dark:hover:text-purple-400 transition-colors cursor-pointer"
                        >
                          <Terminal className="w-4 h-4" />
                        </button>
                        <a
                          href="#"
                          className="text-slate-400 hover:text-[#3525cd] dark:hover:text-[#a855f7] transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    <p className="text-xs md:text-sm leading-relaxed text-slate-600 dark:text-slate-400 mb-6 flex-grow font-sans">
                      {project.description}
                    </p>

                    {/* Meta tags skills summary */}
                    <div className="flex flex-wrap gap-2 mt-auto font-mono text-[10px]">
                      {project.tags.map((tag, sidx) => (
                        <span
                          key={sidx}
                          className={`px-2.5 py-1 rounded-full border font-bold ${
                            isDark
                              ? 'bg-purple-950/20 border-purple-500/20 text-purple-400'
                              : 'bg-indigo-50/50 border-slate-200 text-indigo-700'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 9) INTERACTIVE CONTACT PROPOSALS FORM */}
        <section id="contact" className="space-y-8 max-w-3xl mx-auto">
          <div className="text-center space-y-3">
            <span className={`font-mono text-xs font-bold uppercase tracking-wider ${isDark ? 'text-pink-500' : 'text-[#006a61]'}`}>
              Secure Gateway Connect
            </span>
            <h2 className="font-mono text-2xl md:text-3xl font-black uppercase text-primary">
              Initiate Scoping Discussion
            </h2>
            <p className="text-xs md:text-sm opacity-75 max-w-lg mx-auto">
              Draft your technical criteria specifications below. A localized schema generator computes estimates and prepares pipeline metrics dynamically.
            </p>
          </div>

          <div
            className={`p-6 md:p-8 rounded-xl border ${
              isDark
                ? 'bg-slate-900/20 border-purple-500/10'
                : 'bg-white border-slate-200 shadow-md shadow-indigo-500/5'
            }`}
          >
            <ContactForm theme={activeArchetype} />
          </div>
        </section>

      </main>

      {/* 10) FOOTER CORE COMPONENT */}
      <footer
        className={`w-full py-12 md:py-16 border-t mt-24 md:mt-36 transition-colors duration-300 ${
          isDark
            ? 'bg-[#0c0c16] border-purple-500/10'
            : 'bg-[#eff4ff] border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="font-mono">
            <h4 className={`text-base font-black ${isDark ? 'text-purple-400' : 'text-[#3525cd]'}`}>
              {isDark ? 'DEV_ARCHITECT' : 'DevPortfolio'}
            </h4>
            <p className="text-[10px] text-slate-500 font-bold mt-1 tracking-wider uppercase">
              © 2026 {activeArchetype === 'alex' ? 'Alex Morgan' : 'DEV_ARCHITECT'}. Built with Precision & Craft.
            </p>
          </div>

          <div className="flex gap-6 font-mono text-xs font-bold text-slate-500">
            <a href="#" className="hover:text-primary transition-colors">GitHub</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-primary transition-colors">Email</a>
          </div>
        </div>
      </footer>

      {/* 11) MODAL CONDITIONAL DETAILED RENDERS */}
      {selectedProject && (
        <ProjectVisualization
          projectId={selectedProject.id}
          projectTitle={selectedProject.title}
          theme={activeArchetype}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {showResume && (
        <ResumeModal
          profile={profile}
          theme={activeArchetype}
          onClose={() => setShowResume(false)}
          onUpdateName={handleUpdateProfileMeta}
        />
      )}
    </div>
  );
}
