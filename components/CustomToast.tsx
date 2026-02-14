import { toast } from "sonner";
import { Cinzel } from "next/font/google";
import { Crown, ShieldAlert, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["700"] });

export const showDivineToast = (
  title: string, 
  message: string, 
  type: "success" | "error" = "success"
) => {
  const isError = type === "error";
  const primaryColor = isError ? "#ff4d4d" : "#d5be89";

  toast.custom((t) => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, x: 50 }}
      // Responsive Width: Full width on mobile (with margin), fixed on PC
      className="sonner-glass-toast relative overflow-hidden w-[calc(100vw-2rem)] md:w-full md:max-w-md p-4 md:p-5"
    >
      {/* Decorative Corner Accents (PC only for extra detail) */}
      <div className="hidden md:block absolute top-0 left-0 w-2 h-2 border-t border-l border-[#d5be89]/40 rounded-tl-lg" />
      <div className="hidden md:block absolute top-0 right-0 w-2 h-2 border-t border-r border-[#d5be89]/40 rounded-tr-lg" />

      {/* Internal Glass Shimmer */}
      <div className="glass-inner-shimmer absolute inset-0 pointer-events-none" />

      <div className="relative flex items-center gap-3 md:gap-5 z-10">
        {/* Emblem Section - Slightly smaller on mobile */}
        <div className="relative shrink-0 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
          <div 
            className="absolute inset-0 blur-xl rounded-full opacity-30 animate-pulse" 
            style={{ backgroundColor: primaryColor }}
          />
          <div 
            className="relative p-2 md:p-2.5 border rounded-full bg-[#0a0502]/90 shadow-inner"
            style={{ borderColor: `${primaryColor}40` }}
          >
            {isError ? (
              <ShieldAlert className="text-[#ff4d4d] drop-shadow-[0_0_8px_#ff4d4d]" size={22} />
            ) : (
              <Crown className="text-[#f3e2b9] drop-shadow-[0_0_8px_#d5be89]" size={22} />
            )}
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col flex-1 min-w-0 gap-0.5">
          <h3 
            className={`${cinzel.className} text-[12px] md:text-[14px] tracking-[0.15em] uppercase truncate`}
            style={{ color: isError ? "#ff9999" : "#f3e2b9" }}
          >
            {title}
          </h3>
          <p className="text-[10px] md:text-[12px] leading-tight text-[#d5be89]/90 font-medium line-clamp-2 md:line-clamp-none">
            {message}
          </p>
        </div>

        {/* Close Interaction - Enhanced for touch */}
        <motion.button 
          whileTap={{ scale: 0.8 }}
          onClick={() => toast.dismiss(t)}
          className="p-2 -mr-2 text-[#d5be89]/40 hover:text-white transition-colors"
        >
          <X size={18} strokeWidth={2.5} />
        </motion.button>
      </div>
      
      {/* Progress Bar with Metallic Gradient */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 5, ease: "linear" }}
        className="absolute bottom-0 left-0 h-[3px] w-full origin-left"
        style={{ 
          background: `linear-gradient(to right, transparent, ${primaryColor}, transparent)` 
        }}
      />
    </motion.div>
  ), {
    duration: 5000,
    position: "top-right",
  });
};