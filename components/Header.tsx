
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Button } from './Button';
import { motion } from 'framer-motion';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl border-b border-gray-100 py-3 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.05)]' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="flex items-center">
            {/* Replace the src path below with your SVG logo file */}
            <img 
              src="/agranee-logo.svg" 
              alt="Agranee Foundation Logo" 
              className="h-12 md:h-14 lg:h-16 w-auto transition-all duration-500 group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-7">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[12px] font-bold uppercase tracking-widest transition-all duration-300 relative py-1 ${
                  isActive ? 'text-logo-red' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span 
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-logo-red rounded-full" 
                  />
                )}
              </Link>
            );
          })}
          <div className="pl-4 border-l border-gray-100">
            <Button to="/donate" size="sm">
              Donate Now
            </Button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-gray-600 focus:outline-none transition-transform active:scale-90"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 top-[60px] bg-white z-50 transition-all duration-500 ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-8 space-y-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-2xl font-bold border-b border-gray-50 pb-4 flex justify-between items-center ${
                location.pathname === link.path ? 'text-logo-red' : 'text-gray-900'
              }`}
            >
              {link.label}
              {location.pathname === link.path && <Heart className="w-5 h-5 fill-logo-red text-logo-red" />}
            </Link>
          ))}
          <Button to="/donate" size="lg" className="w-full mt-4">
            Donate Now
          </Button>
        </div>
      </div>
    </header>
  );
};
