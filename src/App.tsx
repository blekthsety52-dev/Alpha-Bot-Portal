import { useState } from 'react';
import { 
  Activity, 
  Box, 
  Cpu, 
  LayoutDashboard, 
  Network, 
  Settings, 
  ShieldCheck, 
  Zap
} from 'lucide-react';

// Components
import DashboardOverview from './components/DashboardOverview';
import Deployments from './components/Deployments';
import ModelIntegration from './components/ModelIntegration';
import Monitoring from './components/Monitoring';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
    { id: 'deployments', label: 'Deployments', icon: Box },
    { id: 'models', label: 'AI Models', icon: Cpu },
    { id: 'monitoring', label: 'Monitoring', icon: Activity },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex font-sans selection:bg-emerald-500/30">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-800/60 bg-zinc-900/40 flex flex-col shrink-0">
        <div className="p-6 border-b border-zinc-800/60 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <Zap className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <h1 className="font-semibold text-sm tracking-tight text-zinc-100">Alpha Bot Portal</h1>
            <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mt-0.5">DQRE v2.4.0</p>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                  activeTab === tab.id 
                    ? 'bg-zinc-800/80 text-white font-medium shadow-sm border border-zinc-700/50' 
                    : 'text-zinc-400 hover:bg-zinc-800/40 hover:text-zinc-200 border border-transparent'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-zinc-800/60">
          <div className="bg-zinc-900/80 rounded-lg p-3 border border-zinc-800/80 shadow-inner">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-medium text-zinc-300 uppercase tracking-wider">System Status</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-500">Integration</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_5px_rgba(52,211,153,0.5)] animate-pulse"></span>
                  <span className="text-emerald-400 font-mono">Online</span>
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-500">DQRE API</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_5px_rgba(52,211,153,0.5)] animate-pulse"></span>
                  <span className="text-emerald-400 font-mono">Online</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen overflow-hidden bg-zinc-950">
        <header className="h-16 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md flex items-center px-8 shrink-0 sticky top-0 z-10">
          <h2 className="text-lg font-medium capitalize text-zinc-100 tracking-tight">
            {activeTab.replace('-', ' ')}
          </h2>
          <div className="ml-auto flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-400 shadow-sm">
              <Network className="w-3.5 h-3.5 text-zinc-500" />
              <span>ws://localhost:8080</span>
            </div>
          </div>
        </header>
        
        <div className="flex-1 overflow-auto p-8">
          <div className="max-w-6xl mx-auto">
            {activeTab === 'dashboard' && <DashboardOverview />}
            {activeTab === 'deployments' && <Deployments />}
            {activeTab === 'models' && <ModelIntegration />}
            {activeTab === 'monitoring' && <Monitoring />}
            {activeTab === 'settings' && (
              <div className="text-zinc-400 text-sm p-6 border border-zinc-800/60 rounded-xl bg-zinc-900/20">
                Settings configuration coming soon.
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
