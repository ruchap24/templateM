"use client";
import React from 'react';
import { 
  Code2, 
  Layers, 
  Settings, 
  CheckCircle2, 
  Mail, 
  MessageSquare, 
  Triangle, 
  Box, 
  Layout, 
  FileText, 
  Image as ImageIcon,
  MousePointer2,
  Plus
} from 'lucide-react';

const FeatureCard = ({ title, description, children }) => {
  return (
    <div className="group relative bg-white border border-slate-100 rounded-[2.5rem] p-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/10 overflow-hidden flex flex-col h-full">
      <div className="relative h-64 w-full mb-8 bg-slate-50/50 rounded-3xl overflow-hidden flex items-center justify-center border border-slate-50">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(#1e40af 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
        {children}
      </div>
      <div className="mt-auto">
        <h3 className="text-2xl font-bold text-purple-700 mb-3 group-hover:text-purple-800 transition-colors">
          {title}
        </h3>
        <p className="text-slate-500 leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};
const DeveloperGraphic = () => (
  <div className="relative w-full max-w-[400px] bg-[#1e1e1e] rounded-xl shadow-2xl border border-slate-800 overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
    <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-slate-800">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
      </div>
      <span className="text-[10px] text-slate-500 font-mono">template.js</span>
    </div>
    <div className="p-4 font-mono text-[11px] leading-relaxed">
      <div className="flex gap-3"><span className="text-slate-600 italic">1</span><p className="text-blue-400">function <span className="text-yellow-200">parseEmail</span>(f) {'{'}</p></div>
      <div className="flex gap-3"><span className="text-slate-600 italic">2</span><p className="text-pink-400 pl-4">if <span className="text-white">(data.<span className="text-blue-300">isReady</span>) {'{'}</span></p></div>
      <div className="flex gap-3"><span className="text-slate-600 italic">3</span><p className="text-emerald-400 pl-8">const <span className="text-white">html = <span className="text-orange-300">render</span>(f);</span></p></div>
      <div className="flex gap-3"><span className="text-slate-600 italic">4</span><p className="text-slate-500 pl-4">{'}'}</p></div>
      <div className="flex gap-3"><span className="text-slate-600 italic">5</span><p className="text-white">{'}'}</p></div>
    </div>
    <div className="absolute bottom-4 right-4 w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce-subtle">
      <Code2 size={18} />
    </div>
  </div>
);

const ProductGraphic = () => (
  <div className="relative w-full max-w-[300px] flex items-center justify-center">
    <div className="w-32 h-32 bg-white rounded-2xl shadow-xl border border-slate-100 flex flex-col p-3 gap-2 relative z-10">
      <div className="w-full h-12 bg-purple-50 rounded-lg flex items-center justify-center">
        <Layout size={20} className="text-purple-600" />
      </div>
      <div className="space-y-1.5">
        <div className="h-2 w-full bg-slate-100 rounded" />
        <div className="h-2 w-2/3 bg-slate-100 rounded" />
      </div>
      <div className="mt-auto flex justify-between items-center">
        <span className="text-[8px] font-bold text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded">V.2.0</span>
        <Plus size={12} className="text-slate-400" />
      </div>
    </div>
    <div className="absolute -top-4 -left-6 p-3 bg-white rounded-xl shadow-lg border border-slate-50 text-purple-500 -rotate-12 group-hover:-translate-y-2 transition-transform">
      <ImageIcon size={20} />
    </div>
    <div className="absolute -bottom-4 -right-6 p-3 bg-white rounded-xl shadow-lg border border-slate-50 text-purple-500 rotate-12 group-hover:translate-y-2 transition-transform">
      <FileText size={20} />
    </div>
    <div className="absolute top-1/2 -right-12 p-3 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl shadow-lg text-white group-hover:scale-110 transition-transform">
      <MousePointer2 size={18} />
    </div>
  </div>
);

const OperationsGraphic = () => (
  <div className="relative w-full max-w-[320px] h-full flex items-center justify-center">
    <div className="absolute inset-0 flex items-center justify-center opacity-10">
      <div className="w-full h-[1px] bg-purple-600" />
      <div className="h-full w-[1px] bg-purple-600" />
    </div>
    <div className="w-20 h-2  0 bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl shadow-2xl flex items-center justify-center text-white z-10 animate-spin-slow">
      <Settings size={32} />
    </div>

    <div className="absolute top-1/4 left-1/4 w-10 h-10 bg-white rounded-xl shadow-md border border-slate-50 flex items-center justify-center text-red-500 group-hover:-translate-x-2 transition-transform">
      <Mail size={18} /> 
    </div>
    <div className="absolute top-1/4 right-1/4 w-10 h-10 bg-white rounded-xl shadow-md border border-slate-50 flex items-center justify-center text-[#4A154B] group-hover:translate-x-2 transition-transform">
      <MessageSquare size={18} /> 
    </div>
    <div className="absolute bottom-1/4 left-1/4 w-10 h-10 bg-white rounded-xl shadow-md border border-slate-50 flex items-center justify-center text-purple-500 group-hover:-translate-y-2 transition-transform">
      <Triangle size={18} />
    </div>
    <div className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-white rounded-xl shadow-md border border-slate-50 flex items-center justify-center text-[#0061FE] group-hover:translate-y-2 transition-transform">
      <Box size={18} />
    </div>
  </div>
);

const SuccessGraphic = () => (
  <div className="relative w-full max-w-[300px] bg-white rounded-2xl shadow-xl border border-slate-50 p-5 group-hover:scale-105 transition-transform">
    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-50">
      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
      <div className="h-2 w-24 bg-slate-100 rounded" />
    </div>
    <div className="space-y-4">
      {[1, 2].map((i) => (
        <div key={i} className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white shadow-sm overflow-hidden">
            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" className="w-full h-full object-cover" />
          </div>
          <div className="flex-grow space-y-1.5">
            <div className="h-2 w-full bg-slate-50 rounded" />
            <div className={`h-1.5 w-2/3 ${i === 1 ? 'bg-purple-600' : 'bg-purple-200'} rounded`} />
          </div>
          <CheckCircle2 size={16} className="text-purple-600" />
        </div>
      ))}
    </div>
    <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
      ONBOARDING COMPLETE
    </div>
  </div>
);

export default function EmailFeatureSection() {
  return (
    <section className="w-full py-24 px-6 bg-[#F9FBFF]">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Built for teams who create <span className="text-purple-700 bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent">better emails, faster.</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto font-medium">
            Everything you need to design, manage, and scale email templates — without friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <FeatureCard 
            title="Developers"
            description="Build and integrate email templates without reinventing the wheel. Plug into your existing stack and ship production-ready templates with clean, reusable components."
          >
            <DeveloperGraphic />
          </FeatureCard>

          <FeatureCard 
            title="Product & Marketing"
            description="Launch campaigns faster using pre-built, customizable templates. Update layouts, copy, and branding without waiting on engineering cycles."
          >
            <ProductGraphic />
          </FeatureCard>

          <FeatureCard 
            title="Operations"
            description="Manage template versions, approvals, and workflows in one place. Keep emails consistent across teams while reducing manual errors."
          >
            <OperationsGraphic />
          </FeatureCard>

          <FeatureCard 
            title="Customer Success"
            description="Deliver polished onboarding, transactional, and lifecycle emails. Empower teams to update content instantly while maintaining brand quality."
          >
            <SuccessGraphic />
          </FeatureCard>

        </div>
      </div>

      <style jsx global>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
}
