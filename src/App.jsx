import React from 'react';
import { useTheme } from './hooks/useTheme';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { Analytics } from './components/Analytics';

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-on-surface font-sans transition-colors duration-300 relative selection:bg-primary/30">
      <Analytics />
      
      {/* Background Grid */}
      <div className="bg-grid absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Certifications />
          <Projects />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
