import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Star, 
  CheckCircle2, 
  Phone, 
  MessageSquare, 
  Award, 
  Stethoscope, 
  Clock, 
  MapPin, 
  ChevronRight,
  ShieldCheck,
  Heart,
  Smile,
  Sparkles,
  Users,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DOCTORS, Doctor } from '../data/doctors';
import AppointmentBooking from './AppointmentBooking';

const DoctorProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'about' | 'specializations' | 'reviews'>('about');

  useEffect(() => {
    const foundDoctor = DOCTORS.find(d => d.id === id);
    if (foundDoctor) {
      setDoctor(foundDoctor);
    } else {
      // If doctor not found, go back home
      navigate('/');
    }
    window.scrollTo(0, 0);
  }, [id, navigate]);

  if (!doctor) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-white selection:bg-teal-100 selection:text-teal-900"
    >
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-slate-600 hover:text-teal-primary transition-colors font-bold"
            >
              <ArrowLeft size={20} />
              <span className="hidden sm:inline">Back to Home</span>
            </button>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 medical-gradient rounded-lg flex items-center justify-center shadow-lg shadow-teal-900/20">
                <Stethoscope className="text-white w-4 h-4" />
              </div>
              <h1 className="text-lg font-bold text-slate-900 leading-tight">{doctor.name}</h1>
            </div>
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="medical-gradient text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-xl shadow-teal-900/20 hover:shadow-teal-900/30 hover:-translate-y-0.5 transition-all"
            >
              Book Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-50 via-white to-white opacity-70"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border-8 border-white">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 z-20 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-50 hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-current" />)}
                  </div>
                  <span className="text-sm font-bold text-slate-900">4.9/5 Rating</span>
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Trusted by 2000+ Patients</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-teal-100">
                <ShieldCheck size={16} />
                <span>Verified Specialist</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-4">
                {doctor.name}
              </h2>
              <p className="text-2xl font-bold text-teal-primary mb-6">{doctor.role}</p>
              <div className="flex items-center gap-4 text-slate-500 mb-10">
                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                  <Award size={18} className="text-teal-primary" />
                  <span className="text-sm font-bold">{doctor.experience}</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                  <MapPin size={18} className="text-teal-primary" />
                  <span className="text-sm font-bold">Vikhroli East</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="medical-gradient text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl shadow-teal-900/20 hover:shadow-teal-900/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                >
                  Book Appointment <ChevronRight size={20} />
                </button>
                <a 
                  href="tel:+919975780529"
                  className="bg-white text-slate-900 border-2 border-slate-100 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-slate-50 hover:border-slate-200 transition-all flex items-center justify-center gap-3 shadow-sm"
                >
                  <Phone size={20} className="text-teal-primary" /> Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Left Column: Details */}
            <div className="lg:col-span-2 space-y-16">
              {/* About */}
              <motion.div variants={sectionVariants} className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-50 text-teal-primary rounded-xl flex items-center justify-center">
                    <Users size={20} />
                  </div>
                  About {doctor.name}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {doctor.about}
                </p>
              </motion.div>

              {/* Specializations */}
              <motion.div variants={sectionVariants} className="space-y-8">
                <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-50 text-teal-primary rounded-xl flex items-center justify-center">
                    <Sparkles size={20} />
                  </div>
                  Specializations
                </h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  {doctor.specializations.map((spec, idx) => (
                    <div key={idx} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-teal-100 transition-all group">
                      <div className="w-12 h-12 bg-white text-teal-primary rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:medical-gradient group-hover:text-white transition-all">
                        {spec.icon}
                      </div>
                      <p className="font-bold text-slate-900">{spec.title}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Experience & Qualifications */}
              <motion.div variants={sectionVariants} className="space-y-8">
                <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-50 text-teal-primary rounded-xl flex items-center justify-center">
                    <Award size={20} />
                  </div>
                  Qualifications & Training
                </h3>
                <div className="space-y-4">
                  {doctor.qualifications.map((qual, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 bg-white border border-slate-100 rounded-2xl">
                      <div className="mt-1 w-6 h-6 bg-teal-50 text-teal-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={14} />
                      </div>
                      <p className="text-slate-700 font-medium">{qual}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Treatments Offered */}
              <motion.div variants={sectionVariants} className="space-y-8">
                <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-50 text-teal-primary rounded-xl flex items-center justify-center">
                    <Stethoscope size={20} />
                  </div>
                  Treatments Offered
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {doctor.treatments.map((treatment, idx) => (
                    <div key={idx} className="flex items-center justify-between p-5 bg-white border border-slate-100 rounded-2xl hover:border-teal-100 transition-all group">
                      <span className="font-bold text-slate-700">{treatment}</span>
                      <ArrowRight size={16} className="text-slate-300 group-hover:text-teal-primary transition-colors" />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                {/* Availability Card */}
                <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl"></div>
                  <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <Clock size={20} className="text-teal-400" />
                    Clinic Timings
                  </h4>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-400">Mon - Sat</span>
                      <span className="font-bold">10:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-400">Sunday</span>
                      <span className="font-bold">By Appointment</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full py-4 bg-teal-500 hover:bg-teal-400 text-white rounded-2xl font-bold transition-all shadow-lg shadow-teal-900/20"
                  >
                    Book Appointment Now
                  </button>
                </div>

                {/* Contact Info */}
                <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100">
                  <h4 className="text-xl font-bold text-slate-900 mb-6">Contact Info</h4>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-white text-teal-primary rounded-xl flex items-center justify-center shadow-sm">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Location</p>
                        <p className="text-sm font-bold text-slate-700">Tagore Nagar, Vikhroli East</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-white text-teal-primary rounded-xl flex items-center justify-center shadow-sm">
                        <Phone size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Phone</p>
                        <p className="text-sm font-bold text-slate-700">+91 9975780529</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-slate-900">Patient Testimonials</h3>
            <p className="text-slate-500 mt-2">What patients say about their experience with {doctor.name}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {doctor.reviews.map((review, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-current" />)}
                </div>
                <p className="text-slate-600 italic mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-teal-50 text-teal-primary rounded-full flex items-center justify-center font-bold">
                      {review.name[0]}
                    </div>
                    <span className="font-bold text-slate-900">{review.name}</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="medical-gradient rounded-[3rem] p-12 text-white text-center shadow-2xl shadow-teal-900/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Book Your Consultation?</h2>
            <p className="text-teal-100 mb-10 max-w-xl mx-auto">Get expert dental care from {doctor.name}. Our team will assist you with the booking process.</p>
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="bg-white text-teal-primary px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition-transform"
            >
              Book Appointment Now
            </button>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-slate-100 z-40">
        <button 
          onClick={() => setIsBookingOpen(true)}
          className="w-full py-4 medical-gradient text-white rounded-2xl font-bold text-lg shadow-xl"
        >
          Book Appointment
        </button>
      </div>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/919975780529"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-8 z-40 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-float"
      >
        <MessageSquare size={28} className="fill-current" />
      </a>

      {/* Appointment Modal */}
      <AnimatePresence>
        {isBookingOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingOpen(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl bg-white rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)]"
            >
              <button 
                onClick={() => setIsBookingOpen(false)}
                className="absolute top-6 right-6 w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-all z-10"
              >
                <ArrowLeft size={24} />
              </button>

              <div className="h-full overflow-hidden">
                <AppointmentBooking 
                  doctorName={doctor.name}
                  onClose={() => setIsBookingOpen(false)}
                  onConfirm={(data) => {
                    console.log("Appointment Confirmed:", data);
                    setIsBookingOpen(false);
                  }}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default DoctorProfile;
