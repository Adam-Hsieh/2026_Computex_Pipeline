import React from 'react';
import { User, Cpu, Brain, Eye, Map, Bot, Gamepad2 } from 'lucide-react';

export default function App() {
  // 定義 SVG 貝茲曲線路徑
  // Training Pipeline 1: User (100,320) -> MimicGen (500,80) -> GR00T (900,320)
  const pathTop1 = "M 100 320 C 250 320, 250 80, 500 80 C 750 80, 750 320, 900 320";
  // Training Pipeline 2: User (100,320) -> Real Teleoperation (500,200) -> GR00T (900,320)
  const pathTop2 = "M 100 320 C 250 320, 250 200, 500 200 C 750 200, 750 320, 900 320";
  
  // Inference Pipeline: User (100,320) -> Cosmos (300,480) -> Supervision (500,480) -> SLAM (700,480) -> GR00T (900,320)
  const pathBot = "M 100 320 C 200 320, 200 480, 300 480 L 700 480 C 800 480, 800 320, 900 320";

  return (
    <div className="w-full h-screen bg-slate-950 flex flex-col items-center justify-center p-4 overflow-hidden relative font-sans">
      
      {/* 科技感背景網格 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* 樣式與動畫定義 */}
      <style>{`
        @keyframes flowTop {
          from { stroke-dashoffset: 1000; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes flowBot {
          from { stroke-dashoffset: 1000; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 15px rgba(34, 211, 238, 0.2); }
          50% { box-shadow: 0 0 40px rgba(34, 211, 238, 0.6); }
        }
        .animate-line-top {
          stroke-dasharray: 8 16;
          animation: flowTop 20s linear infinite;
        }
        .animate-line-bot {
          stroke-dasharray: 8 16;
          animation: flowBot 20s linear infinite;
        }
        .node-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .node-card:hover {
          transform: scale(1.1) translateY(-5px);
          box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.6);
          z-index: 50;
        }
        .node-end {
          animation: pulseGlow 3s infinite;
        }
      `}</style>

      {/* 標題區 */}
      <div className="absolute top-12 text-center z-10">
         <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 tracking-wider">
           雙路徑 AI 執行架構
         </h1>
         <p className="text-slate-400 mt-2 text-sm tracking-[0.2em] uppercase font-medium">Dual-Path Processing Flow</p>
      </div>

      {/* 流程圖主體 (SVG + HTML) */}
      <div className="w-full max-w-6xl relative aspect-[16/9] min-h-[600px] border border-white/10 rounded-3xl bg-slate-900/40 backdrop-blur-md shadow-2xl overflow-hidden z-10 mt-10">
        <svg viewBox="0 0 1000 600" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <defs>
            {/* 發光濾鏡 */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* 底層軌道線條 */}
        <path d={pathTop1} stroke="#1e293b" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d={pathTop2} stroke="#1e293b" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d={pathBot} stroke="#1e293b" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />

        {/* 動態虛線 */}
        <path d={pathTop1} stroke="#10b981" strokeWidth="3" fill="none" className="animate-line-top opacity-70" />
        <path d={pathTop2} stroke="#14b8a6" strokeWidth="3" fill="none" className="animate-line-top opacity-70" />
        <path d={pathBot} stroke="#c084fc" strokeWidth="3" fill="none" className="animate-line-bot opacity-70" />

        {/* 動態粒子 - Training Pipeline (MimicGen) */}
        <circle r="6" fill="#34d399" filter="url(#glow)">
          <animateMotion dur="4s" repeatCount="indefinite" path={pathTop1} />
        </circle>
        <circle r="6" fill="#34d399" filter="url(#glow)">
          <animateMotion dur="4s" begin="2s" repeatCount="indefinite" path={pathTop1} />
        </circle>

        {/* 動態粒子 - Training Pipeline (Real Teleoperation) */}
        <circle r="6" fill="#2dd4bf" filter="url(#glow)">
          <animateMotion dur="4.5s" repeatCount="indefinite" path={pathTop2} />
        </circle>
        <circle r="6" fill="#2dd4bf" filter="url(#glow)">
          <animateMotion dur="4.5s" begin="2.25s" repeatCount="indefinite" path={pathTop2} />
        </circle>

        {/* 動態粒子 - Inference Pipeline */}
        <circle r="6" fill="#e879f9" filter="url(#glow)">
          <animateMotion dur="6s" repeatCount="indefinite" path={pathBot} />
        </circle>
        <circle r="6" fill="#e879f9" filter="url(#glow)">
          <animateMotion dur="6s" begin="2s" repeatCount="indefinite" path={pathBot} />
        </circle>
        <circle r="6" fill="#e879f9" filter="url(#glow)">
          <animateMotion dur="6s" begin="4s" repeatCount="indefinite" path={pathBot} />
        </circle>

        {/* 路徑標籤 */}
        <text x="180" y="120" fill="#34d399" className="text-sm font-bold tracking-widest opacity-90" filter="url(#glow)">TRAINING PIPELINE</text>
        <text x="160" y="440" fill="#c084fc" className="text-sm font-bold tracking-widest opacity-90" filter="url(#glow)">INFERENCE PIPELINE</text>

        {/* 渲染節點 (利用 foreignObject 將 HTML 嵌入 SVG) */}
        <Node x={100} y={320} icon={User} title="User" color="text-blue-400" borderColor="border-blue-500/40" bgColor="bg-blue-950/60" />
        
        <Node x={500} y={80} icon={Bot} title="MimicGen" color="text-emerald-400" borderColor="border-emerald-500/40" bgColor="bg-emerald-950/60" />
        <Node x={500} y={200} icon={Gamepad2} title="Real Teleop" color="text-teal-400" borderColor="border-teal-500/40" bgColor="bg-teal-950/60" />
        
        <Node x={300} y={480} icon={Brain} title="Cosmos-Reason2" color="text-purple-400" borderColor="border-purple-500/40" bgColor="bg-purple-950/60" />
        <Node x={500} y={480} icon={Eye} title="Supervision" color="text-fuchsia-400" borderColor="border-fuchsia-500/40" bgColor="bg-fuchsia-950/60" />
        <Node x={700} y={480} icon={Map} title="SLAM + Navigation" color="text-pink-400" borderColor="border-pink-500/40" bgColor="bg-pink-950/60" />
        
        <Node x={900} y={320} icon={Cpu} title="GR00T N1.6" color="text-cyan-300" borderColor="border-cyan-400/60" bgColor="bg-cyan-950/70" isEnd={true} />
      </svg>
    </div>
  </div>
  );
}

// 可重複使用的節點元件
function Node({ x, y, icon: Icon, title, color, borderColor, bgColor, isEnd }) {
  return (
    // 使用較大的寬高確保 hover 動畫不會被裁切
    <foreignObject x={x - 100} y={y - 60} width={200} height={120}>
      <div className="w-full h-full flex items-center justify-center p-2 cursor-pointer">
        <div className={`w-[140px] h-[72px] flex flex-col items-center justify-center p-2 rounded-2xl border ${borderColor} ${bgColor} backdrop-blur-xl node-card shadow-lg relative ${isEnd ? 'node-end ring-2 ring-cyan-400' : ''}`}>
           {/* 頂部光澤效果 */}
           <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-2xl pointer-events-none"></div>
           
           <Icon className={`w-6 h-6 mb-1.5 ${color}`} strokeWidth={2.5} />
           <span className="text-[11px] font-bold text-slate-100 text-center uppercase tracking-wide leading-tight">
             {title}
           </span>
        </div>
      </div>
    </foreignObject>
  );
}