import { ScrollReveal } from './ScrollReveal';
import { useLanguage } from '../hooks/useLanguage';
import { Terminal, LineChart } from 'lucide-react';

export function About() {
  const { content, lang } = useLanguage();
  const { bio, metrics } = content.personal;

  return (
    <section id="about" className="py-20 space-y-12">
      <ScrollReveal>
        <div className="flex items-center gap-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-on-surface tracking-tight">
            {lang === 'en' ? 'About_Me' : 'Sobre_Mim'}
          </h2>
          <div className="h-px bg-outline-variant/50 flex-grow"></div>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Bio Card */}
        <ScrollReveal delay={0.1} className="md:col-span-2">
          <div className="glass-panel p-8 md:p-10 rounded-2xl h-full flex flex-col justify-center">
            <Terminal className="text-primary mb-6" size={32} />
            <h3 className="font-display text-2xl font-bold text-on-surface mb-4">
              {lang === 'en' ? 'Technical Leadership' : 'Liderança Técnica'}
            </h3>
            <p className="font-body text-on-surface-variant leading-relaxed text-lg">
              {bio}
            </p>
          </div>
        </ScrollReveal>

        {/* Metrics Bento Card */}
        <ScrollReveal delay={0.2} className="h-full">
          <div className="glass-panel p-8 md:p-10 rounded-2xl h-full flex flex-col justify-between bg-gradient-to-b from-transparent to-primary/5">
            <div>
              <LineChart className="text-secondary mb-6" size={32} />
              <h3 className="font-display text-xl font-bold text-on-surface mb-8">
                {lang === 'en' ? 'Metrics' : 'Métricas'}
              </h3>
            </div>
            
            <div className="space-y-8">
              {metrics && metrics.map((m, idx) => (
                <div key={idx}>
                  <div className="font-display text-4xl font-bold text-primary mb-2">
                    {m.value}
                  </div>
                  <div className="font-display text-xs text-on-surface-variant uppercase tracking-wider font-semibold">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
