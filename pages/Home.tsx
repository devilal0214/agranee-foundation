import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FadeIn } from '../components/FadeIn';
import { Button } from '../components/Button';
import { PROGRAMS, IMPACT_STATS, ORG_INFO } from '../constants';
import { Shield, BookOpen, HeartPulse, ArrowRight, Heart, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const IconMap: Record<string, any> = {
  Shield: Shield,
  BookOpen: BookOpen,
  HeartPulse: HeartPulse,
};

export const Home: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const blobRef = useRef<SVGSVGElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (headlineRef.current) {
      const text = headlineRef.current.innerText;
      headlineRef.current.innerHTML = text.split(' ').map(word => 
        `<span class="inline-block overflow-hidden py-1"><span class="inline-block translate-y-full opacity-0 reveal-word">${word}&nbsp;</span></span>`
      ).join('');

      gsap.to('.reveal-word', {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.08,
        ease: "power4.out",
        delay: 0.4
      });
    }

    if (blobRef.current && sectionRef.current) {
      gsap.to(blobRef.current, {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }

    gsap.to('.particle', {
      y: "random(-20, 20)",
      x: "random(-20, 20)",
      duration: "random(2, 4)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="pt-0 overflow-x-hidden">
      <section ref={sectionRef} className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 lg:pt-32 overflow-hidden bg-[#fafafa]">
        <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <FadeIn delay={0.1} direction="down">
              <div className="inline-flex items-center space-x-3 bg-red-50 text-logo-red px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-10 border border-red-100 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Impact in Delhi NCR</span>
              </div>
            </FadeIn>
            
            <h1 ref={headlineRef} className="text-4xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-gray-900 leading-[1.05] tracking-tight mb-10">
              Every child deserves a <br/>safe home, steady <br/>learning, and a future.
            </h1>
            
            <FadeIn delay={1.4} className="max-w-2xl mb-10">
              <p className="text-lg lg:text-xl text-gray-500 leading-relaxed font-medium">
                Agranee Foundation provides long-term stability and holistic care for orphan and vulnerable children in Delhi NCR.
              </p>
            </FadeIn>
            
            <FadeIn delay={1.6} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button to="/donate" size="lg">
                Donate Now
              </Button>
              <Button to="/our-work" variant="outline" size="lg" className="hover:text-white transition-colors">
                Our Work
              </Button>
            </FadeIn>
          </div>
        </div>

        <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[60%] h-full z-0 hidden lg:block opacity-30 pointer-events-none overflow-hidden">
           <img 
             src="/images/home-banner.png" 
             alt="Happy Indian children in group"
             className="w-full h-full object-cover grayscale opacity-60 mix-blend-multiply"
           />
        </div>
      </section>

      <section className="py-24 lg:py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <FadeIn>
                <h2 className="text-[11px] font-bold text-logo-red uppercase tracking-[0.4em] mb-4">Core Initiatives</h2>
                <h3 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">We build a comprehensive support system for every child.</h3>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <Button to="/our-work" variant="outline" size="lg" className="hover:text-white">View All Programs</Button>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROGRAMS.map((program, idx) => {
              const Icon = IconMap[program.icon];
              return (
                <FadeIn key={program.title} delay={0.1 * idx}>
                  <div className="group p-10 bg-gray-50 rounded-[2.5rem] hover:bg-white border border-transparent hover:border-gray-100 transition-all duration-500 h-full flex flex-col shadow-sm hover:shadow-2xl hover:shadow-gray-200/50">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 text-logo-red shadow-sm group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">{program.title}</h4>
                    <p className="text-gray-500 leading-relaxed mb-8 flex-grow text-sm lg:text-base">{program.description}</p>
                    <div className="h-px w-12 bg-gray-200 mb-6 group-hover:w-full transition-all duration-500" />
                    <Link to="/our-work" className="inline-flex items-center text-logo-red font-bold uppercase tracking-widest text-[10px] group/link">
                      Learn More <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover/link:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {IMPACT_STATS.map((stat, idx) => (
              <FadeIn key={stat.label} delay={idx * 0.1} className="flex flex-col items-center text-center">
                <p className="text-6xl font-bold text-gray-900 mb-4 tracking-tighter">{stat.value}{stat.label.includes('Enrolment') ? '%' : '+'}</p>
                <div className="h-1 w-8 bg-logo-red mb-6 rounded-full" />
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-[0.4em] mb-3">{stat.label}</h4>
                <p className="text-gray-500 text-sm max-w-[200px] leading-relaxed">{stat.description}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <FadeIn direction="right" className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden grayscale border-8 border-gray-50 shadow-2xl">
                <img 
                  src="/images/serving-heart.jpg" 
                  alt="Group of Indian children in classroom" 
                  className="w-full h-full object-cover transition-transform duration-[3s] hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gray-900 text-white p-8 rounded-3xl shadow-xl hidden sm:block">
                <p className="text-3xl font-bold text-logo-red">12+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Centers in Delhi NCR</p>
              </div>
            </FadeIn>
            
            <div className="order-1 lg:order-2">
              <FadeIn direction="left">
                <h2 className="text-logo-red font-bold uppercase tracking-[0.4em] text-[11px] mb-8">Delhi NCR focus</h2>
                <h3 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">Serving the heart of India.</h3>
                <p className="text-gray-500 text-lg mb-10 leading-relaxed font-medium">
                  The Delhi National Capital Region presents unique challenges. Rapid urban growth often hides the most vulnerable. Agranee Foundation bridges the gap between urban progress and child welfare.
                </p>
                <div className="space-y-6 mb-12">
                   {["24/7 Protection & Care", "High-quality Schooling", "Nutritional Security"].map(item => (
                     <div key={item} className="flex items-center space-x-4">
                       <div className="w-2 h-2 bg-logo-red rounded-full" />
                       <span className="font-bold text-gray-900 text-sm uppercase tracking-widest">{item}</span>
                     </div>
                   ))}
                </div>
                <Button to="/impact" size="md">
                  View Our Impact
                </Button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#111] text-white overflow-hidden relative">
        <div className="container mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <Heart className="w-12 h-12 text-logo-red mx-auto mb-10 opacity-50" />
            <h4 className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-4xl mx-auto mb-12 italic text-gray-300">
              "Our goal is not just survival, but thriving. We want every child to become an independent, compassionate citizen."
            </h4>
            <div className="w-16 h-px bg-gray-800 mx-auto mb-6" />
            <p className="text-logo-red font-bold uppercase tracking-[0.3em] text-xs">— {ORG_INFO.head}, Head of Foundation</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <h3 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight max-w-3xl mx-auto">Make a lasting difference today.</h3>
            <p className="text-gray-500 mb-12 max-w-xl mx-auto text-lg">
              Your contribution goes directly towards meals, schooling, and a safe home for a child in need in Delhi NCR.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button to="/donate" size="lg">
                Support a Child Today
              </Button>
              <Link to="/transparency" className="text-gray-400 font-bold uppercase tracking-widest text-[11px] hover:text-gray-900 transition-colors">
                View Transparency Reports
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};