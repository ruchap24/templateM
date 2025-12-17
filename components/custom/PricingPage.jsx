"use client";
import React, { useState } from 'react';
import { Check, Flame } from 'lucide-react';

const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('standard');

  const plans = [
    {
      id: "basic",
      name: "Basic",
      desc: "Introduced customizable assessment questions, anti-cheating.",
      price: "Free",
      buttonText: "Sign Up",
    },
    {
      id: "standard",
      name: "Standard",
      desc: "More attempts, questions, interview transcription.",
      price: isYearly ? "$80" : "$100",
      buttonText: "Try Now",
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      desc: "Starter/Business features, more attempts, lower fees, AI integration, interview transcript.",
      price: isYearly ? "$400" : "$500",
      buttonText: "Try Now",
    }
  ];

  const features = [
    "Included All Basic",
    "24/7 Customer Support",
    "Advanced Security & Encryption",
    "Custom Branding Options",
    "Cloud-Based Access Anywhere",
    "Real-Time Collaboration",
    "Data Analytics & Insights"
  ];

  return (
    <div className="relative min-h-screen bg-slate-50 font-sans overflow-hidden">
      <section className="relative z-10 pt-16 pb-12 px-4 text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-white border border-slate-200 rounded-full shadow-sm">
          Pricing Plans
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Smart, Scalable Pricing for <span className="text-blue-600">Every Business</span>
        </h1>
        <p className="max-w-2xl mx-auto text-slate-600 text-lg leading-relaxed">
          Whether you're a startup or an enterprise, our flexible plans evolve with your needs, 
          ensuring you always have the right tools to succeed.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="bg-slate-200/50 p-1 rounded-full flex items-center">
            <button 
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 text-sm font-semibold transition-all duration-300 rounded-full ${!isYearly ? 'bg-white shadow-md text-slate-900' : 'text-slate-500'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 text-sm font-semibold transition-all duration-300 rounded-full ${isYearly ? 'bg-white shadow-md text-slate-900' : 'text-slate-500'}`}
            >
              Yearly
              <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">
            Save 20%
          </span>
            </button>
          </div>
        </div>
      </section>
      <main className="relative z-10 max-w-6xl mx-auto px-4 pb-32">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            {plans.map((plan) => {
              const isActive = selectedPlan === plan.id;
              return (
                <div 
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`relative flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl transition-all duration-300 border-2 cursor-pointer
                    ${isActive 
                      ? 'bg-blue-600 border-blue-600 text-white shadow-xl scale-[1.01]' 
                      : 'bg-white border-slate-100 text-slate-900 hover:border-blue-200'
                    }`}
                >
                  <div className="flex-1 md:pr-8">
                    <div className="flex items-center gap-3 mb-1">
                      <div 
                        className={`w-5 h-5 rounded flex items-center justify-center border transition-colors
                          ${isActive ? 'bg-white border-white' : 'bg-slate-50 border-slate-300'}`}
                      >
                        {isActive && <Check size={14} className="text-blue-600 stroke-[4px]" />}
                      </div>
                      
                      <h3 className="text-xl font-bold">{plan.name}</h3>
                      {plan.popular && (
                        <span className={`flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded shadow-sm
                          ${isActive ? 'bg-white text-blue-600' : 'bg-orange-100 text-orange-600'}`}>
                          <Flame size={12} fill="currentColor" /> Popular
                        </span>
                      )}
                    </div>
                    <p className={`text-sm leading-snug ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>
                      {plan.desc}
                    </p>
                  </div>

                  <div className="mt-4 md:mt-0 flex flex-col items-end gap-2">
                    <div className="text-3xl font-bold">
                      {plan.price}
                      {plan.price !== "Free" && (
                        <span className={`text-sm font-normal ml-1 ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                          /month
                        </span>
                      )}
                    </div>
                    <button className={`w-full md:w-32 py-2.5 rounded-lg font-bold transition-all active:scale-95
                      ${isActive 
                        ? 'bg-white text-blue-600 shadow-lg' 
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}>
                      {plan.buttonText}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-5 h-full">
            <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-xl h-full">
              <ul className="space-y-6">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center justify-between group">
                    <span className="text-slate-700 font-semibold">{feature}</span>
                    <div className="bg-blue-600 rounded-full p-1 shadow-md transition-transform group-hover:rotate-12">
                      <Check size={16} className="text-white stroke-[3px]" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      <div className="absolute bottom-0 left-0 w-full flex items-end justify-center gap-1 px-4 opacity-20 pointer-events-none">
        {[...Array(200)].map((_, i) => (
          <div 
            key={i} 
            className="w-1.5 bg-slate-400 rounded-t-full"
            style={{ 
              height: `${Math.random() * 500 + 20}px`,
              transition: 'height 1s ease-in-out'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingPage;