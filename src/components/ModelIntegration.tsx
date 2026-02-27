import { useState } from 'react';
import { BrainCircuit, CheckCircle2, Cpu, Key, Play, Plus, RefreshCw, Settings2, Sparkles, Terminal } from 'lucide-react';

export default function ModelIntegration() {
  const [isTesting, setIsTesting] = useState(false);
  const [testResult, setTestResult] = useState<string | null>(null);

  const handleTestConnection = () => {
    setIsTesting(true);
    setTestResult(null);
    setTimeout(() => {
      setIsTesting(false);
      setTestResult('Connection successful. Latency: 42ms. Model: gemini-3.1-pro-preview');
    }, 1500);
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-100 tracking-tight">AI Model Integration</h2>
          <p className="text-sm text-zinc-500 mt-1">Configure and test connections to external AI models (Gemini API).</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-zinc-950 text-sm font-medium rounded-lg transition-colors shadow-[0_0_15px_rgba(16,185,129,0.3)]">
          <Plus className="w-4 h-4" />
          Add Model
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Models */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-6 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity group-hover:bg-emerald-500/10"></div>
            
            <div className="flex items-start justify-between mb-6 relative z-10">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-zinc-800/80 border border-zinc-700/50 text-emerald-400 shadow-inner">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-zinc-100 flex items-center gap-2">
                    Gemini 3.1 Pro
                    <span className="text-[10px] uppercase tracking-wider font-bold bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20">Primary</span>
                  </h3>
                  <p className="text-sm text-zinc-500 font-mono mt-1">gemini-3.1-pro-preview</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 rounded-lg transition-colors border border-transparent hover:border-zinc-700/50">
                  <Settings2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6 relative z-10">
              <div className="bg-zinc-950/50 rounded-lg p-3 border border-zinc-800/40">
                <p className="text-xs text-zinc-500 mb-1 uppercase tracking-wider">Status</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)] animate-pulse"></span>
                  <span className="text-sm font-medium text-zinc-200">Connected</span>
                </div>
              </div>
              <div className="bg-zinc-950/50 rounded-lg p-3 border border-zinc-800/40">
                <p className="text-xs text-zinc-500 mb-1 uppercase tracking-wider">Latency</p>
                <p className="text-sm font-medium text-zinc-200 font-mono">42ms</p>
              </div>
              <div className="bg-zinc-950/50 rounded-lg p-3 border border-zinc-800/40">
                <p className="text-xs text-zinc-500 mb-1 uppercase tracking-wider">Requests/min</p>
                <p className="text-sm font-medium text-zinc-200 font-mono">124</p>
              </div>
            </div>

            <div className="flex items-center gap-3 relative z-10">
              <button 
                onClick={handleTestConnection}
                disabled={isTesting}
                className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-sm font-medium rounded-lg transition-colors border border-zinc-700/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isTesting ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
                {isTesting ? 'Testing...' : 'Test Connection'}
              </button>
              {testResult && (
                <span className="text-xs text-emerald-400 flex items-center gap-1.5 bg-emerald-400/10 px-3 py-1.5 rounded-md border border-emerald-400/20">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {testResult}
                </span>
              )}
            </div>
          </div>

          <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-6 shadow-sm relative overflow-hidden group opacity-70 hover:opacity-100 transition-opacity">
            <div className="flex items-start justify-between relative z-10">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-zinc-800/50 border border-zinc-700/30 text-zinc-500">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-zinc-300 flex items-center gap-2">
                    Local RL Model
                    <span className="text-[10px] uppercase tracking-wider font-bold bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-full border border-zinc-700">Fallback</span>
                  </h3>
                  <p className="text-sm text-zinc-500 font-mono mt-1">alpha-bot-rl-v3</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-zinc-500 bg-zinc-950 px-2.5 py-1 rounded-md border border-zinc-800">
                  Standby
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Configuration Panel */}
        <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-6 shadow-sm h-fit">
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-zinc-800/60">
            <Key className="w-5 h-5 text-zinc-400" />
            <h3 className="text-lg font-medium text-zinc-100">API Configuration</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">API Key</label>
              <div className="relative">
                <input 
                  type="password" 
                  value="••••••••••••••••••••••••••••••••" 
                  readOnly
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-300 font-mono focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-emerald-400 hover:text-emerald-300 font-medium bg-emerald-400/10 px-2 py-1 rounded border border-emerald-400/20">
                  Update
                </button>
              </div>
              <p className="text-[10px] text-zinc-500 mt-1.5">Managed via AI Studio Secrets</p>
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Endpoint URL</label>
              <input 
                type="text" 
                value="https://generativelanguage.googleapis.com" 
                readOnly
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-500 font-mono focus:outline-none"
              />
            </div>

            <div className="pt-4 border-t border-zinc-800/60">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-zinc-300">System Prompt</span>
                <button className="text-xs text-zinc-400 hover:text-zinc-200 flex items-center gap-1">
                  <Terminal className="w-3 h-3" />
                  Edit
                </button>
              </div>
              <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-xs text-zinc-500 font-mono leading-relaxed h-24 overflow-y-auto">
                You are an advanced quantitative trading assistant. Analyze the provided L2 order book data and output a trading signal (BUY/SELL/HOLD) along with a confidence score and recommended Kelly fraction.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
