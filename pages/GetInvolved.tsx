import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { Button } from '../components/Button';
import { Users, Building2, Gift } from 'lucide-react';

export const GetInvolved: React.FC = () => {
  const opportunities = [
    {
      title: "Individual Volunteering",
      desc: "Mentor a child, help with homework, or share a skill. Our centers in Delhi NCR are always looking for compassionate role models.",
      icon: Users,
      cta: "Apply to Volunteer"
    },
    {
      title: "Corporate CSR Partnerships",
      desc: "Align your corporate social responsibility goals with our mission. We offer structured CSR projects with clear reporting and impact measurement.",
      icon: Building2,
      cta: "Contact Partnership Team"
    },
    {
      title: "In-kind Support",
      desc: "Books, clothing, electronics for learning, or nutritional supplies. Your physical contributions directly impact the quality of life for our children.",
      icon: Gift,
      cta: "View Wishlist"
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6">
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Get Involved</h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            There are many ways to support Agranee Foundation beyond financial donations. Your time, talent, and voice help build a stronger ecosystem for our children.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {opportunities.map((item, idx) => (
            <FadeIn key={item.title} delay={idx * 0.1}>
              <div className="bg-white border border-gray-100 p-8 lg:p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 flex flex-col h-full group">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-8 text-logo-red group-hover:scale-110 group-hover:-rotate-3 transition-transform">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-500 mb-12 flex-grow leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-auto pt-4">
                  <Button variant="outline" to="/contact" size="md" className="w-full">
                    {item.cta}
                  </Button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="bg-gray-900 text-white p-12 lg:p-20 rounded-[3.5rem] relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Host a Fundraiser</h2>
            <p className="text-gray-300 mb-12 text-xl leading-relaxed">
              Celebrate your birthday, anniversary, or a corporate milestone by raising funds for Agranee Foundation. We provide you with the tools and stories to inspire your network.
            </p>
            <Button to="/contact" variant="white" size="lg">
              Start a Fundraiser
            </Button>
          </div>
          <div className="absolute right-0 top-0 h-full w-2/5 opacity-40 hidden lg:block">
            <img 
              src="./images/home-banner.png" 
              alt="Group of Indian children playing" 
              className="h-full w-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-gray-900 via-gray-900/60 to-transparent" />
          </div>
        </FadeIn>
      </div>
    </div>
  );
};