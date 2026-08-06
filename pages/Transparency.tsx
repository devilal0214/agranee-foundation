
import React, { useState } from 'react';
import { FadeIn } from '../components/FadeIn';
import { FileText, ShieldCheck, Lock, Scale, X } from 'lucide-react';
import { ORG_INFO } from '../constants';

export const Transparency: React.FC = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6">
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Transparency & Governance</h1>
          <p className="text-lg text-gray-600">
            Accountability is at the core of our operations. We maintain strict compliance standards to ensure every rupee is accounted for and every child is protected.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <FadeIn className="bg-white p-8 rounded-2xl border border-gray-200">
            <div className="flex items-center mb-6">
              <ShieldCheck className="w-6 h-6 text-logo-red mr-3" />
              <h3 className="text-xl font-bold text-gray-900 uppercase text-xs tracking-widest">Compliance</h3>
            </div>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="pb-3 border-b border-gray-50 flex justify-between">
                <span>Registration Status</span>
                <span className="font-bold text-gray-900">Section 8 Registered</span>
              </li>
              <li className="pb-3 border-b border-gray-50 flex justify-between">
                <span>Tax Exemption</span>
                <span className="font-bold text-gray-900">80G (Income Tax Act)</span>
              </li>
              <li className="pb-3 border-b border-gray-50 flex justify-between">
                <span>NITI Aayog Darpan</span>
                <span className="font-bold text-gray-900">Registered</span>
              </li>
              <li className="pb-3 border-b border-gray-50 flex justify-between">
                <span>Audit Status</span>
                <span className="font-bold text-gray-900">Annually Audited</span>
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.1} className="bg-white p-8 rounded-2xl border border-gray-200">
            <div className="flex items-center mb-6">
              <Lock className="w-6 h-6 text-logo-red mr-3" />
              <h3 className="text-xl font-bold text-gray-900 uppercase text-xs tracking-widest">Child Privacy</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              We strictly adhere to Juvenile Justice Act guidelines. Children's real names are changed in public communications and their exact home locations are never disclosed.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              We do not share identifiable photographs of children without explicit consent and for dignified storytelling purposes only.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-white p-8 rounded-2xl border border-gray-200">
            <div className="flex items-center mb-6">
              <Scale className="w-6 h-6 text-logo-red mr-3" />
              <h3 className="text-xl font-bold text-gray-900 uppercase text-xs tracking-widest">Accountability</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Agranee Foundation is governed by an independent Board of Directors. All administrative expenses are kept under 15% to ensure maximum impact for the children.
            </p>
            <a href="#" className="text-logo-red text-sm font-bold flex items-center hover:underline">
              View Board of Directors
            </a>
          </FadeIn>
        </div>


          {/* two images block center aligned */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          <FadeIn delay={0.1} className="bg-white p-8 rounded-2xl border border-gray-200">
             <div 
               className="aspect-[3/2] rounded-[2rem] overflow-hidden grayscale border-8 border-gray-50 shadow-2xl bg-gray-100 cursor-pointer group"
               onClick={() => setLightboxImage('/images/certificate.jpg')}
             >
                <img 
                  src="/images/certificate.jpg" 
                  alt="Registration Certificate" 
                  className="w-full h-full object-contain transition-transform duration-[3s] group-hover:scale-105"
                />
              </div>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-white p-8 rounded-2xl border border-gray-200">
            <div 
              className="aspect-[3/2] rounded-[2rem] overflow-hidden grayscale border-8 border-gray-50 shadow-2xl bg-gray-100 cursor-pointer group"
              onClick={() => setLightboxImage('/images/trust.jpeg')}
            >
                <img 
                  src="/images/trust.jpeg" 
                  alt="Trust Document" 
                  className="w-full h-full object-contain transition-transform duration-[3s] group-hover:scale-105"
                />
              </div>
          </FadeIn>

        </div>
      {/* two images block center aligned */}

        <FadeIn className="bg-white p-12 rounded-3xl border border-gray-100 overflow-hidden relative">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Financial Reports</h3>
            <div className="space-y-4">
              {[
                "Financial Statement 2023-24 (PDF)",
                "Audit Report 2022-23 (PDF)",
                "ITR Acknowledgement 2023 (PDF)",
                "Trust Deed & Registration (PDF)"
              ].map(file => (
                <div key={file} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg group hover:bg-gray-100 transition-colors">
                  <div className="flex items-center">
                    <FileText className="w-5 h-5 text-gray-400 mr-3" />
                    <span className="text-sm font-medium text-gray-700">{file}</span>
                  </div>
                  <button className="text-logo-red text-xs font-bold uppercase tracking-widest group-hover:underline">Download</button>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[9999] bg-black bg-opacity-90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-[10000]"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-10 h-10" />
          </button>
          <img 
            src={lightboxImage} 
            alt="Certificate" 
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};
