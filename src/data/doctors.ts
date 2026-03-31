import { Smile, Sparkles, Heart, Stethoscope, Award, ShieldCheck } from 'lucide-react';
import React from 'react';

export interface Doctor {
  id: string;
  name: string;
  role: string;
  experience: string;
  bio: string;
  image: string;
  about: string;
  specializations: { icon: React.ReactNode; title: string }[];
  qualifications: string[];
  treatments: string[];
  reviews: { name: string; rating: number; text: string; date: string }[];
}

export const DOCTORS: Doctor[] = [
  {
    id: "dr-nitin",
    name: "Dr. Nitin",
    role: "Senior Implantologist",
    experience: "15+ Years Experience",
    bio: "Expert in Dental Implants and Full Mouth Rehabilitation. Known for precision, advanced techniques, and patient comfort.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=500",
    about: "Dr. Nitin is a highly experienced implantologist specializing in Dental Implants and Full Mouth Rehabilitation. With over 15 years of experience, he is known for precision, advanced techniques, and patient comfort. He has successfully placed over 5,000 implants and is a pioneer in immediate loading protocols.",
    specializations: [
      { icon: React.createElement(Smile, { size: 20 }), title: "Dental Implants" },
      { icon: React.createElement(Heart, { size: 20 }), title: "Full Mouth Rehab" },
      { icon: React.createElement(ShieldCheck, { size: 20 }), title: "Implant Surgery" },
    ],
    qualifications: [
      "MDS in Prosthodontics & Implantology",
      "Fellowship in International Congress of Oral Implantologists (ICOI)",
      "Advanced Training in Zygomatic Implants from Israel",
    ],
    treatments: [
      "Single Tooth Implants",
      "All-on-4 / All-on-6 Implants",
      "Full Mouth Rehabilitation",
      "Bone Grafting & Sinus Lift",
      "Basal Implants",
    ],
    reviews: [
      { name: "Rahul Sharma", rating: 5, text: "The dental implant procedure was completely painless. Dr. Nitin is truly an expert. Highly recommended!", date: "2 weeks ago" },
      { name: "Amit Kumar", rating: 5, text: "Affordable rates and excellent service. They explain everything clearly before starting treatment.", date: "3 months ago" },
    ]
  },
  {
    id: "dr-nisha",
    name: "Dr. Nisha",
    role: "Cosmetic Dentist & Orthodontist",
    experience: "12+ Years Experience",
    bio: "Specializes in smile designing and clear aligners. Focused on aesthetic, natural-looking results with a gentle approach.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=500",
    about: "Dr. Nisha is a specialist in smile designing and clear aligners. Focused on aesthetic, natural-looking results with a gentle approach, she has transformed thousands of smiles. She combines her orthodontic expertise with cosmetic artistry to create balanced, beautiful results.",
    specializations: [
      { icon: React.createElement(Sparkles, { size: 20 }), title: "Clear Aligners" },
      { icon: React.createElement(Award, { size: 20 }), title: "Smile Designing" },
      { icon: React.createElement(Stethoscope, { size: 20 }), title: "Orthodontics" },
    ],
    qualifications: [
      "MDS in Orthodontics & Dentofacial Orthopedics",
      "Certified Invisalign Provider",
      "Diploma in Aesthetic Dentistry from NYU",
    ],
    treatments: [
      "Invisalign & Clear Aligners",
      "Ceramic & Metal Braces",
      "Teeth Whitening",
      "Porcelain Veneers",
      "Composite Bonding",
    ],
    reviews: [
      { name: "Priya Mehta", rating: 5, text: "Best experience with clear aligners. The staff is very professional and the clinic is super clean.", date: "1 month ago" },
      { name: "Sneha Patil", rating: 5, text: "Dr. Nisha is so gentle. My smile makeover looks incredibly natural. Thank you!", date: "2 months ago" },
    ]
  },
  {
    id: "dr-associate",
    name: "Dr. Associate",
    role: "General Dentist",
    experience: "8+ Years Experience",
    bio: "Provides comprehensive dental care with a focus on preventive and routine treatments.",
    image: "https://images.unsplash.com/photo-1559839734-2b71f153678f?auto=format&fit=crop&q=80&w=400&h=500",
    about: "Dr. Associate provides comprehensive dental care with a focus on preventive and routine treatments. With 8 years of experience, they are dedicated to maintaining the oral health of patients through regular checkups, cleanings, and patient education.",
    specializations: [
      { icon: React.createElement(Stethoscope, { size: 20 }), title: "General Dentistry" },
      { icon: React.createElement(ShieldCheck, { size: 20 }), title: "Preventive Care" },
      { icon: React.createElement(Smile, { size: 20 }), title: "Routine Checkups" },
    ],
    qualifications: [
      "BDS from Government Dental College",
      "Certified in Endodontics",
      "Advanced Training in Laser Dentistry",
    ],
    treatments: [
      "Root Canal Treatment",
      "Dental Fillings",
      "Professional Cleaning (Scaling)",
      "Tooth Extractions",
      "Pediatric Dentistry",
    ],
    reviews: [
      { name: "Vikram Singh", rating: 5, text: "Very thorough cleaning and checkup. Explained everything very well.", date: "1 month ago" },
      { name: "Anjali Rao", rating: 4, text: "Good experience, very polite and professional.", date: "2 months ago" },
    ]
  }
];
