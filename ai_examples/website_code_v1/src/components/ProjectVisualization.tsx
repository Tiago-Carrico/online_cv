import { useState, useEffect } from 'react';
import { X, Play, RefreshCw, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';

interface ProjectVisualizationProps {
  projectId: string;
  projectTitle: string;
  onClose: () => void;
  theme: 'light' | 'dark';
}

export default function ProjectVisualization({
  projectId,
  projectTitle,
  onClose,
  theme,
}: ProjectVisualizationProps) {
  // Core modes are 'nexus', 'devsync', 'raft', 'telemetry'
  const isNexus = projectId.includes('proj1') && !projectId.includes('arch');
  const isDevSync = projectId.includes('proj2') && !projectId.includes('arch');
  const isRaft = projectId.includes('arch-proj1');
  const isTelemetry = projectId.includes('arch-proj2');

  // Interactive state
  // 1) Nexus state
  const [loadMultiplier, setLoadMultiplier] = useState(1);
  const [p99Data, setP99Data] = useState<number[]>(Array.from({ length: 15 }, () => 12 + Math.random() * 8));
  
  // 2) DevSync Collab state
  const [typedCode, setTypedCode] = useState('// Collaborate in real-time...\nfunction syncData() {\n  return "DevSync Active";\n}');
  const [collaborators, setCollaborators] = useState([
    { name: 'Sarah (UX)', action: 'Editing main.css', color: 'bg-rose-500' },
    { name: 'Marcus (Dev)', action: 'Refactoring telemetry', color: 'bg-emerald-500' }
  ]);
  const [collabLog, setCollabLog] = useState<string[]>(['Sarah joined the session.', 'Marcus started typing...']);

  // 3) Raft cluster states
  const [nodes, setNodes] = useState([
    { id: 'A', role: 'Leader', status: 'Healthy', term: 4 },
    { id: 'B', role: 'Follower', status: 'Healthy', term: 4 },
    { id: 'C', role: 'Follower', status: 'Healthy', term: 4 },
  ]);
  const [networkPartition, setNetworkPartition] = useState(false);
  const [heartbeatCount, setHeartbeatCount] = useState(0);

  // 4) Telemetry state
  const [tps, setTps] = useState(9840);
  const [errorRate, setErrorRate] = useState(0.04);
  const [isIngesting, setIsIngesting] = useState(true);

  // Interval-driven updates for visualization
  useEffect(() => {
    const timer = setInterval(() => {
      // 1) Nexus live graphing
      if (isNexus) {
        setP99Data((prev) => {
          const nextVal = Math.max(
            5,
            Math.min(
              60,
              Math.round(
                (14 + Math.random() * 10) * loadMultiplier +
                  (loadMultiplier > 2 ? Math.random() * 15 : 0)
              )
            )
          );
          return [...prev.slice(1), nextVal];
        });
      }

      // 2) DevSync remote typist simulator
      if (isDevSync) {
        if (Math.random() > 0.7) {
          const actions = [
            'Marcus saved telemetry.ts',
            'Sarah edited App.tsx',
            'Dave joined with read-only access',
            'Collab server synchronized cursor index',
          ];
          const chosen = actions[Math.floor(Math.random() * actions.length)];
          setCollabLog((prev) => [chosen, ...prev.slice(0, 5)]);
        }
      }

      // 3) Raft heartbeat count
      if (isRaft && !networkPartition) {
        setHeartbeatCount((prev) => prev + 1);
      }

      // 4) Telemetry stream
      if (isIngesting && isTelemetry) {
        setTps((prev) => Math.max(8000, Math.min(15000, Math.round(prev + (Math.random() - 0.5) * 400))));
        setErrorRate((prev) => Math.max(0.01, Math.min(0.2, prev + (Math.random() - 0.5) * 0.01)));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isNexus, isDevSync, isRaft, isTelemetry, loadMultiplier, networkPartition, isIngesting]);

  // Trigger election simulation
  const triggerPartition = () => {
    setNetworkPartition(true);
    // Node A is leader, isolate it
    setNodes([
      { id: 'A', role: 'Leader (Isolated)', status: 'Partitioned', term: 4 },
      { id: 'B', role: 'Candidate', status: 'Searching...', term: 5 },
      { id: 'C', role: 'Follower', status: 'Healthy', term: 4 },
    ]);

    // Simulate election resolution after 2 seconds
    setTimeout(() => {
      setNodes([
        { id: 'A', role: 'Follower', status: 'Healthy (Joined)', term: 5 },
        { id: 'B', role: 'Leader', status: 'Healthy', term: 5 },
        { id: 'C', role: 'Follower', status: 'Healthy', term: 5 },
      ]);
      setNetworkPartition(false);
    }, 2500);
  };

  const isDark = theme === 'dark';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
      <div
        id="visualizer-modal"
        className={`w-full max-w-2xl overflow-hidden rounded-xl border shadow-2xl transition-all duration-300 ${
          isDark
            ? 'bg-slate-900 border-purple-500/20 text-slate-100'
            : 'bg-white border-slate-200 text-slate-800'
        }`}
      >
        {/* Header */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-b ${
            isDark ? 'border-purple-500/10 bg-slate-950/40' : 'border-slate-100 bg-slate-50'
          }`}
        >
          <div>
            <span
              className={`text-xs font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${
                isDark ? 'bg-purple-900/30 text-purple-400' : 'bg-indigo-100 text-indigo-700'
              }`}
            >
              Interactive Blueprint
            </span>
            <h3 className="text-lg font-mono font-bold mt-1 text-primary">{projectTitle}</h3>
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-full transition-colors ${
              isDark ? 'hover:bg-slate-800 text-slate-400' : 'hover:bg-slate-100 text-slate-500'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* 1) NEXUS ANALYTICS VIEW */}
          {isNexus && (
            <div className="space-y-6">
              <p className="text-sm opacity-80">
                Nexus Analytics dynamically streams raw, multi-cluster metrics. Use the load controller to increase throughput and monitor p99 response times in real-time.
              </p>

              {/* Load controller slider */}
              <div className={`p-4 rounded-lg border ${isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-mono font-bold uppercase text-slate-400">Cluster Load Driver</span>
                  <span className={`text-sm font-mono font-bold ${loadMultiplier > 2.5 ? 'text-red-500' : 'text-indigo-500'}`}>
                    {(loadMultiplier * 100).toFixed(0)}% Capacity
                  </span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="4"
                  step="0.1"
                  value={loadMultiplier}
                  onChange={(e) => setLoadMultiplier(parseFloat(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-slate-300 dark:bg-slate-700 accent-indigo-500"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-2">
                  <span>Idle</span>
                  <span>Normal Ops</span>
                  <span>Overload Bound</span>
                  <span>Spike Failure Test</span>
                </div>
              </div>

              {/* Live SVG Graph */}
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase text-slate-400">Live p99 latency cluster monitors (ms):</span>
                <div className="h-44 w-full bg-slate-950 rounded-lg flex items-end p-4 relative overflow-hidden border border-slate-800">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none opacity-10">
                    <div className="border-b border-white w-full"></div>
                    <div className="border-b border-white w-full"></div>
                    <div className="border-b border-white w-full"></div>
                    <div className="border-b border-white w-full"></div>
                  </div>

                  {/* Latency Plot */}
                  <svg className="absolute inset-0 w-full h-full p-4" viewBox="0 0 400 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="nexusGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Filled Area */}
                    <path
                      d={`M 0,100 ${p99Data
                        .map((d, i) => `L ${(i / (p99Data.length - 1)) * 400},${100 - d}`)
                        .join(' ')} L 400,100 Z`}
                      fill="url(#nexusGradient)"
                    />
                    {/* Line */}
                    <path
                      d={p99Data
                        .map((d, i) => `${i === 0 ? 'M' : 'L'} ${(i / (p99Data.length - 1)) * 400},${100 - d}`)
                        .join(' ')}
                      fill="none"
                      stroke="#4f46e5"
                      strokeWidth="2.5"
                    />
                  </svg>

                  <div className="absolute bottom-2 right-4 text-[10px] font-mono text-indigo-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping"></span>
                    Live Feed
                  </div>
                </div>
              </div>

              {/* Status metrics grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className={`p-3 rounded-lg border text-center ${isDark ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">P99 Latency</span>
                  <span className="text-xl font-mono font-extrabold text-indigo-500">
                    {Math.round(p99Data[p99Data.length - 1])} ms
                  </span>
                </div>
                <div className={`p-3 rounded-lg border text-center ${isDark ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Active Clusters</span>
                  <span className="text-xl font-mono font-extrabold text-teal-500">
                    {loadMultiplier > 3.2 ? '5 / 5' : '3 / 5'} Online
                  </span>
                </div>
                <div className={`p-3 rounded-lg border text-center ${isDark ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Throttled Requests</span>
                  <span className={`text-xl font-mono font-extrabold ${loadMultiplier > 3 ? 'text-red-500 animate-pulse' : 'text-slate-400'}`}>
                    {loadMultiplier > 3 ? `${(loadMultiplier * 2.5).toFixed(1)}%` : '0%'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* 2) DEVSYNC WORKSPACE VIEW */}
          {isDevSync && (
            <div className="space-y-6">
              <p className="text-sm opacity-80">
                DevSync enables ultra-low latency text synchronizations. Type below and watch other mock peer collaborators instantly keep in sync on the ledger.
              </p>

              {/* Interactive text editor */}
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase text-slate-400">Interactive Editor Input:</span>
                <textarea
                  value={typedCode}
                  onChange={(e) => setTypedCode(e.target.value)}
                  rows={5}
                  className={`w-full font-mono text-xs p-4 rounded-lg outline-none border focus:ring-1 focus:ring-indigo-500 ${
                    isDark
                      ? 'bg-slate-950 border-slate-800 text-teal-400'
                      : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                />
              </div>

              {/* Active collaborators list */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-400 mb-2">Connected Peers</h4>
                  <div className="space-y-2">
                    {collaborators.map((c, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center gap-2 p-2 rounded-md ${
                          isDark ? 'bg-slate-950/40' : 'bg-slate-50'
                        }`}
                      >
                        <span className={`w-2.5 h-2.5 rounded-full ${c.color}`}></span>
                        <div>
                          <p className="text-xs font-bold leading-none">{c.name}</p>
                          <p className="text-[9px] text-slate-400 mt-1">{c.action}</p>
                        </div>
                      </div>
                    ))}
                    <div className="text-[10px] text-indigo-500 mt-2 font-mono flex items-center gap-1">
                      <Zap className="w-3 h-3 animate-pulse" /> You are typing in sync.
                    </div>
                  </div>
                </div>

                {/* Simulated Ledger Log */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-400 mb-2">Sync Engine Output Logs</h4>
                  <div
                    className={`h-24 overflow-y-auto text-[10px] font-mono p-3 rounded-lg border ${
                      isDark ? 'bg-slate-950 border-slate-800 text-purple-400' : 'bg-slate-50 border-slate-200 text-slate-600'
                    }`}
                  >
                    {collabLog.map((log, idx) => (
                      <div key={idx} className="border-b border-slate-800/20 py-1">
                        &gt; {log}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3) RAFT CONSENSUS SIMULATOR */}
          {isRaft && (
            <div className="space-y-6">
              <p className="text-sm opacity-80">
                Raft requires a single Leader to accept client commands and broadcast heartbeats to Followers. Click the trigger below to force partition Node A and watch a fully-automated network election fire.
              </p>

              {/* Status grid */}
              <div className="grid grid-cols-3 gap-4">
                {nodes.map((node) => {
                  const nodeStatusColor =
                    node.role.includes('Isolated') || node.status === 'Partitioned'
                      ? 'border-red-500/50 bg-red-950/20 text-red-400'
                      : node.role === 'Leader'
                      ? 'border-purple-500/50 bg-purple-950/20 text-purple-400'
                      : 'border-slate-800 bg-slate-950/40 text-slate-300';

                  return (
                    <div key={node.id} className={`p-4 rounded-lg border text-center transition-all ${nodeStatusColor}`}>
                      <p className="text-lg font-mono font-black">Node {node.id}</p>
                      <p className="text-xs font-mono font-bold mt-1">{node.role}</p>
                      <div className="flex items-center justify-center gap-1.5 mt-2">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            node.status === 'Healthy'
                              ? 'bg-emerald-500 animate-ping'
                              : 'bg-red-500'
                          }`}
                        ></span>
                        <span className="text-[10px] font-mono text-slate-400">Term {node.term}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Visual Nodes Ring Map */}
              <div className="relative h-40 bg-slate-950 rounded-lg flex items-center justify-center border border-slate-800 overflow-hidden">
                {/* Visual pulse animations between nodes */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-full h-full p-4" viewBox="0 0 400 160">
                    <line x1="80" y1="80" x2="200" y2="80" stroke="#4d4354" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="320" y1="80" x2="200" y2="80" stroke="#4d4354" strokeWidth="2" strokeDasharray="5,5" />
                    
                    {/* Animated heartbeat light pulses */}
                    {!networkPartition && (
                      <>
                        <circle r="4" fill="#a855f7">
                          <animateMotion dur="1.2s" repeatCount="indefinite" path="M 200,80 L 80,80" />
                        </circle>
                        <circle r="4" fill="#a855f7">
                          <animateMotion dur="1.2s" repeatCount="indefinite" path="M 200,80 L 320,80" />
                        </circle>
                      </>
                    )}

                    {/* Nodes represent coordinates index */}
                    <circle cx="200" cy="80" r="16" fill="#490080" stroke="#a855f7" strokeWidth="2" />
                    <text x="200" y="84" fill="#fff" fontSize="11" textAnchor="middle" fontFamily="monospace">A</text>

                    <circle cx="80" cy="80" r="14" fill="#1e1b4b" stroke="#312e81" strokeWidth="2" />
                    <text x="80" y="84" fill="#d8b4fe" fontSize="10" textAnchor="middle" fontFamily="monospace">B</text>

                    <circle cx="320" cy="80" r="14" fill="#1e1b4b" stroke="#312e81" strokeWidth="2" />
                    <text x="320" y="84" fill="#d8b4fe" fontSize="10" textAnchor="middle" fontFamily="monospace">C</text>
                  </svg>
                </div>

                <div className="absolute left-4 bottom-3 text-[10px] font-mono text-slate-400">
                  Total Heartbeats broadcasted: <span className="text-purple-400">{heartbeatCount}</span>
                </div>
              </div>

              {/* Interaction triggering button */}
              <div className="flex gap-4">
                <button
                  disabled={networkPartition}
                  onClick={triggerPartition}
                  className="flex-1 flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-mono text-xs py-3 px-4 rounded-lg transition-colors"
                >
                  <AlertTriangle className="w-4 h-4" />
                  Trigger Network Partition (Isolate Node A)
                </button>
                <button
                  onClick={() => {
                    setNodes([
                      { id: 'A', role: 'Leader', status: 'Healthy', term: 4 },
                      { id: 'B', role: 'Follower', status: 'Healthy', term: 4 },
                      { id: 'C', role: 'Follower', status: 'Healthy', term: 4 },
                    ]);
                    setNetworkPartition(false);
                    setHeartbeatCount(0);
                  }}
                  className="p-3 border border-slate-700 hover:bg-slate-800 rounded-lg text-slate-300 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* 4) TELEMETRY INGESTION STREAM */}
          {isTelemetry && (
            <div className="space-y-6">
              <p className="text-sm opacity-80">
                A live streaming data flow monitoring continuous ingestion channels. Real-time metrics evaluate transactions and throughput boundaries for clickstream logs.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className={`p-4 rounded-lg border ${isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <span className="text-xs font-mono text-slate-400 block uppercase">Continuous Throughput</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl font-mono font-extrabold text-white">{tps.toLocaleString()}</span>
                    <span className="text-xs font-mono text-emerald-500 font-semibold">TPS</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div
                      className="bg-emerald-500 h-1.5 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min(100, (tps / 15000) * 100)}%` }}
                    ></div>
                  </div>
                </div>

                <div className={`p-4 rounded-lg border ${isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <span className="text-xs font-mono text-slate-400 block uppercase">Error Drop Rate</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className={`text-2xl font-mono font-extrabold ${errorRate > 0.1 ? 'text-red-500 animate-pulse' : 'text-slate-300'}`}>
                      {(errorRate * 100).toFixed(2)}%
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">Total Dropped</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        errorRate > 0.08 ? 'bg-red-500' : 'bg-purple-500'
                      }`}
                      style={{ width: `${Math.min(100, (errorRate / 0.2) * 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Streaming Activity Terminal box */}
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase text-slate-400">Telemetry Flow Ingestion Stack:</span>
                <div className="bg-slate-950 rounded-lg p-3 font-mono text-[10px] text-teal-400 border border-slate-800 h-32 overflow-hidden relative">
                  <div className="space-y-1">
                    <div>[ {new Date().toISOString()} ] Ingesting 512B payload from source clickstream_analytics_A</div>
                    <div>[ {new Date().toISOString()} ] Committing offsets for Kafka topic: clickstream.events</div>
                    <div>[ {new Date().toISOString()} ] Bulk loaded 4096 telemetry records into Clickhouse db successfully</div>
                    <div>[ {new Date().toISOString()} ] Latency marker: p99 = 1.12ms | compression_ratio = 4.2x</div>
                    <div className="text-white animate-pulse">
                      &gt; Streaming live metrics... Click Ingest to toggle socket stream.
                    </div>
                  </div>
                </div>
              </div>

              {/* Trigger Ingest stream */}
              <button
                onClick={() => setIsIngesting(!isIngesting)}
                className={`w-full flex items-center justify-center gap-2 font-mono text-xs py-3 px-4 rounded-lg transition-colors ${
                  isIngesting
                    ? 'bg-rose-600 hover:bg-rose-700 text-white'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                }`}
              >
                {isIngesting ? (
                  <>
                    <X className="w-4 h-4" />
                    Pause Ingestion channels
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    Resume Ingestion Socket
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-t ${
            isDark ? 'border-purple-500/10 bg-slate-950/40 text-slate-400' : 'border-slate-100 bg-slate-50 text-slate-500'
          }`}
        >
          <div className="flex items-center gap-1.5 text-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            Simulated Sandbox Console Active
          </div>
          <button
            onClick={onClose}
            className={`text-xs font-mono font-bold hover:underline ${
              isDark ? 'text-purple-400' : 'text-indigo-600'
            }`}
          >
            Close View
          </button>
        </div>
      </div>
    </div>
  );
}
