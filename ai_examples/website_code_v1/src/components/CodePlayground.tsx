import { useState, useEffect } from 'react';
import { Play, RotateCcw, Terminal as TerminalIcon, Coffee, Sparkles } from 'lucide-react';

interface CodePlaygroundProps {
  code: string;
  language: string;
  theme: 'light' | 'dark';
}

export default function CodePlayground({
  code,
  language,
  theme,
}: CodePlaygroundProps) {
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [coffeeBoost, setCoffeeBoost] = useState(1);

  const isDark = theme === 'dark';

  // Extract lines to render with custom syntax highlighting
  const lines = code.trim().split('\n');

  // Syntax highlighter helpers
  const highlightToken = (word: string) => {
    const isJS = language === 'javascript';

    const keywords = ['const', 'function', 'while', 'return', 'if', 'nil', 'defer', 'span', 'err', 'struct', 'type', 'func'];
    const storageClasses = ['engineer', 's', 'Server', 's.router', 'trace'];
    const numericAndStrings = [
      '0',
      'Infinity',
      "'Alex Morgan'",
      "'Full-Stack Engineer'",
      "'React'",
      "'Node.js'",
      "'TypeScript'",
      "'Go'",
      "'San Francisco, CA'",
      "'Building scalable systems'",
    ];

    const cleanedWord = word.trim().replace(/[\[\],;{}()\'\"]/g, '');

    if (keywords.includes(cleanedWord)) {
      return isDark ? 'text-purple-400 font-bold' : 'text-indigo-600 font-bold';
    }
    if (storageClasses.includes(cleanedWord)) {
      return 'text-teal-400 font-medium';
    }
    if (numericAndStrings.includes(cleanedWord) || word.startsWith("'") || word.includes("'")) {
      return isDark ? 'text-yellow-400' : 'text-amber-600';
    }

    return isDark ? 'text-slate-300' : 'text-slate-600';
  };

  const highlightLine = (line: string) => {
    const tokens = line.split(/(\s+)/);
    return tokens.map((token, idx) => {
      if (token.trim() === '') {
        return <span key={idx}>{token}</span>;
      }
      return <span key={idx} className={highlightToken(token)}>{token}</span>;
    });
  };

  const handleRunCode = () => {
    if (isRunning) return;
    setIsRunning(true);
    setConsoleLogs([]);

    const runLogs = language === 'javascript'
      ? [
          'Initializing VM engine...',
          `Bootstrap state: Loading profile metrics (Coffee Quotient: ${coffeeBoost > 1 ? 'Overclocked' : 'Constant'})`,
          'Executing buildAwesomeThings()...',
          ' -> engineer.coffeeLevel > 0 checking... Condition holding [True]',
          ' -> [Success] engineer.writeCode() -> Main framework components initialized (React, Go)',
          ' -> [Success] engineer.solveProblems() -> Memory leak in database routing resolved',
          `Loop interval completed. Execution speed: ${250 * coffeeBoost} LOC/sec`,
          'Process sleeping... Waiting for next coffee quotient replenishment event'
        ]
      : [
          'Compiling go binary s.router.Route...',
          'Server handling RPC protocol request (ID: 0x92fca09)...',
          ' -> ctx.Context injected with telemetry logging markers',
          ' -> trace.StartSpan(ctx) -> Span metadata trace compiled securely',
          ' -> s.router.Route(req) -> Routed payload of 8.2KB to cluster microservice',
          ' -> Transaction response code: 200 OK',
          ' -> traceSpan.End() -> Flushed event to collector system metrics',
          `Completed execution in: ${Math.max(20, 150 - coffeeBoost * 45)}μs.`
        ];

    let currentLogIndex = 0;
    const intervalTime = Math.max(200, 600 - coffeeBoost * 180);

    const timer = setInterval(() => {
      if (currentLogIndex < runLogs.length) {
        setConsoleLogs((prev) => [...prev, runLogs[currentLogIndex]]);
        currentLogIndex++;
      } else {
        clearInterval(timer);
        setIsRunning(false);
      }
    }, intervalTime);
  };

  return (
    <div
      id="code-playground"
      className={`relative w-full rounded-xl overflow-hidden border transition-all duration-300 ${
        isDark
          ? 'bg-slate-950/90 border-purple-500/20 shadow-2xl shadow-purple-500/5'
          : 'bg-white border-slate-200 shadow-lg shadow-indigo-500/5'
      }`}
    >
      {/* Code window controls bar */}
      <div
        className={`px-4 py-3 border-b flex justify-between items-center ${
          isDark ? 'bg-slate-900 border-purple-500/10' : 'bg-slate-50 border-slate-200'
        }`}
      >
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500 block hover:scale-105 transition-transform" />
          <span className="w-3 h-3 rounded-full bg-amber-500 block hover:scale-105 transition-transform" />
          <span className="w-3 h-3 rounded-full bg-emerald-500 block hover:scale-105 transition-transform" />
        </div>
        
        <div className="flex items-center gap-4">
          {/* Coffee booster control trigger */}
          <button
            onClick={() => setCoffeeBoost((b) => (b === 3 ? 1 : b + 1))}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold transition-all ${
              coffeeBoost === 3
                ? 'bg-amber-500 text-white animate-pulse'
                : coffeeBoost === 2
                ? 'bg-amber-100 dark:bg-amber-950/40 text-amber-500'
                : 'text-slate-400 bg-transparent'
            }`}
            title="Increase developer coffee quotient to speed up compilation outputs!"
          >
            <Coffee className="w-3 h-3" />
            Boost {coffeeBoost}x
          </button>

          <span className="text-[10px] uppercase tracking-widest font-mono text-slate-400">
            {language} IDE
          </span>
        </div>
      </div>

      {/* Editor Main body */}
      <div className="p-6 font-mono text-[12px] overflow-x-auto leading-relaxed relative min-h-[180px]">
        {lines.map((line, idx) => (
          <div key={idx} className="flex select-text">
            {/* Linum */}
            <span className="text-right w-6 pr-4 opacity-45 select-none text-[10px]">
              {idx + 1}
            </span>
            {/* Line with tabs spaces replacement */}
            <span className="flex-1 whitespace-pre">
              {highlightLine(line)}
            </span>
          </div>
        ))}

        {/* Floating action build triggers */}
        <div className="absolute right-4 bottom-4 flex gap-2">
          <button
            onClick={handleRunCode}
            disabled={isRunning}
            className={`flex items-center gap-1.5 px-4 py-2 font-mono text-[11px] font-bold rounded-lg text-white transition-all transform active:scale-95 ${
              isRunning
                ? 'bg-slate-700 cursor-not-allowed opacity-50'
                : isDark
                ? 'bg-purple-600 hover:bg-purple-500 cursor-pointer hover:shadow-lg hover:shadow-purple-500/20'
                : 'bg-indigo-600 hover:bg-indigo-500 cursor-pointer hover:shadow-lg hover:shadow-indigo-500/20'
            }`}
          >
            {isRunning ? (
              <>
                <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                Compiling...
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                Run Code
              </>
            )}
          </button>
        </div>
      </div>

      {/* Real-time terminal output console */}
      {(consoleLogs.length > 0 || isRunning) && (
        <div
          className={`border-t font-mono text-[11px] p-4 transition-all duration-300 ${
            isDark ? 'bg-slate-950 border-purple-500/10 text-teal-400' : 'bg-slate-900 border-slate-800 text-teal-300'
          }`}
        >
          <div className="flex justify-between items-center mb-2 border-b border-white/5 pb-1 text-[10px] text-slate-400 select-none">
            <span className="flex items-center gap-1.5 text-slate-400 font-bold">
              <TerminalIcon className="w-3.5 h-3.5 text-teal-400" />
              STDOUT LOGS CONSOLE (Coffee Boost: {coffeeBoost}x)
            </span>
            <button
              onClick={() => setConsoleLogs([])}
              className="hover:text-white transition-colors"
            >
              Clear
            </button>
          </div>
          <div className="space-y-1 overflow-y-auto max-h-36">
            {consoleLogs.map((log, lidx) => (
              <div key={lidx} className="flex items-start gap-1">
                <span className="text-slate-500 select-none">&gt;</span>
                <span className={log.includes('[Success]') ? 'text-emerald-400' : ''}>
                  {log}
                </span>
              </div>
            ))}
            {isRunning && (
              <div className="flex items-center gap-1.5 mt-1 select-none text-slate-400 animate-pulse">
                <span>⚡</span>
                <span>Synthesizing logic blocks... compiling buffer</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
