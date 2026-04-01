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
  details: string[];
  specializations: { icon: React.ReactNode; title: string }[];
  qualifications: string[];
  treatments: string[];
  reviews: { name: string; rating: number; text: string; date: string }[];
}

export const DOCTORS: Doctor[] = [
  {
    id: "dr-nitin",
    name: "Dr. Nitin",
    role: "BDS | PG Diploma in Implantology",
    experience: "18+ Years Experience",
    bio: "Dr. Nitin is a highly experienced dental professional with over 18 years of expertise in general and advanced dentistry. He specializes in dental implants and has successfully placed 1000+ implants. He is known for his patient-centric approach and commitment to delivering high-quality dental care.",
    image: "https://iili.io/BffXwKJ.jpg",
    about: "Dr. Nitin is the Founder of Happy Dental Clinic. He completed his BDS in 2008 and has since dedicated his career to providing exceptional dental care. With a PG Diploma in Implantology, he has become a specialist in complex implant procedures, having successfully placed over 1000 implants.",
    details: [
      "Founder of Happy Dental Clinic",
      "BDS (Passed out in 2008)",
      "18+ years of clinical experience",
      "PG Diploma in Implantology",
      "1000+ Dental Implants placed"
    ],
    specializations: [
      { icon: React.createElement(Smile, { size: 20 }), title: "Dental Implants" },
      { icon: React.createElement(Heart, { size: 20 }), title: "Full Mouth Rehab" },
      { icon: React.createElement(ShieldCheck, { size: 20 }), title: "Implant Surgery" },
    ],
    qualifications: [
      "BDS (2008)",
      "PG Diploma in Implantology",
      "Advanced Training in Full Mouth Rehabilitation",
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
    role: "BDS, MDS (Endodontist)",
    experience: "13+ Years Experience",
    bio: "Dr. Nisha is a skilled endodontist specializing in root canal treatments and cosmetic dentistry. With years of experience, she has completed 1000+ successful root canal procedures. She focuses on painless treatments and enhancing patients’ smiles with modern techniques.",
    image: "https://iili.io/BffXk9p.jpg",
    about: "Dr. Nisha is a Root Canal Specialist and Cosmetic Dentistry Expert. Practicing since 2011, she has built a reputation for her gentle touch and precision in endodontic procedures. She has successfully completed over 1000 root canal treatments and is passionate about aesthetic dentistry.",
    details: [
      "BDS, MDS (Root Canal Specialist)",
      "Cosmetic Dentistry Expert",
      "Practicing since 2011",
      "1000+ successful root canal procedures",
      "Expert in painless treatments"
    ],
    specializations: [
      { icon: React.createElement(Sparkles, { size: 20 }), title: "Cosmetic Dentistry" },
      { icon: React.createElement(Award, { size: 20 }), title: "Root Canal Specialist" },
      { icon: React.createElement(Stethoscope, { size: 20 }), title: "Smile Designing" },
    ],
    qualifications: [
      "MDS in Endodontics",
      "BDS",
      "Specialization in Cosmetic Dentistry",
    ],
    treatments: [
      "Root Canal Treatment",
      "Teeth Whitening",
      "Porcelain Veneers",
      "Composite Bonding",
      "Smile Makeover",
    ],
    reviews: [
      { name: "Priya Mehta", rating: 5, text: "Best experience with root canal. Dr. Nisha is so gentle and professional.", date: "1 month ago" },
      { name: "Sneha Patil", rating: 5, text: "My smile makeover looks incredibly natural. Thank you Dr. Nisha!", date: "2 months ago" },
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
