import React from 'react';
import { PageHero } from '../components/PageHero';
import { FadeIn } from '../components/FadeIn';
import { PROGRAMS } from '../constants';
import { Shield, BookOpen, HeartPulse, GraduationCap } from 'lucide-react';

const WORK_IMAGES = [
  "./images/care-protection.avif",
  "./images/eductaion-learning.jpg",
  "./images/health-nutrition.avif",
  "./images/aftercare.avif",
];

const EXTENDED_WORK = [
  ...PROGRAMS,
  {
    title: 'Aftercare (18+)',
    description: 'Supporting young adults as they transition out of our care into independent lives.',
    icon: 'GraduationCap',
    details: 'Our commitment extends beyond legal adulthood. We provide job placement and psychological support until stability is achieved.'
  }
];

const IconMap: Record<string, any> = {
  Shield: Shield,
  BookOpen: BookOpen,
  HeartPulse: HeartPulse,
  GraduationCap: GraduationCap,
};

export const Work: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHero 
        badge="Our Initiatives"
        title="Structured Support"
        subtitle="We follow a systematic model of care that moves from immediate rescue to long-term independence."
      />

      <div className="container mx-auto px-4 sm:px-6 pb-32">
        <div className="space-y-40 mt-20">
          {EXTENDED_WORK.map((item, idx) => {
            const Icon = IconMap[item.icon];
            const isEven = idx % 2 === 0;
            return (
              <FadeIn key={item.title}>
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-32`}>
                  <div className="lg:w-1/2 relative">
                    <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden grayscale border-8 border-gray-50 shadow-2xl hover:grayscale-0 transition-all duration-500">
                      <img 
                        src={WORK_IMAGES[idx] || WORK_IMAGES[0]} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={`absolute -z-10 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-50 ${isEven ? '-top-10 -left-10' : '-bottom-10 -right-10'}`} />
                  </div>
                  <div className="lg:w-1/2">
                    <div className="w-20 h-20 bg-gray-900 rounded-3xl flex items-center justify-center mb-10 text-white transform -rotate-3">
                      <Icon className="w-10 h-10" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">{item.title}</h2>
                    <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="p-8 bg-gray-50 rounded-3xl border-l-8 border-logo-red">
                      <p className="text-gray-900 font-medium italic">
                        "{item.details}"
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </div>
  );
};