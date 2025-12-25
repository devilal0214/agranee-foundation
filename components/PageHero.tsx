
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FadeIn } from './FadeIn';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, badge }) => {
  const blob1Ref = useRef<SVGSVGElement>(null);
  const blob2Ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    gsap.to(blob1Ref.current, {
      y: 20,
      x: 10,
      rotate: 5,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    gsap.to(blob2Ref.current, {
      y: -20,
      x: -10,
      rotate: -5,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.5
    });
  }, []);

  return (
    <section className="relative pt-44 pb-20 overflow-hidden bg-[#fafafa]">
      {/* Decorative Layer */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
        <svg ref={blob1Ref} className="absolute -top-10 -left-10 w-96 h-96 text-red-50" viewBox="0 0 200 200">
          <path fill="currentColor" d="M44.7,-76.4C58.2,-69.2,70.1,-58.5,77.7,-45.4C85.4,-32.4,88.7,-16.2,87.6,-0.6C86.5,15,81,30.1,72.4,43.2C63.8,56.3,52.1,67.4,38.4,74.5C24.7,81.6,9.1,84.7,-6.4,85.8C-21.9,86.9,-37.2,86,-50.2,79.1C-63.1,72.2,-73.7,59.3,-80.4,45C-87,30.7,-89.8,15.3,-89.4,0.2C-89,-14.8,-85.4,-29.6,-77.8,-42.6C-70.2,-55.6,-58.6,-66.8,-45.4,-74.2C-32.2,-81.6,-16.1,-85.1,-0.1,-84.9C15.9,-84.7,31.2,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
        <svg ref={blob2Ref} className="absolute -bottom-20 -right-10 w-[30rem] h-[30rem] text-gray-100" viewBox="0 0 200 200">
          <path fill="currentColor" d="M38.1,-65.4C50.3,-58.7,61.9,-50.4,70.8,-39.6C79.7,-28.8,85.9,-15.5,86.6,-1.6C87.3,12.3,82.4,26.7,74.3,39.1C66.2,51.5,54.8,61.8,41.9,68.9C29.1,76,14.5,79.9,-0.6,81C-15.7,82.1,-31.4,80.4,-45,74.1C-58.6,67.8,-70.1,56.9,-77.2,43.9C-84.3,31,-87,15.9,-86.7,1.1C-86.4,-13.7,-83.1,-28.3,-75.4,-41C-67.7,-53.7,-55.6,-64.5,-42.2,-70.5C-28.8,-76.5,-14.4,-77.7,-0.3,-77.2C13.8,-76.7,25.9,-72.1,38.1,-65.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {badge && (
            <FadeIn>
              <span className="inline-block px-3 py-1 bg-red-50 text-logo-red text-[10px] font-bold uppercase tracking-[0.3em] rounded-md mb-6 border border-red-100">
                {badge}
              </span>
            </FadeIn>
          )}
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">
              {title}
            </h1>
          </FadeIn>
          {subtitle && (
            <FadeIn delay={0.2}>
              <p className="text-lg lg:text-xl text-gray-500 max-w-2xl leading-relaxed font-medium">
                {subtitle}
              </p>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
};
