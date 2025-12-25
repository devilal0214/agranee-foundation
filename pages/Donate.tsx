
import React, { useState } from 'react';
import { PageHero } from '../components/PageHero';
import { FadeIn } from '../components/FadeIn';
import { Button } from '../components/Button';
import { Check, ShieldCheck, Heart } from 'lucide-react';

const AMOUNTS = [1000, 2500, 5000, 10000];

export const Donate: React.FC = () => {
  const [type, setType] = useState<'one-time' | 'monthly'>('one-time');
  const [amount, setAmount] = useState<number | 'custom'>(2500);
  const [customValue, setCustomValue] = useState('');

  return (
    <div className="bg-white min-h-screen">
      <PageHero 
        badge="Give Stability"
        title="Fueling Change"
        subtitle="Every rupee brings a child in Delhi NCR closer to a life of dignity and security."
      />

      <div className="container mx-auto px-4 sm:px-6 -mt-16 pb-32">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Donation Form */}
            <div className="lg:col-span-7">
              <FadeIn className="bg-white p-8 lg:p-12 rounded-[2rem] shadow-2xl shadow-gray-200 border border-gray-100 relative z-10">
                <div className="flex p-1.5 bg-gray-50 rounded-xl mb-10">
                  <button 
                    className={`flex-1 py-3 text-sm font-bold uppercase tracking-widest rounded-lg transition-all ${type === 'one-time' ? 'bg-white text-logo-red shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                    onClick={() => setType('one-time')}
                  >
                    One-time
                  </button>
                  <button 
                    className={`flex-1 py-3 text-sm font-bold uppercase tracking-widest rounded-lg transition-all ${type === 'monthly' ? 'bg-white text-logo-red shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                    onClick={() => setType('monthly')}
                  >
                    Monthly
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {AMOUNTS.map((amt) => (
                    <button
                      key={amt}
                      className={`py-6 rounded-2xl border-2 font-bold transition-all text-lg ${amount === amt ? 'border-logo-red text-logo-red bg-red-50 shadow-sm' : 'border-gray-100 bg-white text-gray-400 hover:border-gray-200 hover:text-gray-600'}`}
                      onClick={() => {
                        setAmount(amt);
                        setCustomValue('');
                      }}
                    >
                      ₹{amt.toLocaleString()}
                    </button>
                  ))}
                </div>

                <div className="mb-10">
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">Custom Amount (INR)</label>
                  <div className="relative">
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-900 font-bold text-xl">₹</span>
                    <input 
                      type="number"
                      value={customValue}
                      onChange={(e) => {
                        setCustomValue(e.target.value);
                        setAmount('custom');
                      }}
                      placeholder="Enter other amount"
                      className="w-full pl-12 pr-6 py-5 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-logo-red outline-none transition-all text-xl font-bold"
                    />
                  </div>
                </div>

                <Button size="lg" className="w-full text-base shadow-xl shadow-red-100">
                  Complete Secure Payment
                </Button>

                <div className="mt-8 pt-8 border-t border-gray-50 flex items-center justify-center space-x-6 text-gray-400">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Secure 256-bit SSL Protection</span>
                </div>
              </FadeIn>
            </div>

            {/* Impact Details */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <FadeIn direction="left">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">How your donation creates value</h3>
                <div className="space-y-8">
                  {[
                    { label: "Nourishment", desc: "Nutrient-rich meals prepared daily in our clean residential kitchens." },
                    { label: "Stability", desc: "A fixed roof, clean bedding, and a space for emotional healing." },
                    { label: "Growth", desc: "Enrollment in private or high-standard government schools with extra tutoring." }
                  ].map((item) => (
                    <div key={item.label} className="flex items-start">
                      <div className="bg-red-50 p-2 rounded-full mr-6 mt-1">
                        <Check className="w-4 h-4 text-logo-red" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 uppercase tracking-widest text-xs">{item.label}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Heart className="w-5 h-5 text-logo-red mr-2 fill-logo-red" />
                    <span className="font-bold text-gray-900 text-sm">Tax Exemption</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed italic">
                    All donations are eligible for tax exemption under Section 80G. Certificates are automated and sent instantly.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Bank Transfer Section */}
          <FadeIn className="mt-24">
            <div className="bg-gradient-to-br from-logo-red to-red-800 text-white p-2 rounded-t-[2rem]">
              <h2 className="text-2xl md:text-3xl font-bold text-center py-4">Donation by Bank Transfer</h2>
            </div>
            <div className="bg-white p-8 lg:p-12 rounded-b-[2rem] shadow-2xl shadow-gray-200 border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* ICICI Bank */}
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Bank</h3>
                    <p className="text-xl font-bold text-gray-900">ICICI Bank</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">In name of</h3>
                    <p className="text-lg font-bold text-gray-900">Agranee Foundation</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">A/c No</h3>
                    <p className="text-lg font-bold text-gray-900">1234567890</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">A/c Type</h3>
                    <p className="text-lg font-medium text-gray-900">Current Account</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">IFSC Code</h3>
                    <p className="text-lg font-bold text-gray-900">ICIC0000123</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Branch Address</h3>
                    <p className="text-gray-700 leading-relaxed">B4, Sushant Lok, <br />Phase I Sector 27, <br />Gurugram, Haryana 122009</p>
                  </div>
                </div>

                {/* State Bank of India */}
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Bank</h3>
                    <p className="text-xl font-bold text-gray-900">State Bank of India</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">In name of</h3>
                    <p className="text-lg font-bold text-gray-900">Agranee Foundation</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">A/c No</h3>
                    <p className="text-lg font-bold text-gray-900">1234567890</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">A/c Type</h3>
                    <p className="text-lg font-medium text-gray-900">Current Account</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">IFSC Code</h3>
                    <p className="text-lg font-bold text-gray-900">SBIN0001234</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Branch Address</h3>
                    <p className="text-gray-700 leading-relaxed">B4, Sushant Lok, <br />Phase I Sector 27, <br />Gurugram, Haryana 122009</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Cheque/Draft and UPI Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* Cheques/Drafts */}
            <FadeIn delay={0.2}>
              <div className="bg-gradient-to-br from-logo-red to-red-800 text-white p-2 rounded-t-[2rem]">
                <h2 className="text-xl md:text-2xl font-bold text-center py-3">Donation by Cheques/Drafts</h2>
              </div>
              <div className="bg-white p-8 rounded-b-[2rem] shadow-2xl shadow-gray-200 border border-gray-100 h-full">
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    Cheques/Drafts need to be drawn favoring{' '}
                    <span className="font-bold text-logo-red">"Agranee Foundation"</span>{' '}
                    and payable at <span className="font-bold">New Delhi</span>
                  </p>
                  <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
                    <p className="text-sm text-gray-600 mb-2 font-semibold">Mail your cheque/draft to:</p>
                    <p className="text-gray-900 leading-relaxed font-medium">
                     Agranee Foundation<br />
                      B4, Sushant Lok, <br />Phase I Sector 27, <br />Gurugram, Haryana 122009<br />
                      
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* UPI/Digital Payment */}
            <FadeIn delay={0.3}>
              <div className="bg-gradient-to-br from-logo-red to-red-800 text-white p-2 rounded-t-[2rem]">
                <h2 className="text-xl md:text-2xl font-bold text-center py-3">Donation via PayTm/Phone Pe/G-Pay/Bhim-UPI</h2>
              </div>
              <div className="bg-white p-8 rounded-b-[2rem] shadow-2xl shadow-gray-200 border border-gray-100 h-full">
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    You can also donate by scanning the below QR code. Please send us an email on{' '}
                    <a href="mailto:info@agraneefoundation.org" className="text-logo-red font-bold hover:underline">
                      info@agraneefoundation.org
                    </a>{' '}
                    to claim your 80G certificate.
                  </p>
                  <div className="flex justify-center items-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    {/* QR Code - Replace with actual QR code image */}
                    <div className="w-48 h-48 bg-white border-4 border-logo-red rounded-2xl flex items-center justify-center shadow-lg">
                      <img 
                        src="./images/upi-qr.png" 
                        alt="UPI QR Code" 
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 text-center italic">
                    Scan with any UPI app to donate instantly
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};
