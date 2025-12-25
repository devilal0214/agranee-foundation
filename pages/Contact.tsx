import React, { useState } from 'react';
import { PageHero } from '../components/PageHero';
import { FadeIn } from '../components/FadeIn';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { ORG_INFO, API_CONFIG } from '../constants';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Support Query',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`${API_CONFIG.baseURL}${API_CONFIG.endpoints.contact}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({ type: 'success', message: data.message });
        setFormData({ name: '', email: '', phone: '', subject: 'General Support Query', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: data.message || 'Failed to send message' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white min-h-screen">
      <PageHero 
        badge="Connect"
        title="Open Channels"
        subtitle="Whether it's CSR partnership or local volunteering, we're ready to collaborate for the children of Delhi NCR."
      />

      <div className="container mx-auto px-4 sm:px-6 -mt-16 pb-32 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 lg:pr-10">
            <FadeIn className="space-y-16">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-10">Agranee Foundation</h3>
                <div className="space-y-10">
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mr-8 text-logo-red border border-gray-100 flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1 text-inherit">Email Support</h4>
                      <p className="text-gray-900 font-bold text-lg">{ORG_INFO.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mr-8 text-logo-red border border-gray-100 flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1 text-inherit">Direct Line</h4>
                      <p className="text-gray-900 font-bold text-lg">{ORG_INFO.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mr-8 text-logo-red border border-gray-100 flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1 text-inherit">Office Location</h4>
                      <p className="text-gray-900 leading-relaxed font-medium">{ORG_INFO.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10 bg-red-50 rounded-[2.5rem] relative overflow-hidden group">
                 <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-logo-red/5 rounded-full group-hover:scale-150 transition-transform duration-1000" />
                <h4 className="font-bold text-gray-900 text-xl mb-4 relative z-10">CSR Strategic Partnership</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 relative z-10">
                  Align your corporate values with documented impact. We offer comprehensive CSR reporting for our Delhi NCR projects.
                </p>
                <Button variant="white" size="md" className="w-full relative z-10">
                  Request CSR Deck
                </Button>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-7">
            <FadeIn direction="left" className="bg-white p-10 lg:p-16 rounded-[3rem] shadow-2xl shadow-gray-200 border border-gray-100">
              {submitStatus && (
                <div className={`mb-6 p-4 rounded-2xl ${submitStatus.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                  <p className="font-medium">{submitStatus.message}</p>
                </div>
              )}
              
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest">Your Full Name</label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      required
                      className="w-full px-6 py-5 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-logo-red outline-none transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      required
                      className="w-full px-6 py-5 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-logo-red outline-none transition-all font-medium"
                    />
                  </div>
                </div>

                 <div className="space-y-3">
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest">Phone Number</label>
                   <input 
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-6 py-5 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-logo-red outline-none transition-all font-medium"
                    />
                </div>

                <div className="space-y-3">
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest">How can we help?</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-6 py-5 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-logo-red outline-none transition-all font-medium appearance-none cursor-pointer"
                  >
                    <option>General Support Query</option>
                    <option>Corporate Partnership (CSR)</option>
                    <option>Volunteer Application</option>
                    <option>Tax Receipt Inquiry</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest">Your Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us about your interest..."
                    required
                    className="w-full px-6 py-5 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-logo-red outline-none transition-all font-medium resize-none"
                  ></textarea>
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
                <div className="flex items-center justify-center space-x-2 opacity-40">
                  <div className="w-1.5 h-1.5 rounded-full bg-logo-red animate-pulse" />
                  <p className="text-[10px] font-bold uppercase tracking-widest">
                    Direct human response within 24 hours
                  </p>
                </div>
              </form>
            </FadeIn>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-24">
          <FadeIn>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visit Our Office</h3>
              <p className="text-gray-500 text-lg">Find us on the map</p>
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl shadow-gray-200 border-8 border-gray-50 h-[400px] md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2873355689045!2d77.2090212!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Agranee Foundation Office Location"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};