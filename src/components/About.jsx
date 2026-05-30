import { ScrollReveal } from './ScrollReveal';
import { useLanguage } from '../hooks/useLanguage';
import { Terminal } from 'lucide-react';

export function About() {
  const { content, lang } = useLanguage();
  const { bio } = content.personal;

  return (
    <section id="about" className="py-20 space-y-12">
      <ScrollReveal>
        <div className="flex items-center gap-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-on-surface tracking-tight">
            {lang === 'en' ? 'About Me' : 'Sobre Mim'}
          </h2>
          <div className="h-px bg-outline-variant/50 flex-grow"></div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="glass-panel p-8 md:p-10 rounded-2xl flex flex-col justify-center">
          <Terminal className="text-primary mb-6" size={32} />
          <h3 className="font-display text-2xl font-bold text-on-surface mb-4">
            {lang === 'en' ? 'Technical Leadership' : 'Liderança Técnica'}
          </h3>
          <p className="font-body text-on-surface-variant leading-relaxed text-lg">
            {bio}
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
