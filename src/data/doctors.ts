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
    role: "Dentist / MDS / Implantologist",
    experience: "15+ Years Experience",
    bio: "Expert in Dental Implants and Full Mouth Rehabilitation. Known for precision, advanced techniques, and patient comfort.",
    image: "https://iili.io/BffXwKJ.jpg",
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
    role: "Dentist / MDS / Orthodontist",
    experience: "12+ Years Experience",
    bio: "Specializes in smile designing and clear aligners. Focused on aesthetic, natural-looking results with a gentle approach.",
    image: "https://iili.io/BffXk9p.jpg",
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
  }
];

export const CONSULTANTS = [
  {
    specialization: "ORTHODONTIA",
    doctors: ["Dr. Pallavi Rai", "Dr. Dhiraj Agrawal", "Dr. Feroz Khan"]
  },
  {
    specialization: "PROSTHODONTIA",
    doctors: ["Dr. Vaijanti Lotwani"]
  },
  {
    specialization: "PERIODONTIA",
    doctors: ["Dr. Varsha Jadhav", "Dr. Rajiv Chitgugppi"]
  },
  {
    specialization: "ORAL SURGERY",
    doctors: ["Dr. Deepak Jagtap"]
  },
  {
    specialization: "PEDODONTICS",
    doctors: ["Dr. Kavya", "Dr. Arvnd Neelkatham"]
  },
  {
    specialization: "ORAL DIAGNOSIS",
    doctors: ["Dr. Amol Dhokar"]
  }
];
