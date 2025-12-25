
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { ORG_INFO, NAV_LINKS, SUPPORT_ECOSYSTEM } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img 
              src="/agranee-logo.svg" 
              alt="Agranee Foundation Logo" 
              className="h-12 md:h-14 lg:h-16 w-auto transition-all duration-500 group-hover:scale-105"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              An initiative by {ORG_INFO.initiativeBy}. 
              Dedicated to building a future where every child in Delhi NCR has a safe place to grow.
            </p>
            <div className="space-y-2 pt-2">
              <a href={`mailto:${ORG_INFO.email}`} className="flex items-center text-gray-600 text-sm hover:text-logo-red transition-colors">
                <Mail className="w-4 h-4 mr-2 text-logo-red" />
                {ORG_INFO.email}
              </a>
              <a href={`tel:${ORG_INFO.phone.replace(/\s+/g, '')}`} className="flex items-center text-gray-600 text-sm hover:text-logo-red transition-colors">
                <Phone className="w-4 h-4 mr-2 text-logo-red" />
                {ORG_INFO.phone}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-bold mb-4 uppercase text-xs tracking-widest">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-600 text-sm hover:text-logo-red transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Ecosystem */}
          <div>
            <h4 className="text-gray-900 font-bold mb-4 uppercase text-xs tracking-widest">Ecosystem</h4>
            <p className="text-gray-500 text-sm mb-4">Supported by and collaborating with:</p>
            <ul className="space-y-2">
              {SUPPORT_ECOSYSTEM.map(item => (
                // Fix: Access item.name to provide a valid string for the key and a renderable value for the list item
                <li key={item.name} className="text-gray-600 text-sm flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-logo-red mr-2" />
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-gray-900 font-bold mb-4 uppercase text-xs tracking-widest">Location</h4>
            <div className="flex items-start text-gray-600 text-sm">
              <MapPin className="w-4 h-4 mr-2 text-logo-red mt-1 flex-shrink-0" />
              <span>{ORG_INFO.address}</span>
            </div>
              <div className="flex items-center gap-3 mt-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-logo-red text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-logo-red text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-logo-red text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-logo-red text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-logo-red text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-6 p-4 bg-white border border-gray-100 rounded-lg">
              <p className="text-[11px] font-bold text-gray-400 uppercase mb-1">Compliance</p>
              <p className="text-[10px] text-gray-500 leading-tight">
                All donations are eligible for tax exemption under Section 80G of the Income Tax Act.
              </p>
            </div>

           
          </div>
        </div>

        

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Build with ❤ in India | Powered by <Link to="https://jaiveeru.co.in/" target="_blank" rel="noopener noreferrer">JaiVeeru Creatives</Link></p>
          <div className="flex space-x-6">
            <Link to="/transparency" className="hover:text-logo-red">Privacy Policy</Link>
            <Link to="/transparency" className="hover:text-logo-red">Child Protection</Link>
            <Link to="/contact" className="hover:text-logo-red">Grievance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
