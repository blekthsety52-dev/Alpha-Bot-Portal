import { useState, useEffect } from 'react';
import { Activity, AlertTriangle, CheckCircle2, ServerCrash, TrendingUp } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function Monitoring() {
  const [data, setData] = useState([
    { time: '10:00', latency: 45, throughput: 1200 },
    { time: '10:05', latency: 42, throughput: 1250 },
    { time: '10:10', latency: 48, throughput: 1100 },
    { time: '10:15', latency: 55, throughput: 1300 },
    { time: '10:20', latency: 40, throughput: 1400 },
    { time: '10:25', latency: 38, throughput: 1350 },
    { time: '10:30', latency: 42, throughput: 1280 },
  ]);

  const [isChaosActive, setIsChaosActive] = useState(false);

  const toggleChaos = () => {
    setIsChaosActive(!isChaosActive);
    if (!isChaosActive) {
      // Simulate chaos
      const newData = [...data];
      newData.push({ time: '10:35', latency: 150, throughput: 800 });
      setData(newData);
    } else {
      // Recover
      const newData = [...data];
      newData.push({ time: '10:40', latency: 45, throughput: 1200 });
      setData(newData);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-100 tracking-tight">System Monitoring</h2>
          <p className="text-sm text-zinc-500 mt-1">Real-time metrics and chaos engineering controls.</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleChaos}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
              isChaosActive 
                ? 'bg-red-500/20 text-red-400 border border-red-500/50 hover:bg-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.2)]' 
                : 'bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-zinc-800'
            }`}
          >
            <ServerCrash className="w-4 h-4" />
            {isChaosActive ? 'Stop Chaos Test' : 'Run Chaos Test'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-zinc-100 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              System Latency (ms)
            </h3>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-zinc-400">Normal</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-400"></span>
                <span className="text-zinc-400">Chaos</span>
              </div>
            </div>
          </div>
          
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorLatency" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={isChaosActive ? "#ef4444" : "#34d399"} stopOpacity={0.3}/>
                    <stop offset="95%" stopColor={isChaosActive ? "#ef4444" : "#34d399"} stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                <XAxis dataKey="time" stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '8px', color: '#f4f4f5' }}
                  itemStyle={{ color: '#34d399' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="latency" 
                  stroke={isChaosActive ? "#ef4444" : "#34d399"} 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorLatency)" 
                  animationDuration={500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Alerts & Status */}
        <div className="space-y-6">
          <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-medium text-zinc-100 mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-400" />
              Live Metrics
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-zinc-400">CPU Usage</span>
                  <span className="text-zinc-200 font-mono">42%</span>
                </div>
                <div className="w-full bg-zinc-800 rounded-full h-1.5">
                  <div className="bg-blue-400 h-1.5 rounded-full" style={{ width: '42%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-zinc-400">Memory</span>
                  <span className="text-zinc-200 font-mono">2.4 GB</span>
                </div>
                <div className="w-full bg-zinc-800 rounded-full h-1.5">
                  <div className="bg-purple-400 h-1.5 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-zinc-400">Network I/O</span>
                  <span className="text-zinc-200 font-mono">1.2 MB/s</span>
                </div>
                <div className="w-full bg-zinc-800 rounded-full h-1.5">
                  <div className="bg-emerald-400 h-1.5 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-medium text-zinc-100 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              Recent Alerts
            </h3>
            <div className="space-y-3">
              {isChaosActive ? (
                <div className="flex items-start gap-3 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                  <ServerCrash className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-red-400">High Latency Detected</p>
                    <p className="text-xs text-red-400/70 mt-0.5">API Gateway response time &gt; 100ms</p>
                    <p className="text-[10px] text-red-400/50 mt-1 font-mono">Just now</p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-zinc-800/30 border border-zinc-700/30">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-zinc-300">System Recovered</p>
                      <p className="text-xs text-zinc-500 mt-0.5">Latency normalized to 42ms</p>
                      <p className="text-[10px] text-zinc-600 mt-1 font-mono">10 mins ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-amber-400">Rate Limit Warning</p>
                      <p className="text-xs text-amber-400/70 mt-0.5">Binance Ingestor approaching limit</p>
                      <p className="text-[10px] text-amber-400/50 mt-1 font-mono">1 hour ago</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
