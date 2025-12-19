"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Check, Flame, MoveRight, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, Instagram, Hexagon } from 'lucide-react';

const Footer = () => {
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

  const pricingFeatures = [
    "Included All Basic",
    "24/7 Customer Support",
    "Advanced Security & Encryption",
    "Custom Branding Options",
    "Cloud-Based Access Anywhere",
    "Real-Time Collaboration",
    "Data Analytics & Insights"
  ];

  return (
    <div className="relative w-full bg-white font-sans overflow-hidden border-t border-slate-100">
      <section className="relative z-10 py-24 px-4 text-center">
        <p className="text-sm font-medium text-slate-500 mb-6 tracking-wide uppercase">Start Creating Today</p>
        <h2 className="text-4xl md:text-6xl font-bold text-purple-700 max-w-4xl mx-auto leading-[1.1] mb-8 bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 bg-clip-text text-transparent">
          Ready to Build <br /> Professional Email Templates?
        </h2>
        <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Join thousands of marketers and designers creating beautiful, responsive email templates. 
          Start building your next campaign today with our powerful AI-driven design tools.
        </p>
        <Link href={'/dashboard'}>
        <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white rounded-full font-semibold text-lg shadow-lg hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50">
          Get Started <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        </Link>
      </section>

      <footer className="relative z-10 w-full px-6 md:px-20 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16 border-t border-slate-200">
            <div className="flex items-center gap-2 self-start">
            <Image src={'/img.png'} alt="Logo" width={140} height={140} />
            </div>
            <div>
              <h4 className="font-bold text-purple-700 mb-6">Quick Links</h4>
              <ul className="space-y-4 text-slate-500 font-medium">
                {['Home', 'Templates', 'Features', 'Pricing', 'Blog'].map(link => <li key={link} className="hover:text-purple-600 cursor-pointer transition-colors">{link}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-purple-400 mb-6">Support</h4>
              <ul className="space-y-4 text-slate-500 font-medium">
                {['Help Center', 'Getting Started', 'Contact Support', 'Community Forums', 'Documentation'].map(link => <li key={link} className="hover:text-purple-600 cursor-pointer transition-colors">{link}</li>)}
              </ul>
            </div>
            <div className="lg:col-span-1 text-slate-500">
              <h4 className="font-bold text-purple-400 mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-slate-400" /> contact@company.com</li>
                <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-slate-400" /> (414) 687 - 5892</li>
                <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-slate-400 mt-1" /> 794 McAllister St, SF</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-purple-400 mb-6">Social</h4>
              <div className="flex gap-3">
                {[Facebook, Twitter, Linkedin, Youtube, Instagram].map((Icon, idx) => (
                  <div key={idx} className="w-9 h-9 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white hover:from-purple-700 hover:to-purple-800 hover:-translate-y-1 transition-all cursor-pointer shadow-md hover:shadow-lg">
                    <Icon className="w-4 h-4" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center pt-4 border-t border-slate-100">
            <p className="text-slate-400 text-sm font-medium">© 2024 EmailBuilder. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <div className="absolute bottom-0 left-0 w-full flex items-end justify-center gap-1 px-3 opacity-20 pointer-events-none">
        {[...Array(200)].map((_, i) => (
          <div 
            key={i} 
            className="w-1.5 bg-slate-400 rounded-t-full"
            style={{ 
              height: `${Math.random() * 300 + 20}px`,
              transition: 'height 1s ease-in-out'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;