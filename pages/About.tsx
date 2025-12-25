import React from 'react';
import { PageHero } from '../components/PageHero';
import { FadeIn } from '../components/FadeIn';
import { Button } from '../components/Button';
import { ORG_INFO, SUPPORT_ECOSYSTEM } from '../constants';
import { Heart, Target, Users, Shield, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const approaches = [
    {
      title: "Dignity First",
      desc: "Every child is treated with respect, autonomy, and individuality. We focus on strengths, not deficits.",
      icon: Heart
    },
    {
      title: "Long-term Commitment",
      desc: "We don't exit when a child turns 18. We stay as long as needed, supporting transition to independence.",
      icon: Shield
    },
    {
      title: "Holistic Care",
      desc: "Physical, emotional, educational, and social needs are all addressed in an integrated manner.",
      icon: Target
    },
    {
      title: "Community Integration",
      desc: "Children attend regular schools, participate in local activities, and build connections beyond our homes.",
      icon: Users
    }
  ];

  return (
    <div className="bg-white">
      <PageHero 
        badge="About Agranee"
        title="Building Futures with Dignity"
        subtitle="A long-term commitment to every child's growth and independence in Delhi NCR."
      />

      {/* Our Mission */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative group">
                <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
                  <img src="./images/indian-children-classroom.jpg" />
                </div>
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-red-50 rounded-full -z-10 animate-pulse" />
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">Every child deserves the chance to grow up safe, healthy, and empowered.</h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Agranee Foundation provides holistic, long-term care for orphan and vulnerable children in Delhi NCR, supporting them from childhood through independence.
              </p>
              <div className="p-8 bg-gray-50 rounded-3xl border-l-8 border-logo-red">
                <p className="text-gray-900 font-medium italic">
                  "Too many children fall through the gaps when short-term interventions end. We decided to create a sustainable model that walks alongside children for as long as they need us."
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <Sparkles className="w-full h-full text-white" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-2/5">
              <FadeIn>
                <div className="relative">
                  <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden border-8 border-gray-800 shadow-2xl group grayscale hover:grayscale-0 transition-all duration-1000">
                    <img 
                      src="/images/anshu.png" 
                      alt="Professional Representation" 
                      className="w-full h-full object-cover transition-all duration-700"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-logo-red p-8 rounded-3xl shadow-2xl">
                    <p className="text-white font-bold uppercase tracking-widest text-[10px] mb-1">Founder & Director</p>
                    <p className="text-2xl font-bold">{ORG_INFO.head}</p>
                  </div>
                </div>
              </FadeIn>
            </div>
            <div className="lg:w-3/5">
              <FadeIn direction="left">
                <h2 className="text-xs font-bold text-logo-red uppercase tracking-[0.4em] mb-6">Our Leadership</h2>
                <h3 className="text-4xl lg:text-6xl font-bold mb-10 leading-tight">Rooted in dignity and autonomy.</h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  With over 15 years of experience in social sector leadership, Anshu founded Agranee Foundation to create lasting change in the lives of vulnerable children. Her vision is rooted in providing not just survival, but thriving.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Agranee Foundation is an initiative of <strong>{ORG_INFO.initiativeBy}</strong>, bringing together resources, expertise, and commitment to create meaningful social impact.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="container mx-auto px-6 text-center mb-20">
          <FadeIn>
            <h2 className="text-[11px] font-bold text-logo-red uppercase tracking-[0.4em] mb-4">Our Approach</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900">Four pillars of child wellbeing</h3>
          </FadeIn>
        </div>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approaches.map((item, idx) => (
              <FadeIn key={item.title} delay={idx * 0.1}>
                <div className="group h-full p-10 bg-gray-50 rounded-[2.5rem] hover:bg-white border border-transparent hover:border-gray-100 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-gray-200/50">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 text-logo-red shadow-sm group-hover:bg-logo-red group-hover:text-white transition-all duration-500">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Ecosystem */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-4">Our Partner Ecosystem</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">We're grateful to collaborate with organizations that share our commitment to children's wellbeing.</p>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {SUPPORT_ECOSYSTEM.map((partner, idx) => (
              <FadeIn key={partner.name} delay={idx * 0.1} className="flex flex-col items-center p-8 bg-white rounded-3xl border border-gray-100 text-center group hover:border-logo-red transition-all duration-500">
                <div className="w-32 h-32 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 p-4 group-hover:scale-105 transition-transform duration-500 overflow-hidden grayscale hover:grayscale-0">
                  {/* Replace with your actual partner logo images */}
                  <img 
                    src={`./images/partners/${partner.name.toLowerCase().replace(/\s+/g, '-')}.${idx < 2 ? 'webp' : 'svg'}`}
                    alt={`${partner.name} Logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">{partner.name}</h4>
                <p className="text-logo-red font-bold text-[10px] uppercase tracking-widest">{partner.role}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h3 className="text-4xl md:text-6xl font-bold text-gray-900 mb-10">Join Our Mission</h3>
            <p className="text-gray-500 mb-12 max-w-xl mx-auto text-lg leading-relaxed">
              Be part of creating lasting change in children's lives. Your support makes continuity of care possible.
            </p>
            <Button to="/donate" size="lg">
              Support Our Work
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};