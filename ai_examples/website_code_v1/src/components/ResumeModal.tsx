import { useState } from 'react';
import { X, Printer, Copy, Check, FileText, Settings, User, Mail, Briefcase, Award } from 'lucide-react';
import { DeveloperProfile } from '../types';

interface ResumeModalProps {
  profile: DeveloperProfile;
  theme: 'light' | 'dark';
  onClose: () => void;
  onUpdateName?: (name: string, surname: string, role: string) => void;
}

export default function ResumeModal({
  profile,
  theme,
  onClose,
  onUpdateName,
}: ResumeModalProps) {
  const [profileForm, setProfileForm] = useState({
    name: profile.name,
    surname: profile.surname,
    role: profile.role,
    email: 'tmscarrico@gmail.com',
    phone: '+1 (555) 019-2834',
    linkedin: 'linkedin.com/in/devprofile',
  });

  const [copiedMarkdown, setCopiedMarkdown] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState<number | null>(null);

  const isDark = theme === 'dark';

  const handleCopyMarkdown = () => {
    const md = `# ${profileForm.name} ${profileForm.surname}
**Role:** ${profileForm.role}
**Location:** ${profile.location}
**Email:** ${profileForm.email}

## Technical Stack
${profile.techStack.map((cat) => `- **${cat.title}**: ${cat.skills.join(', ')}`).join('\n')}

## Professional Experience
${profile.experience
  .map(
    (job) => `### ${job.title} at ${job.company} (${job.period})
${job.tasks.map((task) => `- ${task}`).join('\n')}`
  )
  .join('\n\n')}
`;
    navigator.clipboard.writeText(md);
    setCopiedMarkdown(true);
    setTimeout(() => setCopiedMarkdown(false), 2000);
  };

  const handleDownloadPDF = () => {
    setDownloadProgress(0);
    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev !== null && prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setDownloadProgress(null), 1500);
          return 100;
        }
        return (prev || 0) + 20;
      });
    }, 150);
  };

  const saveDetails = () => {
    if (onUpdateName) {
      onUpdateName(profileForm.name, profileForm.surname, profileForm.role);
    }
    setShowConfig(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
      <div
        id="resume-modal"
        className={`w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden rounded-xl border shadow-2xl transition-all duration-300 ${
          isDark
            ? 'bg-slate-900 border-purple-500/20 text-slate-100'
            : 'bg-white border-slate-200 text-slate-800'
        }`}
      >
        {/* Modal Header */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-b ${
            isDark ? 'border-purple-500/10 bg-slate-950/40' : 'border-slate-100 bg-slate-50'
          }`}
        >
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-500" />
            <h3 className="text-lg font-mono font-bold text-primary">Resume Processor</h3>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowConfig(!showConfig)}
              className={`p-2 rounded-full transition-colors flex items-center gap-1.5 text-xs font-mono font-semibold ${
                showConfig
                  ? 'bg-indigo-500 text-white'
                  : isDark
                  ? 'hover:bg-slate-800 text-slate-400'
                  : 'hover:bg-slate-100 text-slate-600'
              }`}
            >
              <Settings className="w-4 h-4" />
              Customize Content
            </button>
            <button
              onClick={onClose}
              className={`p-2 rounded-full transition-colors ${
                isDark ? 'hover:bg-slate-800 text-slate-400' : 'hover:bg-slate-100 text-slate-500'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Structure split: optional Customizer panel */}
        <div className="flex-grow flex overflow-hidden">
          {showConfig && (
            <div
              className={`w-80 border-r p-6 overflow-y-auto space-y-4 transition-all duration-300 ${
                isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-slate-400 mb-2 flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-indigo-500" /> Personal Identity
              </h4>
              <div className="space-y-3 font-mono text-xs">
                <div>
                  <label className="block text-[10px] text-slate-400 uppercase mb-1">First Name</label>
                  <input
                    type="text"
                    value={profileForm.name}
                    onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                    className={`w-full p-2 border rounded outline-none ${
                      isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-300'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-slate-400 uppercase mb-1">Surname</label>
                  <input
                    type="text"
                    value={profileForm.surname}
                    onChange={(e) => setProfileForm({ ...profileForm, surname: e.target.value })}
                    className={`w-full p-2 border rounded outline-none ${
                      isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-300'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-slate-400 uppercase mb-1">Professional Role</label>
                  <input
                    type="text"
                    value={profileForm.role}
                    onChange={(e) => setProfileForm({ ...profileForm, role: e.target.value })}
                    className={`w-full p-2 border rounded outline-none ${
                      isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-300'
                    }`}
                  />
                </div>
              </div>

              <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-slate-400 pt-4 mb-2 flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-indigo-500" /> Connection Points
              </h4>
              <div className="space-y-3 font-mono text-xs">
                <div>
                  <label className="block text-[10px] text-slate-400 uppercase mb-1">Email Coordinates</label>
                  <input
                    type="email"
                    value={profileForm.email}
                    onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                    className={`w-full p-2 border rounded outline-none ${
                      isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-300'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-slate-400 uppercase mb-1">Phone Line</label>
                  <input
                    type="text"
                    value={profileForm.phone}
                    onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                    className={`w-full p-2 border rounded outline-none ${
                      isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-300'
                    }`}
                  />
                </div>
              </div>

              <button
                onClick={saveDetails}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-mono text-xs py-2 px-4 rounded transition-colors mt-6 uppercase font-bold"
              >
                Apply Customizations
              </button>
            </div>
          )}

          {/* Resume Viewer Page */}
          <div className="flex-grow p-8 overflow-y-auto bg-slate-950/20">
            <div
              id="printed-resume-canvas"
              className="max-w-2xl mx-auto rounded-lg shadow-xl p-8 bg-white text-slate-900 border border-slate-200"
            >
              {/* Profile Bio Header */}
              <div className="flex justify-between items-start border-b-2 border-slate-300 pb-6">
                <div>
                  <h1 className="text-2xl font-mono font-black tracking-tight text-slate-900">
                    {profileForm.name} {profileForm.surname}
                  </h1>
                  <p className="text-xs font-mono text-indigo-600 font-bold mt-1 uppercase tracking-wider">
                    {profileForm.role}
                  </p>
                  <p className="text-xs text-slate-500 mt-2 hover:underline">{profile.location}</p>
                </div>
                <div className="text-right text-[10px] font-mono text-slate-500 space-y-1">
                  <p>{profileForm.email}</p>
                  <p>{profileForm.phone}</p>
                  <p>{profileForm.linkedin}</p>
                </div>
              </div>

              {/* Bio summary */}
              <div className="py-4">
                <p className="text-xs font-sans leading-relaxed text-slate-600 italic">
                  "{profile.bio}"
                </p>
              </div>

              {/* Grid content */}
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-100">
                {/* Lateral left sidebar: Tech Stack & Tools */}
                <div className="col-span-1 space-y-4 border-r border-slate-100 pr-4">
                  <div>
                    <h3 className="text-xs font-mono font-black border-b border-indigo-200 pb-1 uppercase tracking-wider text-indigo-700 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" /> Capabilities
                    </h3>
                    <div className="mt-2 space-y-3">
                      {profile.techStack.map((cat, idx) => (
                        <div key={idx} className="space-y-1">
                          <h4 className="text-[10px] font-mono font-bold text-slate-700 uppercase">{cat.title}</h4>
                          <p className="text-[10px] text-slate-600 leading-none">{cat.skills.join(', ')}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-mono font-black border-b border-indigo-200 pb-1 mt-2 uppercase tracking-wider text-indigo-700">
                      Identity Info
                    </h3>
                    <div className="mt-2 text-[10px] font-mono text-slate-600 space-y-1">
                      <p>Passion: <span className="font-sans text-slate-800 font-semibold">{profile.passion}</span></p>
                      <p>Coffee Quotient: <span className="font-sans text-slate-800 font-semibold">{profile.coffeeLevel}</span></p>
                      <p>Experience: <span className="font-sans text-slate-800 font-semibold">{profile.experienceYears} Years</span></p>
                      <p>User Scale-Up: <span className="font-sans text-slate-800 font-semibold">{profile.usersScaled}</span></p>
                    </div>
                  </div>
                </div>

                {/* Main Right columns: Experiences and Project metrics */}
                <div className="col-span-2 space-y-6">
                  <div>
                    <h3 className="text-xs font-mono font-black border-b border-indigo-200 pb-1 uppercase tracking-wider text-slate-800 flex items-center gap-1">
                      <Briefcase className="w-4 h-4 text-indigo-600" /> Work History
                    </h3>

                    <div className="mt-3 space-y-4">
                      {profile.experience.map((job) => (
                        <div key={job.id} className="space-y-1">
                          <div className="flex justify-between items-baseline text-[11px]">
                            <h4 className="font-bold text-slate-800">{job.title}</h4>
                            <span className="text-[9px] font-mono text-slate-500 font-semibold">{job.period}</span>
                          </div>
                          <p className="text-[10px] text-indigo-600 font-mono font-bold leading-none">
                            {job.company}
                          </p>
                          <ul className="text-[9px] text-slate-600 list-disc pl-4 space-y-1 mt-1 font-sans">
                            {job.tasks.map((task, tidx) => (
                              <li key={tidx}>{task}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-mono font-black border-b border-indigo-200 pb-1 uppercase tracking-wider text-slate-800">
                      Selected Blueprint Artifacts
                    </h3>
                    <div className="mt-3 grid grid-cols-2 gap-3">
                      {profile.projects.map((proj) => (
                        <div key={proj.id} className="p-2 border border-slate-100 rounded bg-slate-50">
                          <h4 className="text-[10px] font-bold text-slate-800 leading-tight">{proj.title}</h4>
                          <p className="text-[8px] text-slate-500 leading-tight mt-1 truncate">{proj.description}</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {proj.tags.map((tag, sidx) => (
                              <span key={sidx} className="text-[7px] font-mono bg-indigo-100/50 text-indigo-700 px-1 rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-t ${
            isDark ? 'border-purple-500/10 bg-slate-950/40' : 'border-slate-100 bg-slate-50'
          }`}
        >
          <div className="flex gap-4">
            <button
              onClick={handleCopyMarkdown}
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs py-2 px-4 rounded transition-colors"
            >
              {copiedMarkdown ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  Copied Markdown!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy Markdown
                </>
              )}
            </button>
            <button
              onClick={handleDownloadPDF}
              disabled={downloadProgress !== null}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-mono text-xs py-2 px-4 rounded transition-colors disabled:opacity-50"
            >
              {downloadProgress !== null ? (
                <>
                  <Printer className="w-4 h-4 animate-spin text-teal-400" />
                  Generating PDF... {downloadProgress}%
                </>
              ) : (
                <>
                  <Printer className="w-4 h-4" />
                  Export PDF
                </>
              )}
            </button>
          </div>
          <button
            onClick={onClose}
            className={`text-xs font-mono font-bold hover:underline ${
              isDark ? 'text-purple-400' : 'text-indigo-600'
            }`}
          >
            Finished Processing
          </button>
        </div>
      </div>
    </div>
  );
}
