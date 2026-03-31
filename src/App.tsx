import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
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
  MessageSquare,
  Heart,
  Sparkles,
  Smile,
  Shield,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import AppointmentBooking from './components/AppointmentBooking';
import DoctorProfile from './components/DoctorProfile';
import LeadPopup from './components/LeadPopup';
import { DOCTORS } from './data/doctors';

const SERVICES = [
  { 
    title: "Dental Implants", 
    description: "Permanent, natural-looking solution for missing teeth using advanced titanium posts and custom crowns.",
    icon: <Smile className="w-8 h-8" />,
    highlight: true,
    badge: "Most Advanced"
  },
  { 
    title: "Clear Aligners", 
    description: "Straighten your teeth discreetly with nearly invisible, removable trays tailored to your smile.",
    icon: <Sparkles className="w-8 h-8" />,
    highlight: false
  },
  { 
    title: "Full Mouth Rehab", 
    description: "Comprehensive restoration of your oral health, function, and aesthetics using a combination of treatments.",
    icon: <Heart className="w-8 h-8" />,
    highlight: false,
    premium: true
  },
  { 
    title: "Root Canal", 
    description: "Save your natural teeth with our painless, high-precision root canal treatments.",
    icon: <Stethoscope className="w-8 h-8" />,
    highlight: false
  },
  { 
    title: "Cosmetic Dentistry", 
    description: "Enhance your smile with veneers, bonding, and professional whitening for a perfect look.",
    icon: <Award className="w-8 h-8" />,
    highlight: false
  },
  { 
    title: "Tooth Extraction", 
    description: "Safe and comfortable removal of damaged or wisdom teeth with minimal downtime.",
    icon: <ShieldCheck className="w-8 h-8" />,
    highlight: false
  },
];

const REVIEWS = [
  { name: "Rahul Sharma", rating: 5, text: "The dental implant procedure was completely painless. Dr. Nitin is truly an expert. Highly recommended!", date: "2 weeks ago" },
  { name: "Priya Mehta", rating: 5, text: "Best experience with clear aligners. The staff is very professional and the clinic is super clean.", date: "1 month ago" },
  { name: "Amit Kumar", rating: 5, text: "Affordable rates and excellent service. They explain everything clearly before starting treatment.", date: "3 months ago" },
];

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'doctors', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen selection:bg-teal-100 selection:text-teal-900">
      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={(e) => scrollToSection(e as any, 'home')}>
              <div className="w-11 h-11 medical-gradient rounded-xl flex items-center justify-center shadow-lg shadow-teal-900/20 group-hover:scale-105 transition-transform">
                <Stethoscope className="text-white w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 leading-tight tracking-tight">Happy Dental</h1>
                <p className="text-[10px] uppercase tracking-[0.2em] text-teal-600 font-bold">Clinic Vikhroli</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10">
              {['Home', 'Services', 'About', 'Doctors', 'Reviews', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => scrollToSection(e, item.toLowerCase())}
                  className={`text-sm font-semibold transition-all duration-300 relative py-2 ${
                    activeSection === item.toLowerCase() 
                      ? "text-teal-primary" 
                      : "text-slate-500 hover:text-teal-primary"
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-primary rounded-full"
                    />
                  )}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-6">
              <a href="tel:+919975780529" className="flex items-center gap-2 text-slate-900 font-bold hover:text-teal-primary transition-colors">
                <div className="w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center">
                  <Phone size={16} className="text-teal-primary" />
                </div>
                <span className="text-sm">+91 9975780529</span>
              </a>
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="medical-gradient text-white px-7 py-3 rounded-full text-sm font-bold shadow-xl shadow-teal-900/20 hover:shadow-teal-900/30 hover:-translate-y-0.5 transition-all"
              >
                Book Appointment
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-100 rounded-full transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[-1]"
              />
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="md:hidden bg-white border-t border-slate-100 overflow-hidden shadow-2xl relative z-50"
              >
                <div className="px-6 py-8 space-y-6">
                  {['Home', 'Services', 'About', 'Doctors', 'Reviews', 'Contact'].map((item) => (
                    <a 
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => scrollToSection(e, item.toLowerCase())}
                      className={`block w-full text-left text-xl font-bold transition-colors ${
                        activeSection === item.toLowerCase() 
                          ? "text-teal-primary" 
                          : "text-slate-600"
                      }`}
                    >
                      {item}
                    </a>
                  ))}
                  <div className="pt-6 space-y-4">
                    <a href="tel:+919975780529" className="flex items-center justify-center gap-3 w-full py-4 border-2 border-teal-primary text-teal-primary rounded-2xl font-bold text-lg">
                      <Phone size={20} /> Call Now
                    </a>
                    <button 
                      onClick={() => { setIsPopupOpen(true); setIsMenuOpen(false); }}
                      className="w-full py-4 medical-gradient text-white rounded-2xl font-bold text-lg shadow-lg shadow-teal-900/20"
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-52 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-50 via-white to-white opacity-70"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-bold mb-8 border border-teal-100">
                <div className="flex text-yellow-400">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-current" />)}
                </div>
                <span className="border-l border-teal-200 pl-2">4.9/5 Rating (400+ Reviews)</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8 text-balance">
                Restore Your Smile with <br />
                <span className="text-teal-primary relative">
                  Advanced Implants
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-teal-200/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                  </svg>
                </span>
              </h2>
              <p className="text-xl text-slate-600 mb-12 max-w-xl leading-relaxed">
                Experience painless, advanced, and trusted dental care in Vikhroli. We specialize in permanent smile restorations that look and feel natural.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <button 
                  onClick={() => setIsPopupOpen(true)}
                  className="medical-gradient text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl shadow-teal-900/20 hover:shadow-teal-900/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                >
                  Book Appointment <ArrowRight size={20} />
                </button>
                <a 
                  href="tel:+919975780529"
                  className="bg-white text-slate-900 border-2 border-slate-100 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-slate-50 hover:border-slate-200 transition-all flex items-center justify-center gap-3 shadow-sm"
                >
                  <Phone size={20} className="text-teal-primary" /> Call Now
                </a>
              </div>
              
              <div className="mt-16 grid grid-cols-3 gap-8 border-t border-slate-100 pt-10">
                <div>
                  <p className="text-3xl font-black text-slate-900 mb-1">15+</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Years Exp.</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-slate-900 mb-1">10k+</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Happy Smiles</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-slate-900 mb-1">4.9</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Google Rating</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1000" 
                  alt="Advanced Dental Care" 
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 z-20 bg-white p-6 rounded-3xl shadow-2xl border border-slate-50 max-w-[240px]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Quality</p>
                    <p className="text-sm font-bold text-slate-900">Certified Care</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-green-600 text-xs font-bold">
                  <CheckCircle2 size={14} /> Painless Treatment
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-10 -right-10 z-20 bg-white p-6 rounded-3xl shadow-2xl border border-slate-50"
              >
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-4 border-white overflow-hidden bg-slate-100">
                        <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="Patient" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-900">400+ Reviews</p>
                    <p className="text-[10px] font-bold text-teal-600 uppercase tracking-widest">Trusted Clinic</p>
                  </div>
                </div>
              </motion.div>

              <div className="absolute -bottom-20 -right-20 z-0 w-80 h-80 bg-teal-100 rounded-full blur-[100px] opacity-40"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-teal-primary font-bold tracking-[0.2em] uppercase text-sm mb-4">Our Expertise</h3>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Premium Dental Solutions</h2>
              <p className="text-lg text-slate-500 leading-relaxed">We combine advanced technology with a gentle touch to provide comprehensive care for your entire family.</p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -12 }}
                className={`group p-10 rounded-[2.5rem] border transition-all duration-500 relative overflow-hidden ${
                  item.highlight 
                    ? "bg-slate-900 text-white border-slate-800 lg:scale-105 lg:z-10 shadow-2xl shadow-slate-900/20" 
                    : "bg-white border-slate-100 hover:border-teal-100 hover:shadow-[0_20px_50px_-12px_rgba(13,148,136,0.12)]"
                }`}
              >
                {item.badge && (
                  <div className="absolute top-6 right-6 bg-teal-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                    {item.badge}
                  </div>
                )}
                
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 ${
                  item.highlight ? "bg-teal-500 text-white" : "bg-teal-50 text-teal-primary"
                }`}>
                  {item.icon}
                </div>
                
                <h4 className={`text-2xl font-bold mb-4 ${item.highlight ? "text-white" : "text-slate-900"}`}>{item.title}</h4>
                <p className={`mb-8 leading-relaxed ${item.highlight ? "text-slate-400" : "text-slate-500"}`}>{item.description}</p>
                
                <button 
                  onClick={() => setIsPopupOpen(true)}
                  className={`font-bold flex items-center gap-2 transition-all group-hover:gap-3 ${
                    item.highlight ? "text-teal-400" : "text-teal-primary"
                  }`}
                >
                  Learn More <ArrowRight size={18} />
                </button>

                {item.highlight && (
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-teal-primary font-bold tracking-[0.2em] uppercase text-sm mb-4">Why Choose Us</h3>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">Excellence in Every <br /><span className="text-teal-primary">Dental Detail</span></h2>
              
              <div className="space-y-8">
                {[
                  { icon: <Users />, title: "Experienced Doctors", desc: "Our specialists have over 15 years of experience in complex dental surgeries." },
                  { icon: <Shield />, title: "Painless Treatment", desc: "We use advanced sedation and precision tools to ensure a comfortable experience." },
                  { icon: <Stethoscope />, title: "Advanced Equipment", desc: "Equipped with the latest digital imaging and laser technology for accurate results." },
                  { icon: <Heart />, title: "Affordable Pricing", desc: "Premium dental care that fits your budget with transparent, upfront costs." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-white text-teal-primary rounded-2xl flex items-center justify-center shadow-sm group-hover:medical-gradient group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modern Clinic" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-teal-primary text-white p-10 rounded-[2.5rem] shadow-2xl hidden md:block">
                <p className="text-5xl font-black mb-2">100%</p>
                <p className="text-sm font-bold uppercase tracking-widest opacity-80">Sterilization <br />Guaranteed</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-teal-400 font-bold tracking-[0.2em] uppercase text-sm mb-6">Our Story</h3>
                <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">Building Trust, <br />One Smile at a Time</h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-10">
                  Happy Dental Clinic Vikhroli was founded with a simple mission: to provide world-class dental care that is accessible to everyone. We believe in building long-term relationships with our patients based on transparency, trust, and exceptional results.
                </p>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-500/20 text-teal-400 rounded-xl flex items-center justify-center">
                      <Users size={24} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">10,000+</p>
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Patients Served</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-500/20 text-teal-400 rounded-xl flex items-center justify-center">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">Vikhroli</p>
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Prime Location</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=400&h=500" alt="Clinic" className="rounded-3xl w-full h-64 object-cover" referrerPolicy="no-referrer" />
                  <div className="bg-teal-500 p-8 rounded-3xl text-center">
                    <Smile size={40} className="mx-auto mb-4" />
                    <p className="font-bold">Happy Patients</p>
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center backdrop-blur-sm">
                    <Award size={40} className="mx-auto mb-4 text-teal-400" />
                    <p className="font-bold">Award Winning</p>
                  </div>
                  <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400&h=500" alt="Equipment" className="rounded-3xl w-full h-64 object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-teal-primary font-bold tracking-[0.2em] uppercase text-sm mb-4">Our Specialists</h3>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Meet Our Expert Team</h2>
              <p className="text-lg text-slate-500">Dedicated professionals committed to providing you with the highest standard of dental care.</p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {DOCTORS.map((doc, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="group bg-white rounded-[2.5rem] p-6 border border-slate-100 hover:border-teal-100 transition-all duration-500 hover:shadow-[0_32px_64px_-16px_rgba(13,148,136,0.1)]"
              >
                <div className="relative rounded-[2rem] overflow-hidden mb-8 aspect-[4/5]">
                  <img 
                    src={doc.image} 
                    alt={doc.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="px-2">
                  <h4 className="text-2xl font-bold text-slate-900 mb-1">{doc.name}</h4>
                  <p className="text-teal-primary font-bold text-sm mb-2">{doc.role}</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">{doc.experience}</p>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 group-hover:text-slate-600 transition-colors">
                    {doc.bio}
                  </p>
                  
                  <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex gap-3">
                      <div className="w-9 h-9 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all cursor-pointer">
                        <MessageSquare size={16} />
                      </div>
                      <div className="w-9 h-9 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all cursor-pointer">
                        <Phone size={16} />
                      </div>
                    </div>
                    <Link to={`/doctor/${doc.id}`} className="text-xs font-bold text-teal-primary uppercase tracking-widest hover:underline">
                      View Profile
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-32 bg-teal-50/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
            <div className="max-w-2xl">
              <h3 className="text-teal-primary font-bold tracking-[0.2em] uppercase text-sm mb-4">Testimonials</h3>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">What Our Patients Say</h2>
              <p className="text-lg text-slate-500 leading-relaxed">Join thousands of happy patients who have transformed their smiles at Happy Dental Clinic.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-teal-100 flex items-center gap-6">
              <div className="text-5xl font-black text-slate-900">4.9</div>
              <div className="h-12 w-px bg-slate-100"></div>
              <div>
                <div className="flex text-yellow-400 mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={18} className="fill-current" />)}
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">400+ Google Reviews</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 relative group transition-all duration-500 hover:shadow-2xl hover:shadow-teal-900/5"
              >
                <div className="absolute -top-5 left-10 w-12 h-12 medical-gradient rounded-2xl flex items-center justify-center text-white shadow-lg shadow-teal-900/20">
                  <MessageSquare size={20} />
                </div>
                <div className="flex text-yellow-400 mb-6 mt-2">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-current" />)}
                </div>
                <p className="text-slate-600 italic mb-8 leading-relaxed text-lg">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-50 text-teal-primary rounded-full flex items-center justify-center font-bold text-lg">
                      {review.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{review.name}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Verified Patient</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="medical-gradient rounded-[4rem] p-12 lg:p-24 text-white text-center relative overflow-hidden shadow-[0_40px_80px_-20px_rgba(13,148,136,0.3)]">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-10"></div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 max-w-3xl mx-auto"
            >
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">Ready to Transform <br />Your Smile?</h2>
              <p className="text-teal-100 text-xl mb-12 leading-relaxed opacity-90">Book your consultation today and take the first step towards a healthier, more confident you.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  onClick={() => setIsPopupOpen(true)}
                  className="bg-white text-teal-primary px-12 py-6 rounded-2xl text-xl font-bold shadow-2xl hover:scale-105 transition-transform flex items-center justify-center gap-3"
                >
                  Book Appointment <ArrowRight size={24} />
                </button>
                <a 
                  href="tel:+919975780529"
                  className="bg-teal-700/30 backdrop-blur-md text-white border-2 border-white/20 px-12 py-6 rounded-2xl text-xl font-bold hover:bg-teal-700/50 transition-all flex items-center justify-center gap-3"
                >
                  <Phone size={24} /> Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h3 className="text-teal-primary font-bold tracking-[0.2em] uppercase text-sm mb-4">Find Us</h3>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-10">Visit Our Clinic</h2>
              
              <div className="space-y-10 mb-12">
                <div className="flex gap-8 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-white text-teal-primary rounded-2xl flex items-center justify-center shadow-sm group-hover:medical-gradient group-hover:text-white transition-all duration-300">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Our Location</h4>
                    <p className="text-slate-500 leading-relaxed text-lg">
                      Happy Dental Clinic, 210/3034, 1st Floor,<br />
                      Above Happy Medical, Near Sangli Bank,<br />
                      Tagore Nagar, Vikhroli East,<br />
                      Mumbai, Maharashtra 400083
                    </p>
                    <a 
                      href="https://www.google.com/maps/dir/?api=1&destination=Happy+Dental+Clinic+Vikhroli" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-teal-primary font-bold mt-4 hover:underline"
                    >
                      Open in Google Maps <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-white text-teal-primary rounded-2xl flex items-center justify-center shadow-sm group-hover:medical-gradient group-hover:text-white transition-all duration-300">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Phone Number</h4>
                    <a href="tel:+919975780529" className="text-3xl font-black text-teal-primary hover:text-teal-700 transition-colors">
                      +91 9975780529
                    </a>
                    <p className="text-slate-400 text-sm mt-1 font-bold">Available for emergencies 24/7</p>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-white text-teal-primary rounded-2xl flex items-center justify-center shadow-sm group-hover:medical-gradient group-hover:text-white transition-all duration-300">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Clinic Timings</h4>
                    <p className="text-slate-500 text-lg">Open Daily: 10:00 AM - 10:00 PM</p>
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs font-bold mt-4">
                      <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                      Currently Open
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.000000000000!2d72.9288888!3d19.1111111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7c7c7c7c7c7%3A0x7c7c7c7c7c7c7c7c!2sHappy%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-[20px] border-white/10 rounded-[2.5rem]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-500/20">
                  <Stethoscope className="text-white w-7 h-7" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white leading-tight tracking-tight">Happy Dental Clinic</h1>
                  <p className="text-xs font-bold text-teal-400 uppercase tracking-[0.3em]">हैप्पी डेंटल क्लिनिक</p>
                </div>
              </div>
              <p className="text-slate-400 max-w-md mb-10 text-lg leading-relaxed">
                Your trusted partner for advanced dental care in Vikhroli East. We are committed to excellence, patient comfort, and creating beautiful smiles that last a lifetime.
              </p>
              <div className="flex gap-5">
                {['facebook', 'instagram', 'twitter', 'linkedin'].map(social => (
                  <div key={social} className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-teal-500 hover:scale-110 transition-all cursor-pointer border border-white/5">
                    <Star size={20} className="text-white/40 group-hover:text-white" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-8 text-white">Quick Links</h4>
              <ul className="space-y-5 text-slate-400">
                {['Home', 'Services', 'About', 'Doctors', 'Reviews', 'Contact'].map(item => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => scrollToSection(e, item.toLowerCase())} 
                      className="hover:text-teal-400 transition-colors flex items-center gap-2 group"
                    >
                      <div className="w-1 h-1 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-8 text-white">Contact Details</h4>
              <ul className="space-y-6 text-slate-400">
                <li className="flex gap-4 group">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-all">
                    <MapPin size={18} />
                  </div>
                  <span className="text-sm leading-relaxed">Tagore Nagar, Vikhroli East, Mumbai 400083, Maharashtra</span>
                </li>
                <li className="flex gap-4 group">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-all">
                    <Phone size={18} />
                  </div>
                  <span className="text-sm">+91 9975780529</span>
                </li>
                <li className="flex gap-4 group">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-all">
                    <Clock size={18} />
                  </div>
                  <span className="text-sm">Daily: 10 AM - 10 PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm font-medium">
            <p>© {new Date().getFullYear()} Happy Dental Clinic Vikhroli. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919975780529"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-float group"
      >
        <MessageSquare size={32} className="fill-current" />
        <div className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
        </div>
      </a>

      {/* Appointment Modal */}
      <AnimatePresence>
        {isPopupOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPopupOpen(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl bg-white rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)]"
            >
              <button 
                onClick={() => setIsPopupOpen(false)}
                className="absolute top-6 right-6 w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-all z-10"
              >
                <X size={24} />
              </button>

              <div className="h-full overflow-hidden">
                <AppointmentBooking 
                  onClose={() => setIsPopupOpen(false)}
                  onConfirm={(data) => {
                    console.log("Appointment Confirmed:", data);
                    setIsPopupOpen(false);
                    alert(`Thank you! Your ${data.type === 'video' ? 'Video' : 'In-Clinic'} appointment is confirmed for ${data.date.toLocaleDateString()} at ${data.time}.`);
                  }}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Lead Generation Popup */}
      <LeadPopup delay={1500} />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor/:id" element={<DoctorProfile />} />
      </Routes>
    </Router>
  );
}
