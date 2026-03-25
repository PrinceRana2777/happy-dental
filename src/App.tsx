/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  ChevronRight, 
  X, 
  CheckCircle2, 
  Menu, 
  Stethoscope,
  ShieldCheck,
  Award,
  Users,
  MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const TREATMENTS = [
  { title: "Root Canal", description: "Advanced pain-free root canal treatments to save your natural teeth." },
  { title: "Dental Crown", description: "High-quality crowns for protection and aesthetic restoration." },
  { title: "Tooth Extraction", description: "Safe and comfortable tooth removal when necessary." },
  { title: "Teeth Cleaning", description: "Professional scaling and polishing for a brighter smile." },
  { title: "Dental Implants", description: "Permanent solutions for missing teeth with natural look." },
  { title: "Dental Bonding", description: "Quick fixes for minor chips, cracks, and gaps." },
];

const REVIEWS = [
  { name: "Rahul S.", rating: 5, text: "Affordable price with excellent service, staff is awesome." },
  { name: "Priya M.", rating: 5, text: "Highly recommend for quality dental care. Very professional." },
  { name: "Amit K.", rating: 5, text: "Nice treatment and affordable rates. Best clinic in Vikhroli." },
];

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="w-10 h-10 medical-gradient rounded-lg flex items-center justify-center">
                <Stethoscope className="text-white w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-teal-primary leading-tight">Happy Dental</h1>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Clinic Vikhroli</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'Treatments', 'About', 'Reviews', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-slate-600 hover:text-teal-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <a href="tel:+919975780529" className="flex items-center gap-2 text-teal-primary font-bold">
                <Phone size={18} />
                <span>+91 9975780529</span>
              </a>
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="medical-gradient text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-teal-900/20 hover:scale-105 transition-transform"
              >
                Book Appointment
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {['Home', 'Treatments', 'About', 'Reviews', 'Contact'].map((item) => (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left text-lg font-medium text-slate-600"
                  >
                    {item}
                  </button>
                ))}
                <div className="pt-4 space-y-4">
                  <a href="tel:+919975780529" className="flex items-center justify-center gap-2 w-full py-3 border-2 border-teal-primary text-teal-primary rounded-xl font-bold">
                    <Phone size={18} /> Call Now
                  </a>
                  <button 
                    onClick={() => { setIsPopupOpen(true); setIsMenuOpen(false); }}
                    className="w-full py-3 medical-gradient text-white rounded-xl font-bold"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2070" 
            alt="Dental Clinic" 
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-soft-blue via-white to-white"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Star className="fill-teal-primary" size={16} />
                <span>4.9/5 Rating (410+ Reviews)</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
                Your Smile, <br />
                <span className="text-teal-primary">Our Priority</span>
              </h2>
              <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
                Trusted Dental Care in Vikhroli with advanced technology and affordable pricing. We care for your smile like family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsPopupOpen(true)}
                  className="medical-gradient text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl shadow-teal-900/20 hover:scale-105 transition-transform flex items-center justify-center gap-2"
                >
                  Book Appointment <ChevronRight size={20} />
                </button>
                <a 
                  href="tel:+919975780529"
                  className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={20} /> Call Now
                </a>
              </div>
              
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">410+ Happy Patients</p>
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-current" />)}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1000" 
                  alt="Smiling Patient" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <Clock size={20} />
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase">Status</span>
                </div>
                <p className="text-sm font-bold text-slate-900">Open Now</p>
                <p className="text-xs text-slate-500">Closes at 10:00 PM</p>
              </div>
              <div className="absolute -top-6 -right-6 z-0 w-64 h-64 bg-teal-100 rounded-full blur-3xl opacity-50"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-soft-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-teal-primary font-bold tracking-widest uppercase text-sm mb-4">About Our Clinic</h3>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Advanced, Affordable & Comfortable Dental Care</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Happy Dental Clinic Vikhroli provides advanced, affordable and comfortable dental treatments with experienced dentists and modern equipment. We believe everyone deserves a healthy, beautiful smile without breaking the bank.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: <Users />, title: "Experienced Team", desc: "Expert dentists with years of practice." },
                  { icon: <ShieldCheck />, title: "Modern Equipment", desc: "Latest dental technology for precision." },
                  { icon: <Award />, title: "4.9★ Rated", desc: "Trusted by 400+ patients in Vikhroli." },
                  { icon: <Stethoscope />, title: "Personalized Care", desc: "Treatments tailored to your needs." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white text-teal-primary rounded-xl flex items-center justify-center shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000" 
                alt="Clinic Interior" 
                className="rounded-3xl shadow-xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-2 border-teal-primary/20 rounded-3xl translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="treatments" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-teal-primary font-bold tracking-widest uppercase text-sm mb-4">Our Services</h3>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Comprehensive Dental Solutions</h2>
            <p className="text-lg text-slate-600">From routine checkups to advanced surgeries, we offer a full range of dental services to keep your smile healthy.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TREATMENTS.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-teal-50 text-teal-primary rounded-2xl flex items-center justify-center mb-6">
                  <CheckCircle2 size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-500 mb-6">{item.description}</p>
                <button 
                  onClick={() => setIsPopupOpen(true)}
                  className="text-teal-primary font-bold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Learn More <ChevronRight size={18} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Feature: Tooth Fracture Care */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-teal-500/20 text-teal-400 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Specialized Care
              </div>
              <h2 className="text-4xl font-bold mb-8">Tooth Fracture Treatment</h2>
              <p className="text-slate-400 text-lg mb-10">
                A fractured tooth can be painful and lead to further complications if not treated immediately. We provide expert care for all types of tooth fractures.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-teal-400 font-bold mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div> Treatment Options
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {[
                      { t: "Dental Bonding", d: "For minor cracks" },
                      { t: "Dental Crowns", d: "For protection" },
                      { t: "Root Canal", d: "If pulp is affected" },
                      { t: "Extraction", d: "For severe damage" }
                    ].map((opt, i) => (
                      <li key={i} className="bg-white/5 p-4 rounded-xl border border-white/10">
                        <p className="font-bold text-white">{opt.t}</p>
                        <p className="text-xs text-slate-500">{opt.d}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-teal-400 font-bold mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div> Common Causes
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {["Accidents or trauma", "Biting hard objects", "Tooth decay", "Teeth grinding"].map((cause, i) => (
                      <span key={i} className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10 text-slate-300">
                        {cause}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full border-2 border-dashed border-teal-500/30 p-8 animate-spin-slow">
                <div className="w-full h-full rounded-full border-2 border-dashed border-teal-500/50"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl rotate-3">
                  <img 
                    src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1000" 
                    alt="Dental Care" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-teal-primary rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
            <div className="absolute bottom-0 right-0 opacity-10">
              <Stethoscope size={400} />
            </div>
            <div className="relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl font-bold mb-6">Why Choose Happy Dental?</h2>
                <p className="text-teal-100 text-lg">We combine expertise with empathy to provide the best dental experience in Mumbai.</p>
              </div>

              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                {[
                  { label: "4.9★ Rated", sub: "Top Clinic" },
                  { label: "Expert", sub: "Dentists" },
                  { label: "Affordable", sub: "Pricing" },
                  { label: "Modern", sub: "Equipment" },
                  { label: "Comfortable", sub: "Environment" },
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 className="text-xl font-bold">{item.label}</h4>
                    <p className="text-teal-100 text-sm">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-soft-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h3 className="text-teal-primary font-bold tracking-widest uppercase text-sm mb-4">Testimonials</h3>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">What Our Patients Say</h2>
              <p className="text-lg text-slate-600">Don't just take our word for it. Here are some of the 400+ reviews from our happy patients.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
              <div className="text-4xl font-black text-slate-900">4.9</div>
              <div>
                <div className="flex text-yellow-400 mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-current" />)}
                </div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">410 Google Reviews</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative">
                <div className="absolute -top-4 left-8 w-8 h-8 medical-gradient rounded-lg flex items-center justify-center text-white">
                  <MessageSquare size={16} />
                </div>
                <div className="flex text-yellow-400 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-current" />)}
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-100 text-teal-primary rounded-full flex items-center justify-center font-bold">
                    {review.name[0]}
                  </div>
                  <span className="font-bold text-slate-900">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-teal-primary font-bold tracking-widest uppercase text-sm mb-4">Contact Us</h3>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-50 text-teal-primary rounded-xl flex items-center justify-center">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Our Location</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Happy Dental Clinic, 210/3034, 1st Floor,<br />
                      Above Happy Medical, Near Sangli Bank,<br />
                      Tagore Nagar, Vikhroli East,<br />
                      Mumbai, Maharashtra 400083, India
                    </p>
                    <p className="text-teal-primary text-sm font-bold mt-2">Plus Code: 4W7J+6J Mumbai</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-50 text-teal-primary rounded-xl flex items-center justify-center">
                    <Phone />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Phone Number</h4>
                    <a href="tel:+919975780529" className="text-2xl font-bold text-teal-primary hover:underline">
                      +91 9975780529
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-50 text-teal-primary rounded-xl flex items-center justify-center">
                    <Clock />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Clinic Timings</h4>
                    <p className="text-slate-600">Open Daily: 10:00 AM - 10:00 PM</p>
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold mt-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse"></div>
                      Open Now
                    </div>
                  </div>
                </div>

              </div>

              <div className="flex gap-4">
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Happy+Dental+Clinic+Vikhroli" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="medical-gradient text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-teal-900/20"
                >
                  <MapPin size={20} /> Get Directions
                </a>
              </div>
            </div>

            <div className="h-[500px] rounded-3xl overflow-hidden shadow-xl border-8 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.000000000000!2d72.9288888!3d19.1111111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7c7c7c7c7c7%3A0x7c7c7c7c7c7c7c7c!2sHappy%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                  <Stethoscope className="text-white w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white leading-tight">Happy Dental Clinic</h1>
                  <p className="text-sm font-medium text-teal-400">हैप्पी डेंटल क्लिनिक</p>
                </div>
              </div>
              <p className="text-slate-400 max-w-md mb-8">
                Providing quality dental care in Vikhroli East. We are committed to excellence and patient comfort in every treatment.
              </p>
              <div className="flex gap-4">
                {/* Social icons placeholder */}
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors cursor-pointer">
                    <Star size={18} />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-slate-400">
                {['Home', 'Treatments', 'About', 'Reviews', 'Contact'].map(item => (
                  <li key={item}>
                    <button onClick={() => scrollToSection(item.toLowerCase())} className="hover:text-teal-400 transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Contact Info</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex gap-3">
                  <MapPin size={18} className="flex-shrink-0 text-teal-400" />
                  <span>Tagore Nagar, Vikhroli East, Mumbai 400083</span>
                </li>
                <li className="flex gap-3">
                  <Phone size={18} className="flex-shrink-0 text-teal-400" />
                  <span>+91 9975780529</span>
                </li>
                <li className="flex gap-3">
                  <Clock size={18} className="flex-shrink-0 text-teal-400" />
                  <span>Daily: 10 AM - 10 PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} Happy Dental Clinic Vikhroli. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Call Button */}
      <a 
        href="tel:+919975780529"
        className="fixed bottom-8 right-8 z-40 w-16 h-16 medical-gradient text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-bounce md:hidden"
      >
        <Phone size={28} />
      </a>

      {/* Auto Popup Modal */}
      <AnimatePresence>
        {isPopupOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPopupOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setIsPopupOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className="medical-gradient p-8 text-white text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <Stethoscope size={32} />
                </div>
                <h3 className="text-sm font-bold tracking-widest uppercase mb-1">Happy Dental Clinic</h3>
                <h2 className="text-3xl font-bold mb-2">Get a Call Back</h2>
                <p className="text-teal-100">We Care for Your Smile</p>
              </div>

              <form className="p-8 space-y-4" onSubmit={(e) => { e.preventDefault(); setIsPopupOpen(false); alert("Thank you! We will call you back shortly."); }}>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-teal-primary focus:ring-2 focus:ring-teal-primary/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Phone Number</label>
                  <div className="flex gap-2">
                    <div className="px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-500 font-bold">+91</div>
                    <input 
                      type="tel" 
                      required
                      pattern="[0-9]{10}"
                      placeholder="9876543210"
                      className="flex-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-teal-primary focus:ring-2 focus:ring-teal-primary/20 outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Select Treatment</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-teal-primary focus:ring-2 focus:ring-teal-primary/20 outline-none transition-all appearance-none">
                    <option>General Checkup</option>
                    <option>Root Canal</option>
                    <option>Dental Crown</option>
                    <option>Tooth Extraction</option>
                    <option>Teeth Cleaning</option>
                  </select>
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 medical-gradient text-white rounded-xl font-bold text-lg shadow-lg shadow-teal-900/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Submit Request
                </button>
                <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest">Your privacy is our priority</p>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
