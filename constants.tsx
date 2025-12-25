import React from 'react';
import { Shield, BookOpen, HeartPulse, GraduationCap, Users, FileText } from 'lucide-react';
import { NavLink, Program, ImpactStat, Story } from './types';

export const NAV_LINKS: NavLink[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/our-work', label: 'Our Work' },
  // { path: '/impact', label: 'Impact' },
  // { path: '/stories', label: 'Stories' },
  { path: '/get-involved', label: 'Get Involved' },
  { path: '/transparency', label: 'Transparency' },
  { path: '/contact', label: 'Contact' },
];

export const PROGRAMS: Program[] = [
  {
    title: 'Care & Protection',
    description: 'Providing safe residential environments and emotional support for children without guardians.',
    icon: 'Shield',
    details: 'Our shelters in Delhi NCR offer more than just a roof; they provide a sense of belonging and a specialized care framework for children from vulnerable backgrounds.'
  },
  {
    title: 'Education & Learning',
    description: 'Enabling formal schooling and after-school mentoring to bridge learning gaps.',
    icon: 'BookOpen',
    details: 'We ensure every child is enrolled in a high-quality school and receives the individual attention required to excel academically and emotionally.'
  },
  {
    title: 'Health & Nutrition',
    description: 'Regular health screenings and balanced diet plans to ensure physical well-being.',
    icon: 'HeartPulse',
    details: 'With focused nutrition plans and regular check-ups, we address both immediate health needs and long-term physical development.'
  },
];

export const IMPACT_STATS: ImpactStat[] = [
  { value: '500', label: 'Children Supported', description: 'Across our various residential and learning centers in Delhi NCR.' },
  { value: '95', label: 'School Enrolment', description: 'Of children in our care are attending formal schooling.' },
  { value: '25', label: 'Higher Education', description: 'Youth transitioned to vocational training or university.' },
];

export const STORIES: Story[] = [
  {
    id: '1',
    name: 'Aman',
    age: 12,
    location: 'Gurugram',
    background: 'Found at a railway station with no family contact, Aman had missed three years of formal schooling.',
    transformation: 'After joining Agranee, he received accelerated learning support. Today, he is in the 6th grade and is one of the top performers in mathematics.',
    nextSteps: 'Aman aims to study engineering and eventually mentor children who share his background.',
    imageUrl: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=1470&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Priya',
    age: 15,
    location: 'Noida',
    background: 'Priya was living in a hazardous environment with limited access to clean water or nutrition.',
    transformation: 'With Agranee\'s intervention, her health stabilized. She discovered a passion for painting and digital arts during our vocational weekend workshops.',
    nextSteps: 'She is currently preparing for her 10th board exams with a focus on pursuing Fine Arts.',
    imageUrl: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1470&auto=format&fit=crop',
  },
];

export const SUPPORT_ECOSYSTEM = [
  { name: 'Akshaya Patra', role: 'Nutrition Partner' },
  { name: 'Smile Foundation', role: 'Implementation Partner' },
  { name: 'UNICEF', role: 'Advisory Support' }
];

export const ORG_INFO = {
  name: 'Agranee Foundation',
  head: 'Anshu Arora',
  initiativeBy: 'Agranee Investments',
  region: 'Delhi NCR, India',
  email: 'info@agraneefoundation.org',
  phone: '+91 98731 38341',
  address: 'B4, Sushant Lok, Phase I Sector 27, Gurugram, Haryana 122009'
};


export const EMAIL_CONFIG = {
  toEmail: 'info@agraneefoundation.org', // All form submissions will be sent here
  fromEmail: 'noreply@agraneefoundation.org', // Sender email
  replyTo: 'info@agraneefoundation.org'
};

export const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001',
  endpoints: {
    contact: '/api/contact'
  }
};