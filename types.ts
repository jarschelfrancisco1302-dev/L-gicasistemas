import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  instagram: string;
  location: string;
}