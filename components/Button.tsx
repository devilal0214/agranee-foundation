import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  to, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = "",
  type = 'button'
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-3 transition-all duration-300 rounded-2xl font-bold disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden shrink-0 whitespace-nowrap group leading-none";
  
  const sizes = {
    sm: "px-6 py-3 text-[10px] tracking-widest uppercase",
    md: "px-8 py-4 text-[11px] tracking-[0.2em] uppercase",
    lg: "px-10 py-5 text-[12px] tracking-[0.25em] uppercase",
  };

  const variants = {
    primary: "bg-logo-red text-white border border-logo-red shadow-lg shadow-red-600/10 hover:bg-red-700 hover:border-red-700 hover:shadow-red-600/20",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 border border-transparent",
    outline: "border-2 border-gray-200 text-gray-700 bg-transparent hover:border-logo-red hover:bg-logo-red hover:text-white",
    white: "bg-white text-logo-red border border-white shadow-xl hover:bg-gray-50 hover:shadow-gray-200",
  };

  const combinedStyles = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;

  // Ensuring text-current is on the inner span so children (icons) inherit correctly
  const InnerContent = () => (
    <span className="relative z-10 flex items-center justify-center gap-2.5 text-current">
      {children}
    </span>
  );

  const containerVariants = {
    hover: { 
      y: -2,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    tap: { 
      scale: 0.98,
      y: 0 
    }
  };

  if (to) {
    return (
      <motion.div
        whileHover="hover"
        whileTap="tap"
        variants={containerVariants}
        className="inline-block"
      >
        <Link to={to} className={combinedStyles}>
          <InnerContent />
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button 
      type={type} 
      onClick={onClick} 
      className={combinedStyles}
      whileHover="hover"
      whileTap="tap"
      variants={containerVariants}
    >
      <InnerContent />
    </motion.button>
  );
};