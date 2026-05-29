import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, RefreshCw, Calendar, Sparkles } from 'lucide-react';

interface ContactFormProps {
  theme: 'light' | 'dark';
}

export default function ContactForm({ theme }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    projectType: 'fullstack',
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    id: string;
    estimation: string;
    recipientName: string;
  } | null>(null);

  const isDark = theme === 'dark';

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = 'Please state your name.';
    if (!formData.email.trim()) {
      errors.email = 'An email coordinates link is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Coordinates link appears syntactically invalid.';
    }
    if (!formData.message.trim()) {
      errors.message = 'Please provide brief project description context.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate an API call latency of 1500ms
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `PROPOSAL-${Math.floor(1000 + Math.random() * 9000)}-${formData.projectType.toUpperCase()}`;
      setSubmitResult({
        id: generatedId,
        estimation: formData.projectType === 'fullstack' ? '2-3 Weeks' : formData.projectType === 'backend' ? '1-2 Weeks' : '4-6 Days',
        recipientName: formData.name,
      });
      // Clear inputs
      setFormData({ name: '', email: '', message: '', projectType: 'fullstack' });
    }, 1500);
  };

  return (
    <div id="contact-form-wrapper" className="w-full">
      {submitResult ? (
        // Submission confirmation receipt
        <div
          className={`p-8 rounded-xl border text-center space-y-4 transition-all duration-300 animate-fade-in ${
            isDark
              ? 'bg-slate-950/80 border-purple-500/20 text-slate-100'
              : 'bg-white border-slate-200 text-slate-800 shadow-md'
          }`}
        >
          <div className="flex justify-center">
            <CheckCircle2 className={`w-12 h-12 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`} />
          </div>
          <h3 className="text-lg font-mono font-bold text-primary">Proposal Ingested Successfully!</h3>
          <p className="text-xs leading-relaxed max-w-md mx-auto opacity-75">
            Thank you, <span className="font-bold text-primary">{submitResult.recipientName}</span>. Your technical proposal metrics have been logged securely. Let's build something phenomenal.
          </p>

          <div
            className={`max-w-sm mx-auto p-4 rounded-lg font-mono text-left text-xs space-y-2 border ${
              isDark ? 'bg-slate-900/60 border-slate-800 text-teal-400' : 'bg-slate-50 border-slate-100 text-slate-700'
            }`}
          >
            <div className="flex justify-between border-b border-slate-800/10 dark:border-white/5 pb-1 select-all">
              <span>Proposal Ingest Hash:</span>
              <span className="font-bold">{submitResult.id}</span>
            </div>
            <div className="flex justify-between border-b border-slate-800/10 dark:border-white/5 pb-1">
              <span>Status Ledger:</span>
              <span className="text-emerald-500 font-bold">● Active Queue</span>
            </div>
            <div className="flex justify-between items-center bg-indigo-50/50 dark:bg-indigo-950/20 p-2 rounded mt-2">
              <span className="flex items-center gap-1.5 font-bold"><Calendar className="w-3.5 h-3.5" /> Est. Scoping:</span>
              <span className="font-bold text-primary">{submitResult.estimation}</span>
            </div>
          </div>

          <button
            onClick={() => setSubmitResult(null)}
            className={`font-mono text-[11px] font-bold py-2 px-6 rounded-lg transition-colors inline-flex items-center gap-1.5 ${
              isDark ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-slate-800 hover:bg-slate-700 text-white'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Send Another Proposal
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Input */}
            <div className="space-y-1">
              <label className="block text-xs font-mono font-bold uppercase text-slate-400">Your Identity</label>
              <input
                type="text"
                placeholder="Name / Organization"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full text-xs p-3 rounded-lg outline-none border transition-all ${
                  formErrors.name ? 'border-red-500' : 'border-slate-200 focus:border-indigo-500 hover:border-slate-300'
                } ${isDark ? 'bg-slate-900 border-slate-800 focus:border-purple-500 hover:border-slate-700 text-white' : 'bg-white'}`}
              />
              {formErrors.name && (
                <p className="text-[10px] font-mono text-red-500 mt-1">{formErrors.name}</p>
              )}
            </div>

            {/* Email Coordinates Input */}
            <div className="space-y-1">
              <label className="block text-xs font-mono font-bold uppercase text-slate-400">Email Coordinates</label>
              <input
                type="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full text-xs p-3 rounded-lg outline-none border transition-all ${
                  formErrors.email ? 'border-red-500' : 'border-slate-200 focus:border-indigo-500 hover:border-slate-300'
                } ${isDark ? 'bg-slate-900 border-slate-800 focus:border-purple-500 hover:border-slate-700 text-white' : 'bg-white'}`}
              />
              {formErrors.email && (
                <p className="text-[10px] font-mono text-red-500 mt-1">{formErrors.email}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Project Classification select */}
            <div className="space-y-1">
              <label className="block text-xs font-mono font-bold uppercase text-slate-400">Scope Type</label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className={`w-full text-xs p-3 rounded-lg outline-none border transition-all border-slate-200 focus:border-indigo-500 ${
                  isDark ? 'bg-slate-900 border-slate-800 focus:border-purple-500 text-white' : 'bg-white'
                }`}
              >
                <option value="fullstack">Full-Stack Solution Architecture</option>
                <option value="backend">Distributed Event-Engine/DB Scalability</option>
                <option value="frontend">Responsive Web/Mobile Visual Core</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-mono font-bold uppercase text-slate-400">Connection Mode</label>
              <div className={`p-3 rounded-lg border text-xs font-mono flex items-center justify-between ${
                isDark ? 'bg-slate-950/40 border-slate-800 text-purple-400' : 'bg-slate-50 border-slate-100 text-slate-600'
              }`}>
                <span className="flex items-center gap-1.5 text-xs"><Mail className="w-3.5 h-3.5" /> tmscarrico@gmail.com</span>
                <span className="text-[9px] uppercase font-black tracking-wider text-emerald-500">Secure TLS</span>
              </div>
            </div>
          </div>

          {/* Description Textarea */}
          <div className="space-y-1">
            <label className="block text-xs font-mono font-bold uppercase text-slate-400">Proposal Context & Goals</label>
            <textarea
              placeholder="Outline your project scope, timeline expectations, or microservices details..."
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`w-full text-xs p-3 rounded-lg outline-none border transition-all ${
                formErrors.message ? 'border-red-500' : 'border-slate-200 focus:border-indigo-500 hover:border-slate-300'
              } ${isDark ? 'bg-slate-900 border-slate-800 focus:border-purple-500 hover:border-slate-700 text-white' : 'bg-white'}`}
            />
            {formErrors.message && (
              <p className="text-[10px] font-mono text-red-500 mt-1">{formErrors.message}</p>
            )}
          </div>

          {/* Submit Action */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center gap-2 font-mono text-xs font-bold py-3.5 rounded-lg text-white transition-all transform active:scale-[0.98] ${
              isSubmitting
                ? 'bg-slate-700 cursor-not-allowed opacity-50'
                : isDark
                ? 'bg-purple-600 hover:bg-purple-500 cursor-pointer hover:shadow-lg hover:shadow-purple-500/20'
                : 'bg-indigo-600 hover:bg-indigo-500 cursor-pointer hover:shadow-lg hover:shadow-indigo-500/20'
            }`}
          >
            {isSubmitting ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-teal-400" />
                Processing proposal vectors...
              </>
            ) : (
              <>
                <Send className="w-3.5 h-3.5 fill-current" />
                Dispatch Secure Proposal
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
