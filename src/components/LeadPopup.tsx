import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, User, Stethoscope, Send, CheckCircle2 } from 'lucide-react';

interface LeadPopupProps {
  delay?: number; // delay in ms
}

const LeadPopup: React.FC<LeadPopupProps> = ({ delay = 1500 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '+91 ',
    treatment: 'Dental Implants'
  });

  useEffect(() => {
    // Check if popup was already shown in this session
    const hasShown = sessionStorage.getItem('hasShownLeadPopup');
    
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('hasShownLeadPopup', 'true');
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [delay]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Lead Captured:', formData);
    setIsSubmitted(true);
    
    // Auto close after success message
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.startsWith('+91 ')) {
      setFormData({ ...formData, phone: value });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] animate-float"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all z-20"
            >
              <X size={20} />
            </button>

            {/* Header with Gradient */}
            <div className="medical-gradient p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-10"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl border border-white/30">
                  <Stethoscope className="text-white w-8 h-8" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Get a Free Consultation</h2>
                <p className="text-teal-50 text-sm font-medium opacity-90">
                  Book your appointment for Implants, Aligners & Smile Makeover
                </p>
              </div>
              
              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-teal-400/20 rounded-full blur-2xl"></div>
            </div>

            {/* Form Content */}
            <div className="p-8 sm:p-10">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-teal-primary transition-colors">
                        <User size={18} />
                      </div>
                      <input
                        required
                        type="text"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 font-medium focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500/30 transition-all placeholder:text-slate-300"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-teal-primary transition-colors">
                        <Phone size={18} />
                      </div>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 font-medium focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500/30 transition-all"
                      />
                    </div>
                  </div>

                  {/* Treatment Dropdown */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Select Treatment</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-teal-primary transition-colors">
                        <CheckCircle2 size={18} />
                      </div>
                      <select
                        value={formData.treatment}
                        onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                        className="w-full pl-12 pr-10 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 font-medium focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500/30 transition-all appearance-none cursor-pointer"
                      >
                        <option>Dental Implants</option>
                        <option>Clear Aligners</option>
                        <option>Full Mouth Rehab</option>
                        <option>General Consultation</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-5 medical-gradient text-white rounded-2xl font-bold text-lg shadow-xl shadow-teal-900/20 hover:shadow-teal-900/40 transition-all flex items-center justify-center gap-3 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                    <Send size={20} />
                    <span>Submit Request</span>
                  </motion.button>
                  
                  <p className="text-center text-xs text-slate-400 font-medium">
                    We'll call you back within 15 minutes
                  </p>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
                  <p className="text-slate-500">
                    Thank you, <span className="text-teal-primary font-bold">{formData.name}</span>. Our team will contact you shortly on <span className="font-bold">{formData.phone}</span>.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LeadPopup;
