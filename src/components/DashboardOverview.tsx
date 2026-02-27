import { Activity, ArrowUpRight, BarChart3, Clock, Cpu, Database, Network, ShieldCheck, Zap } from 'lucide-react';

export default function DashboardOverview() {
  const stats = [
    { label: 'Active Strategies', value: '12', icon: Activity, trend: '+2', color: 'text-emerald-400' },
    { label: 'System Latency', value: '42ms', icon: Clock, trend: '-5ms', color: 'text-blue-400' },
    { label: 'Data Ingestion', value: '1.2M/s', icon: Database, trend: '+15%', color: 'text-purple-400' },
    { label: 'Risk Level', value: 'Low', icon: ShieldCheck, trend: 'Stable', color: 'text-emerald-400' },
  ];

  const recentDeployments = [
    { id: 'dep-001', name: 'Alpha Bot RL - V3', status: 'Active', time: '10 mins ago', type: 'Strategy' },
    { id: 'dep-002', name: 'Binance Ingestor', status: 'Active', time: '2 hours ago', type: 'Data' },
    { id: 'dep-003', name: 'Risk Model Omega', status: 'Active', time: '5 hours ago', type: 'Model' },
    { id: 'dep-004', name: 'Kraken Sync', status: 'Failed', time: '1 day ago', type: 'Data' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-5 shadow-sm hover:bg-zinc-900/60 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg bg-zinc-800/50 border border-zinc-700/50 ${stat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1 text-xs font-medium text-zinc-400 bg-zinc-800/30 px-2 py-1 rounded-full">
                  <ArrowUpRight className="w-3 h-3" />
                  {stat.trend}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-zinc-100 tracking-tight">{stat.value}</h3>
                <p className="text-sm text-zinc-500 font-medium mt-1">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* System Architecture Status */}
        <div className="lg:col-span-2 bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-zinc-100">Integration Architecture</h3>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full border border-emerald-400/20">All Systems Nominal</span>
          </div>
          
          <div className="space-y-4">
            {[
              { name: 'Authentication Service', port: '8501', status: 'Healthy', icon: ShieldCheck },
              { name: 'Data Sync Service', port: '8502', status: 'Healthy', icon: Database },
              { name: 'Monitoring Service', port: '8503', status: 'Healthy', icon: Activity },
              { name: 'Load Balancer', port: '8600', status: 'Healthy', icon: Network },
              { name: 'DQRE Local System', port: '8080', status: 'Healthy', icon: Cpu },
            ].map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.name} className="flex items-center justify-between p-3 rounded-lg border border-zinc-800/40 bg-zinc-900/20 hover:bg-zinc-800/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-md bg-zinc-800 text-zinc-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-zinc-200">{service.name}</p>
                      <p className="text-xs text-zinc-500 font-mono">Port: {service.port}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
                    <span className="text-xs text-zinc-400">{service.status}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Deployments */}
        <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-zinc-100">Recent Deployments</h3>
            <button className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors">View All</button>
          </div>
          
          <div className="space-y-4">
            {recentDeployments.map((dep) => (
              <div key={dep.id} className="relative pl-4 before:absolute before:left-0 before:top-2 before:bottom-[-1rem] last:before:bottom-0 before:w-px before:bg-zinc-800">
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-zinc-700 border-2 border-zinc-950"></div>
                <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-zinc-200">{dep.name}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      dep.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}>
                      {dep.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-zinc-500">
                    <span>{dep.type}</span>
                    <span>{dep.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
