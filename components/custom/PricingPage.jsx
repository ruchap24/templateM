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
      desc: "Perfect for individuals and small teams. Create up to 10 email templates with basic customization options.",
      price: "Free",
      buttonText: "Sign Up",
    },
    {
      id: "standard",
      name: "Standard",
      desc: "Ideal for growing businesses. Unlimited templates, AI-powered design, and advanced customization features.",
      price: isYearly ? "$29" : "$39",
      buttonText: "Try Now",
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      desc: "Complete solution for large teams. Custom integrations, priority support, team collaboration, and advanced analytics.",
      price: isYearly ? "$199" : "$249",
      buttonText: "Contact Sales",
    }
  ];

  const features = [
    "Unlimited Email Templates",
    "AI-Powered Design Tools",
    "24/7 Customer Support",
    "Advanced Security & Encryption",
    "Custom Branding Options",
    "Cloud-Based Access Anywhere",
    "Real-Time Collaboration",
    "Email Analytics & Insights"
  ];

  return (
    <div className="relative min-h-screen bg-slate-50 font-sans overflow-hidden">
      <section className="relative z-10 pt-16 pb-12 px-4 text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-purple-50 border border-purple-200 text-purple-700 rounded-full shadow-sm">
          Pricing Plans
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Smart, Scalable Pricing for <span className="text-purple-700 bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent">Every Business</span>
        </h1>
        <p className="max-w-2xl mx-auto text-slate-600 text-lg leading-relaxed">
          Choose the perfect plan for your email template needs. From startups to enterprises, 
          our flexible pricing scales with your business.
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
              <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">
            Save 20%
          </span>
            </button>
          </div>
        </div>
      </section>
      <main className="relative z-10 max-w-5xl mx-auto px-4 pb-32">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 space-y-4 ">
            {plans.map((plan) => {
              const isActive = selectedPlan === plan.id;
              return (
                <div 
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`relative flex flex-col md:flex-row md:items-center justify-between p-2 rounded-2xl transition-all duration-300 border-2 cursor-pointer
                    ${isActive 
                      ? 'bg-gradient-to-r from-purple-600 to-purple-800 border-purple-900 text-white shadow-xl scale-[1.01]' 
                      : 'bg-white border-slate-100 text-slate-900 hover:border-purple-300 hover:shadow-lg'
                    }`}
                >
                  <div className="flex-1 md:pr-8">
                    <div className="flex items-center gap-3 mb-1">
                      <div 
                        className={`w-5 h-5 rounded flex items-center justify-center border transition-colors
                          ${isActive ? 'bg-white border-white' : 'bg-slate-50 border-slate-300'}`}
                      >
                        {isActive && <Check size={14} className="text-purple-700 stroke-[4px]" />}
                      </div>
                      
                      <h3 className="text-xl font-bold">{plan.name}</h3>
                      {plan.popular && (
                        <span className={`flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded shadow-sm
                          ${isActive ? 'bg-white text-purple-700' : 'bg-purple-100 text-purple-700'}`}>
                          <Flame size={12} fill="currentColor" /> Popular
                        </span>
                      )}
                    </div>
                    <p className={`text-sm leading-snug ${isActive ? 'text-purple-100' : 'text-slate-500'}`}>
                      {plan.desc}
                    </p>
                  </div>

                  <div className="mt-4 md:mt-0 flex flex-col items-end gap-2">
                    <div className="text-3xl font-bold">
                      {plan.price}
                      {plan.price !== "Free" && (
                        <span className={`text-sm font-normal ml-1 ${isActive ? 'text-purple-100' : 'text-slate-400'}`}>
                          /month
                        </span>
                      )}
                    </div>
                    <button className={`w-full md:w-32 py-2.5 rounded-lg font-bold transition-all active:scale-95
                      ${isActive 
                        ? 'bg-white text-purple-700 shadow-lg hover:bg-purple-50' 
                        : 'bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-800 shadow-md hover:shadow-lg'
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
                    <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-full p-1 shadow-md transition-transform group-hover:rotate-12 group-hover:scale-110">
                      <Check size={16} className="text-white stroke-[3px]" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default PricingPage;