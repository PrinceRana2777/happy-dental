import React, { useState, useEffect, useRef } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Video, 
  MapPin, 
  ChevronDown, 
  ChevronUp,
  Check,
  Info,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TimeSlot {
  time: string;
  available: boolean;
}

interface AppointmentBookingProps {
  onConfirm: (data: any) => void;
  onClose: () => void;
  doctorName?: string;
}

const AppointmentBooking: React.FC<AppointmentBookingProps> = ({ onConfirm, onClose, doctorName }) => {
  const [consultationType, setConsultationType] = useState<'in-clinic' | 'video'>('in-clinic');
  const [selectedDate, setSelectedDate] = useState<number>(0);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Generate next 14 days
  const dates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return {
      dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
      dayNumber: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      fullDate: date
    };
  });

  const timeSlots = {
    morning: [
      { time: '09:00 AM', available: true },
      { time: '09:30 AM', available: false },
      { time: '10:00 AM', available: true },
      { time: '10:30 AM', available: true },
      { time: '11:00 AM', available: true },
      { time: '11:30 AM', available: false },
    ],
    afternoon: [
      { time: '12:00 PM', available: true },
      { time: '12:30 PM', available: true },
      { time: '01:00 PM', available: true },
      { time: '02:00 PM', available: false },
      { time: '03:00 PM', available: true },
      { time: '04:00 PM', available: true },
    ],
    evening: [
      { time: '05:00 PM', available: true },
      { time: '06:00 PM', available: true },
      { time: '07:00 PM', available: true },
      { time: '08:00 PM', available: true },
      { time: '09:00 PM', available: true },
    ]
  };

  useEffect(() => {
    // Simulate loading skeleton
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, [selectedDate, consultationType]);

  const handleConfirm = () => {
    if (selectedTime) {
      const dateStr = dates[selectedDate].fullDate.toLocaleDateString('en-US', { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
      });
      
      const message = `Hello, I would like to book an appointment at ${selectedTime}.`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/919975780529?text=${encodedMessage}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');

      onConfirm({
        type: consultationType,
        date: dates[selectedDate].fullDate,
        time: selectedTime
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col h-full max-h-[90vh] md:max-h-none">
      {/* Header */}
      <div className="p-6 border-b border-slate-100">
        <h2 className="text-2xl font-bold text-slate-900 mb-1">Book Appointment</h2>
        <p className="text-sm text-slate-500">Select your preferred slot for consultation</p>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
        {/* Consultation Type Toggle */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Consultation Type</h3>
            <div className="flex items-center gap-1 text-[10px] font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded-full">
              <Info size={12} />
              <span>Video saves 20% time</span>
            </div>
          </div>
          <div className="relative p-1 bg-slate-100 rounded-2xl flex items-center">
            <motion.div 
              className="absolute h-[calc(100%-8px)] bg-white rounded-xl shadow-md z-0"
              initial={false}
              animate={{ 
                x: consultationType === 'in-clinic' ? 0 : '100%',
                width: '50%'
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <button 
              onClick={() => setConsultationType('in-clinic')}
              className={`relative z-10 flex-1 py-3 flex items-center justify-center gap-2 text-sm font-bold transition-colors ${consultationType === 'in-clinic' ? 'text-teal-primary' : 'text-slate-500'}`}
            >
              <MapPin size={18} className={consultationType === 'in-clinic' ? 'animate-pulse' : ''} />
              In-Clinic
            </button>
            <button 
              onClick={() => setConsultationType('video')}
              className={`relative z-10 flex-1 py-3 flex items-center justify-center gap-2 text-sm font-bold transition-colors ${consultationType === 'video' ? 'text-teal-primary' : 'text-slate-500'}`}
            >
              <Video size={18} className={consultationType === 'video' ? 'animate-pulse' : ''} />
              Video Consult
            </button>
          </div>
        </section>

        {/* Date Selection */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Select Date</h3>
            <span className="text-xs font-bold text-slate-400">{dates[selectedDate].month} {new Date().getFullYear()}</span>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar -mx-2 px-2">
            {dates.map((date, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedDate(idx)}
                className={`flex-shrink-0 w-16 h-20 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 border-2 ${
                  selectedDate === idx 
                    ? "border-teal-primary bg-teal-50 shadow-[0_0_20px_rgba(13,148,136,0.15)]" 
                    : "border-slate-100 bg-white hover:border-teal-200"
                }`}
              >
                <span className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${selectedDate === idx ? "text-teal-600" : "text-slate-400"}`}>
                  {date.dayName}
                </span>
                <span className={`text-xl font-black ${selectedDate === idx ? "text-teal-primary" : "text-slate-900"}`}>
                  {date.dayNumber}
                </span>
              </motion.button>
            ))}
          </div>
        </section>

        {/* Time Slots */}
        <section className="space-y-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Available Slots</h3>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">12 Slots Left</span>
            </div>
          </div>

          {isLoading ? (
            <div className="space-y-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="space-y-3">
                  <div className="h-4 w-20 bg-slate-100 rounded animate-pulse"></div>
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3].map(j => (
                      <div key={j} className="h-10 rounded-full bg-slate-50 animate-pulse"></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {/* Morning Slots */}
              <motion.div variants={itemVariants} className="space-y-3">
                <div className="flex items-center gap-2 text-slate-400">
                  <Clock size={14} />
                  <span className="text-xs font-bold uppercase tracking-widest">Morning</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.morning.map((slot, idx) => (
                    <TimeSlotButton 
                      key={idx} 
                      slot={slot} 
                      isSelected={selectedTime === slot.time}
                      onClick={() => setSelectedTime(slot.time)}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Afternoon Slots */}
              <motion.div variants={itemVariants} className="space-y-3">
                <div className="flex items-center gap-2 text-slate-400">
                  <Clock size={14} />
                  <span className="text-xs font-bold uppercase tracking-widest">Afternoon</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.afternoon.slice(0, 3).map((slot, idx) => (
                    <TimeSlotButton 
                      key={idx} 
                      slot={slot} 
                      isSelected={selectedTime === slot.time}
                      onClick={() => setSelectedTime(slot.time)}
                    />
                  ))}
                  <AnimatePresence>
                    {isExpanded && timeSlots.afternoon.slice(3).map((slot, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                      >
                        <TimeSlotButton 
                          slot={slot} 
                          isSelected={selectedTime === slot.time}
                          onClick={() => setSelectedTime(slot.time)}
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Evening Slots */}
              <motion.div variants={itemVariants} className="space-y-3">
                <div className="flex items-center gap-2 text-slate-400">
                  <Clock size={14} />
                  <span className="text-xs font-bold uppercase tracking-widest">Evening</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.evening.map((slot, idx) => (
                    <TimeSlotButton 
                      key={idx} 
                      slot={slot} 
                      isSelected={selectedTime === slot.time}
                      onClick={() => setSelectedTime(slot.time)}
                    />
                  ))}
                </div>
              </motion.div>

              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full py-2 flex items-center justify-center gap-2 text-teal-primary font-bold text-sm hover:bg-teal-50 rounded-xl transition-colors"
              >
                {isExpanded ? "Show Less" : "Show More"}
                {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            </motion.div>
          )}
        </section>
      </div>

      {/* Footer CTA */}
      <div className="p-6 border-t border-slate-100 bg-white/80 backdrop-blur-md sticky bottom-0">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={!selectedTime}
          onClick={handleConfirm}
          className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl transition-all duration-300 ${
            selectedTime 
              ? "medical-gradient text-white shadow-teal-900/20 animate-pulse-subtle" 
              : "bg-slate-100 text-slate-400 cursor-not-allowed"
          }`}
        >
          Confirm Appointment
          <ArrowRight size={20} />
        </motion.button>
        <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-4">
          No payment required now
        </p>
      </div>
    </div>
  );
};

const TimeSlotButton: React.FC<{ slot: TimeSlot, isSelected: boolean, onClick: () => void }> = ({ slot, isSelected, onClick }) => {
  return (
    <motion.button
      whileHover={slot.available ? { scale: 1.05, y: -2 } : {}}
      whileTap={slot.available ? { scale: 0.95 } : {}}
      disabled={!slot.available}
      onClick={onClick}
      className={`relative py-3 px-2 rounded-xl text-xs font-bold transition-all duration-300 border-2 overflow-hidden ${
        !slot.available 
          ? "bg-slate-50 border-slate-50 text-slate-300 cursor-not-allowed" 
          : isSelected
            ? "medical-gradient border-teal-primary text-white shadow-lg shadow-teal-900/20"
            : "bg-white border-slate-100 text-slate-600 hover:border-teal-200 hover:shadow-md"
      }`}
    >
      {isSelected && (
        <motion.div 
          layoutId="glow"
          className="absolute inset-0 bg-white/20 blur-xl"
        />
      )}
      <span className="relative z-10">{slot.time}</span>
      {isSelected && <Check size={12} className="absolute top-1 right-1 text-white/80" />}
    </motion.button>
  );
};

export default AppointmentBooking;
