import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import personalData from '../data/personal.json';
import { ScrollReveal } from './ScrollReveal';

export function Hero() {
  const { name, title, bio, heroSnippets } = personalData;
  const [snippetIndex, setSnippetIndex] = useState(0);

  const firstName = name.split(' ')[0];
  const lastName = name.split(' ').slice(1).join(' ');

  // Rotate snippets every 5 seconds
  useEffect(() => {
    if (!heroSnippets || heroSnippets.length <= 1) return;
    const interval = setInterval(() => {
      setSnippetIndex((prev) => (prev + 1) % heroSnippets.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSnippets]);

  const activeSnippet = heroSnippets ? heroSnippets[snippetIndex] : null;

  return (
    <section id="hero" className="flex flex-col lg:flex-row items-center gap-12 min-h-[calc(100vh-80px)] pt-10 pb-20">
      
      {/* Left Text Content */}
      <div className="flex-1 space-y-8 z-10 w-full">
        <ScrollReveal>
          <div className="inline-block px-4 py-1.5 glass-panel text-secondary font-display text-sm rounded-md mb-2 tracking-wide font-medium">
            {title}
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-on-surface leading-tight tracking-tight">
            {firstName} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {lastName}.
            </span>
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            {bio}
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#projects"
              className="px-8 py-4 bg-primary text-surface font-display text-sm font-medium rounded-lg hover:opacity-90 hover:shadow-lg hover:-translate-y-1 hover:shadow-primary/20 transition-all flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 border border-outline-variant text-primary font-display text-sm font-medium rounded-lg hover:bg-surface-dim hover:-translate-y-1 transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none"
            >
              Contact Me
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Right Graphic Content */}
      <div className="flex-1 w-full lg:flex justify-end relative h-[400px] md:h-[500px] items-center hidden">
        <ScrollReveal delay={0.4} className="w-full h-full relative">
          {/* Abstract glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl mix-blend-screen w-3/4 h-3/4 m-auto opacity-70"></div>
          
          {/* Glass Code Panel */}
          <div className="glass-panel w-full max-w-md ml-auto h-full max-h-[400px] rounded-2xl flex flex-col relative overflow-hidden group shadow-2xl">
            {/* Mac-style title bar */}
            <div className="bg-surface-dim/50 border-b border-outline-variant/30 p-4 flex gap-2 items-center">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span className="ml-auto font-display text-xs text-on-surface-variant/70 uppercase">
                {activeSnippet?.language || 'Code'}
              </span>
            </div>
            
            <div className="p-6 flex-grow font-display text-sm text-on-surface-variant/90 overflow-hidden relative">
              {activeSnippet ? (
                <pre className="h-full overflow-hidden transition-opacity duration-500">
                  <code dangerouslySetInnerHTML={{ __html: syntaxHighlight(activeSnippet.code) }} />
                </pre>
              ) : (
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-2 bg-outline-variant/20 rounded w-3/4"></div>
                    <div className="space-y-3">
                      <div className="h-2 bg-outline-variant/20 rounded"></div>
                      <div className="h-2 bg-outline-variant/20 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// Simple hacky syntax highlighter to make snippets look good
function syntaxHighlight(code) {
  return code
    .replace(/(const|let|var|function|return|if|else|func|import|export|from|type|interface|err|nil|span|ctx|req|res|defer)/g, '<span class="text-primary">$1</span>')
    .replace(/(true|false|null|undefined)/g, '<span class="text-secondary">$1</span>')
    .replace(/(["'`].*?["'`])/g, '<span class="text-green-500/80">$1</span>')
    .replace(/(\/\*.*?\*\/|\/\/.*)/g, '<span class="text-outline">$1</span>')
    .replace(/([0-9]+)/g, '<span class="text-secondary">$1</span>');
}
