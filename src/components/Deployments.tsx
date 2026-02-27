import { useState } from 'react';
import { Box, CheckCircle2, ChevronDown, Clock, Download, Play, Plus, RefreshCw, Settings2, StopCircle, Trash2 } from 'lucide-react';

export default function Deployments() {
  const [deployments, setDeployments] = useState([
    { id: '1', name: 'Alpha Bot RL - V3', version: '3.1.0', status: 'running', uptime: '14d 2h', type: 'Strategy', cpu: '12%', mem: '256MB' },
    { id: '2', name: 'Binance Ingestor', version: '2.0.1', status: 'running', uptime: '30d 5h', type: 'Data Source', cpu: '5%', mem: '128MB' },
    { id: '3', name: 'Risk Model Omega', version: '1.5.0', status: 'stopped', uptime: '-', type: 'Model', cpu: '0%', mem: '0MB' },
    { id: '4', name: 'Kraken Sync', version: '1.0.0', status: 'failed', uptime: '-', type: 'Data Source', cpu: '0%', mem: '0MB' },
  ]);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-100 tracking-tight">Package Management</h2>
          <p className="text-sm text-zinc-500 mt-1">Deploy and manage your trading strategies and data ingestors.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-sm font-medium rounded-lg transition-colors text-zinc-300">
            <RefreshCw className="w-4 h-4" />
            Sync Packages
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-zinc-950 text-sm font-medium rounded-lg transition-colors shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            <Plus className="w-4 h-4" />
            New Deployment
          </button>
        </div>
      </div>

      <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-800/60 bg-zinc-900/80 text-xs uppercase tracking-wider text-zinc-500 font-medium">
                <th className="px-6 py-4">Package Name</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Uptime</th>
                <th className="px-6 py-4">Metrics (CPU/Mem)</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              {deployments.map((dep) => (
                <tr key={dep.id} className="hover:bg-zinc-800/20 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-zinc-400">
                        <Box className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-zinc-200">{dep.name}</p>
                        <p className="text-xs text-zinc-500 font-mono">v{dep.version}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-medium text-zinc-400 bg-zinc-800/50 px-2.5 py-1 rounded-md border border-zinc-700/50">
                      {dep.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {dep.status === 'running' && <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)] animate-pulse"></span>}
                      {dep.status === 'stopped' && <span className="w-2 h-2 rounded-full bg-zinc-500"></span>}
                      {dep.status === 'failed' && <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></span>}
                      <span className="text-sm text-zinc-300 capitalize">{dep.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-zinc-400 font-mono">
                    {dep.uptime}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4 text-xs text-zinc-400 font-mono">
                      <span>{dep.cpu}</span>
                      <span>{dep.mem}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {dep.status === 'running' ? (
                        <button className="p-1.5 text-zinc-400 hover:text-amber-400 hover:bg-amber-400/10 rounded-md transition-colors" title="Stop">
                          <StopCircle className="w-4 h-4" />
                        </button>
                      ) : (
                        <button className="p-1.5 text-zinc-400 hover:text-emerald-400 hover:bg-emerald-400/10 rounded-md transition-colors" title="Start">
                          <Play className="w-4 h-4" />
                        </button>
                      )}
                      <button className="p-1.5 text-zinc-400 hover:text-blue-400 hover:bg-blue-400/10 rounded-md transition-colors" title="Settings">
                        <Settings2 className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-zinc-400 hover:text-red-400 hover:bg-red-400/10 rounded-md transition-colors" title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-zinc-800/60 bg-zinc-900/60 flex items-center justify-between text-xs text-zinc-500">
          <span>Showing {deployments.length} deployments</span>
          <div className="flex items-center gap-2">
            <button className="px-2 py-1 hover:text-zinc-300 transition-colors">Previous</button>
            <button className="px-2 py-1 hover:text-zinc-300 transition-colors">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
