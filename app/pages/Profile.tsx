"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cinzel,
  Montserrat,
  Cormorant_SC,
  Tiro_Devanagari_Sanskrit,
  Rajdhani,
} from "next/font/google";
import {
  User,
  Hash,
  Mail,
  Phone,
  Building,
  Calendar,
  Swords,
  Users,
  Edit2,
  Save,
  Camera,
  LogOut,
  Trophy,
  ChevronRight,
  Music,
  Zap,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";

// --- IMPORT YOUR EVENT DATA HERE ---
// import { eventData } from "@/data/eventData"; 
// For this example, I am using a slice of your provided data below to simulate the import.

// --- FONTS ---
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700", "900"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
const sanskrit = Tiro_Devanagari_Sanskrit({ subsets: ["devanagari"], weight: ["400"] });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["500", "600", "700"] });

// --- MOCK USER DATA ---
const initialProfile = {
  name: "Arjuna The Archer",
  roll: "10100120005",
  email: "arjuna@jeclat.in",
  phone: "+91 98765 43210",
  dept: "Computer Science",
  year: "3rd Year",
  avatar: "https://i.pinimg.com/736x/29/77/63/2977636e76878b27346261c470876483.jpg", 
};

// --- MOCK REGISTERED EVENTS (Mapping your eventData structure) ---
// In a real app, this would come from your backend where you join User Registrations with Event IDs.
const myRegistrations = [
  {
    registrationId: "reg_01",
    status: "Confirmed",
    teammates: ["Bheema", "Yudhishthira"],
    // Mapping the object from your provided eventData
    event: {
        id: "cs-go",
        type: "competitive-event",
        image: "/images/eventImages/cs-go.png", // Using string path for demo
        maxMembers: 5,
        eventInfo: {
            title: "CS-GO",
            description: "Counter-Strike: Global Offensive tournament",
            category: "Day 2",
            venue: "Old Auditorium",
            date: "Not decided"
        }
    }
  },
  {
    registrationId: "reg_02",
    status: "Pending",
    teammates: [], // Solo participation example
    event: {
        id: "flash-mob",
        type: "pre-event",
        image: "/images/eventImages/flash-mob1.jpg",
        maxMembers: 1,
        eventInfo: {
            title: "Flash Mob",
            description: "A thrilling pre-event spectacle.",
            category: "Pre Events",
            venue: "Campus",
            date: "8th March, 2026"
        }
    }
  },
  {
    registrationId: "reg_03",
    status: "Confirmed",
    teammates: ["Draupadi"],
    event: {
        id: "made-for-each-other",
        type: "non-competitive-event",
        image: "/images/eventImages/made-for1.jpg",
        maxMembers: 2,
        eventInfo: {
            title: "Made For Each Other",
            description: "Student competition tests compatibility.",
            category: "Day 2",
            venue: "Old Auditorium",
            date: "Not decided"
        }
    }
  }
];

export default function UserProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(initialProfile);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const toggleEdit = () => setIsEditing(!isEditing);
  const handleSave = () => setIsEditing(false); // Add API save logic here

  return (
    <div className={`relative min-h-screen w-full bg-[#050201] text-[#F2E8CF] overflow-x-hidden selection:bg-yellow-600/30 py-20 px-4 md:px-8`}>
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <Image
            src="/assets/home-bg.png" 
            alt="War Background"
            fill
            className="object-cover opacity-30 blur-[4px]"
            priority
         />
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-30 mix-blend-overlay"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_95%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* --- PAGE HEADER --- */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6 gap-6 backdrop-blur-sm"
        >
            <div>
                <h2 className={`${sanskrit.className} text-yellow-600/80 text-lg mb-1`}>|| स्वागत् महारथी ||</h2>
                <h1 className={`${cinzel.className} text-4xl md:text-5xl font-bold text-white tracking-wide drop-shadow-lg`}>
                    WARRIOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600">DOSSIER</span>
                </h1>
            </div>
            
            <button className="flex items-center gap-2 px-6 py-2.5 bg-red-900/10 border border-red-900/30 rounded-lg hover:bg-red-900/30 hover:border-red-500/50 transition-all text-red-400 group backdrop-blur-md">
                <LogOut size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span className={`${rajdhani.className} uppercase font-bold tracking-wider text-sm`}>Logout</span>
            </button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* --- LEFT COL: EDITABLE PROFILE CARD --- */}
            <div className="lg:col-span-4">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative group"
                >
                    {/* Glass Container */}
                    <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                        {/* Top Gold Shine */}
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent"></div>

                        {/* Actions Header */}
                        <div className="flex justify-end p-4 absolute top-0 right-0 z-20">
                             <button 
                                onClick={isEditing ? handleSave : toggleEdit}
                                className={`p-2 rounded-full border transition-all duration-300 ${isEditing ? 'bg-green-900/20 border-green-500/50 text-green-400 hover:bg-green-900/40' : 'bg-white/5 border-white/10 text-yellow-500 hover:bg-white/10 hover:border-yellow-500/50'}`}
                             >
                                {isEditing ? <Save size={18} /> : <Edit2 size={18} />}
                             </button>
                        </div>

                        <div className="p-8 flex flex-col items-center">
                            {/* Avatar Section */}
                            <div className="relative w-32 h-32 mb-6">
                                <div className={`absolute inset-0 rounded-full border-2 transition-colors duration-300 ${isEditing ? 'border-yellow-500 animate-pulse' : 'border-yellow-600/50'} shadow-[0_0_20px_rgba(234,179,8,0.2)]`}></div>
                                <div className="absolute inset-1 rounded-full overflow-hidden bg-[#1a1a1a]">
                                    <div className="w-full h-full relative">
                                        <Image 
                                            src={profile.avatar} 
                                            alt="Avatar" 
                                            fill 
                                            className={`object-cover transition-all duration-300 ${isEditing ? 'opacity-50 blur-[1px]' : ''}`}
                                        />
                                        <AnimatePresence>
                                            {isEditing && (
                                                <motion.div 
                                                    initial={{ opacity: 0 }} 
                                                    animate={{ opacity: 1 }} 
                                                    exit={{ opacity: 0 }}
                                                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                                                >
                                                    <Camera size={24} className="text-white drop-shadow-md" />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-yellow-600 to-yellow-700 text-black text-[10px] font-bold px-3 py-1 rounded-full border border-yellow-400 shadow-lg font-sans z-10">
                                    LVL 3
                                </div>
                            </div>

                            {/* Name Display/Edit */}
                            <div className="text-center w-full mb-8">
                                {isEditing ? (
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={profile.name}
                                        onChange={handleInputChange}
                                        className={`w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-center text-white font-bold outline-none focus:border-yellow-500/50 mb-2 ${cinzel.className}`}
                                    />
                                ) : (
                                    <h2 className={`${cinzel.className} text-2xl font-bold text-white`}>{profile.name}</h2>
                                )}
                                <p className={`${rajdhani.className} text-yellow-500/60 text-sm tracking-widest uppercase font-bold`}>
                                    Maharathi Class
                                </p>
                            </div>

                            {/* Details Grid */}
                            <div className="w-full space-y-4">
                                <EditableField icon={<Hash size={16} />} label="Roll Number" name="roll" value={profile.roll} isEditing={isEditing} onChange={handleInputChange} />
                                <EditableField icon={<Mail size={16} />} label="Email Scroll" name="email" value={profile.email} isEditing={isEditing} onChange={handleInputChange} />
                                <EditableField icon={<Phone size={16} />} label="Signal" name="phone" value={profile.phone} isEditing={isEditing} onChange={handleInputChange} />
                                <EditableField icon={<Building size={16} />} label="Kingdom" name="dept" value={profile.dept} isEditing={isEditing} onChange={handleInputChange} />
                                <EditableField icon={<Calendar size={16} />} label="Era" name="year" value={profile.year} isEditing={isEditing} onChange={handleInputChange} />
                            </div>

                            {/* Edit Action Buttons */}
                            <AnimatePresence>
                                {isEditing && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="w-full pt-6 flex gap-3"
                                    >
                                        <button onClick={toggleEdit} className="flex-1 py-3 rounded-lg border border-red-500/30 text-red-400 hover:bg-red-900/20 transition-colors font-bold text-xs uppercase tracking-widest">
                                            Cancel
                                        </button>
                                        <button onClick={handleSave} className="flex-1 py-3 rounded-lg bg-yellow-600 text-black hover:bg-yellow-500 transition-colors font-bold text-xs uppercase tracking-widest shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                                            Save Changes
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* --- RIGHT COL: BATTLE LOG (Using Your Event Data Structure) --- */}
            <div className="lg:col-span-8">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-yellow-900/20 rounded-lg border border-yellow-700/30 text-yellow-500">
                             <Swords size={24} />
                        </div>
                        <div>
                            <h3 className={`${cinzel.className} text-2xl text-white font-bold`}>Active Campaigns</h3>
                            <p className={`${montserrat.className} text-xs text-gray-500`}>Manage your registered events</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5">
                        {myRegistrations.map((reg, index) => (
                            <EventCardGlass key={reg.registrationId} registration={reg} index={index} />
                        ))}
                    </div>
                    
                </motion.div>
            </div>

        </div>
      </div>
    </div>
  );
}

// --- SUB-COMPONENTS ---

const EditableField = ({ icon, label, name, value, isEditing, onChange }: any) => {
    return (
        <div className="group">
            <label className={`${rajdhani.className} text-[10px] uppercase font-bold tracking-wider text-gray-500 mb-1 block ml-1`}>{label}</label>
            <div className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${isEditing ? 'bg-black/40 border border-yellow-500/30 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]' : 'bg-white/5 border border-white/5 hover:border-white/20'}`}>
                <div className={`p-2 rounded-lg ${isEditing ? 'text-yellow-500 bg-yellow-900/10' : 'text-gray-400 bg-black/20'}`}>{icon}</div>
                {isEditing ? (
                    <input type="text" name={name} value={value} onChange={onChange} className={`w-full bg-transparent text-white outline-none ${montserrat.className} text-sm`} />
                ) : (
                    <div className={`${montserrat.className} text-sm text-gray-200 truncate w-full`}>{value}</div>
                )}
            </div>
        </div>
    );
};

// --- HELPER: GET ICON BASED ON EVENT TYPE ---
const getEventIcon = (type: string) => {
    switch (type) {
        case "competitive-event": return <Trophy size={20} />;
        case "non-competitive-event": return <Music size={20} />;
        case "pre-event": return <Sparkles size={20} />;
        default: return <Zap size={20} />;
    }
};

// --- HELPER: FORMAT TYPE STRING ---
const formatType = (type: string) => {
    return type.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
};

const EventCardGlass = ({ registration, index }: { registration: any, index: number }) => {
    const { event, status, teammates } = registration;
    
    // Fallback for image (In real code, use the Next.js imported image object from eventData)
    const eventImage = event.image || "/assets/placeholder.jpg"; 

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="group relative bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-0 hover:border-yellow-500/30 transition-all duration-300 overflow-hidden"
        >
            {/* Hover Shine Effect */}
            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 transition-all duration-700 group-hover:left-[100%] pointer-events-none z-20"></div>

            <div className="flex flex-col md:flex-row h-full">
                
                {/* Image Section */}
                <div className="relative w-full md:w-48 h-40 md:h-auto overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 md:bg-gradient-to-r md:from-transparent md:to-black"></div>
                    <Image 
                        // If 'event.image' is a StaticImageData object (from import), NextImage handles it. If string, it handles it.
                        src={eventImage}
                        alt={event.eventInfo.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 z-20">
                        <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-md px-2 py-1 flex items-center gap-1.5 text-yellow-500 text-xs font-bold uppercase tracking-wider">
                            {getEventIcon(event.type)}
                            {formatType(event.type)}
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6 flex flex-col justify-between relative z-10">
                    
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                        <div>
                            <h3 className={`${cinzel.className} text-xl md:text-2xl text-white font-bold group-hover:text-yellow-400 transition-colors`}>
                                {event.eventInfo.title}
                            </h3>
                            <div className="flex items-center gap-4 mt-2 text-gray-400 text-xs">
                                <div className="flex items-center gap-1">
                                    <Calendar size={12} className="text-yellow-600" />
                                    <span>{event.eventInfo.date}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <MapPin size={12} className="text-yellow-600" />
                                    <span>{event.eventInfo.venue}</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Status Badge */}
                        <div className={`self-start flex items-center gap-2 px-3 py-1 rounded-full border bg-black/40 ${status === 'Confirmed' ? 'border-green-800/50 text-green-400' : 'border-yellow-800/50 text-yellow-400'}`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${status === 'Confirmed' ? 'bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]' : 'bg-yellow-400'}`}></div>
                            <span className={`${montserrat.className} text-[10px] font-bold uppercase tracking-wider`}>{status}</span>
                        </div>
                    </div>

                    <div className="h-px w-full bg-white/5 mb-4"></div>

                    {/* Teammates & Footer */}
                    <div className="flex flex-col md:flex-row justify-between items-end gap-4">
                        <div className="w-full">
                             <div className="flex items-center gap-1.5 text-gray-500 mb-2">
                                <Users size={12} />
                                <span className={`${rajdhani.className} text-[10px] uppercase font-bold tracking-widest`}>Squadron</span>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                                {/* Always show self */}
                                <div className="flex items-center gap-1.5 bg-yellow-900/10 border border-yellow-700/30 px-2 py-1 rounded text-yellow-200/80 text-xs">
                                    <span className="w-1 h-1 rounded-full bg-yellow-500"></span> You
                                </div>

                                {teammates.length > 0 ? (
                                    teammates.map((mate: string, i: number) => (
                                        <span key={i} className={`${montserrat.className} text-xs text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/5`}>
                                            {mate}
                                        </span>
                                    ))
                                ) : (
                                    <span className={`${montserrat.className} text-xs text-gray-600 italic px-1`}>
                                        (Solo)
                                    </span>
                                )}
                            </div>
                        </div>

                        <button className="flex items-center gap-1 text-gray-500 hover:text-yellow-500 transition-colors text-xs font-bold uppercase tracking-wider whitespace-nowrap group-btn">
                            View Details <ChevronRight size={14} className="group-btn-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};