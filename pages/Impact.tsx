import React, { useEffect, useState, useRef } from 'react';
import { PageHero } from '../components/PageHero';
import { FadeIn } from '../components/FadeIn';
import { IMPACT_STATS } from '../constants';
import { Download, BarChart3, Target, CheckCircle2 } from 'lucide-react';
import { animate, useMotionValue, useTransform, motion, useInView } from 'framer-motion';

const AnimatedNumber = ({ value }: { value: string }) => {
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [numericValue, isInView]);

  useEffect(() => {
    return rounded.onChange((v) => setDisplayValue(v));
  }, [rounded]);

  return <span ref={ref}>{displayValue}{value.includes('%') ? '%' : '+'}</span>;
};

export const Impact: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHero 
        badge="Accountability"
        title="Measured Growth"
        subtitle="Beyond numbers, we track the qualitative transformation of the children in our care."
      />

      <div className="container mx-auto px-4 sm:px-6 pb-32">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 -mt-20 relative z-10 mb-32">
          {IMPACT_STATS.map((stat, idx) => (
            <FadeIn key={stat.label} delay={idx * 0.1} className="bg-gray-900 p-12 rounded-[2.5rem] text-center text-white shadow-2xl shadow-gray-400">
              <span className="text-6xl font-bold text-logo-red block mb-6 tracking-tighter">
                <AnimatedNumber value={stat.value} />
              </span>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.4em] mb-4">{stat.label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{stat.description}</p>
            </FadeIn>
          ))}
        </div>

        {/* Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
          <FadeIn direction="right">
            <h2 className="text-xs font-bold text-logo-red uppercase tracking-widest mb-6">Our Philosophy</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-gray-900 mb-10 leading-tight tracking-tight">Outcome-focused transformation</h3>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              At Agranee Foundation, impact isn't just about reaching more children. It's about depth. We focus on providing high-quality, long-term interventions that break multi-generational poverty.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "100% Literacy rate",
                "Emotional stability",
                "Vocational readiness",
                "Regional leadership"
              ].map(point => (
                <div key={point} className="flex items-center text-gray-900 font-bold text-sm bg-gray-50 px-6 py-4 rounded-2xl">
                  <CheckCircle2 className="w-5 h-5 text-logo-red mr-3" />
                  {point}
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn direction="left" className="bg-red-50 p-12 lg:p-20 rounded-[3rem] relative overflow-hidden group">
             <BarChart3 className="absolute -top-10 -right-10 w-64 h-64 text-red-100 group-hover:rotate-12 transition-transform duration-1000" />
             <h3 className="text-3xl font-bold text-gray-900 mb-10 relative z-10">Quarterly Milestones</h3>
             <div className="space-y-12 relative z-10">
               {[
                 { year: '2024', highlight: 'Transitioned 8 youth to higher education centers in Delhi NCR.' },
                 { year: '2023', highlight: 'Upgraded all residential libraries with digital learning tools.' },
                 { year: '2022', highlight: 'Recognized for compliance and transparency by regional authorities.' }
               ].map(item => (
                 <div key={item.year} className="group/item">
                    <span className="text-logo-red font-bold text-sm block mb-2 tracking-widest">{item.year}</span>
                    <p className="text-gray-600 text-lg leading-relaxed">{item.highlight}</p>
                 </div>
               ))}
             </div>
          </FadeIn>
        </div>

        {/* Reports */}
        <FadeIn className="bg-gray-900 p-16 lg:p-24 rounded-[3.5rem] text-center text-white overflow-hidden relative">
           <div className="absolute inset-0 opacity-10 pointer-events-none">
              <img src="https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=1470&auto=format&fit=crop" className="w-full h-full object-cover grayscale" />
           </div>
          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-8">Transparency in action</h3>
            <p className="text-gray-400 mb-12 max-w-xl mx-auto text-lg">
              Download our verified financial and impact reports. We believe in open-book NGO management.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="flex items-center h-14 px-10 bg-white text-gray-900 rounded-2xl font-bold text-[11px] uppercase tracking-widest hover:scale-105 transition-transform group">
                <Download className="w-5 h-5 mr-3 text-logo-red" />
                Impact Report 23-24
              </button>
              <button className="flex items-center h-14 px-10 bg-transparent border-2 border-gray-700 text-white rounded-2xl font-bold text-[11px] uppercase tracking-widest hover:border-white transition-colors">
                <Download className="w-5 h-5 mr-3" />
                Financial Audit 2023
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};