import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Home, 
  User, 
  FolderOpen, 
  Code, 
  GraduationCap, 
  Award, 
  Mail,
  ChevronUp
} from "lucide-react";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: FolderOpen },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Awards", href: "#certifications", icon: Award },
  { name: "Contact", href: "#contact", icon: Mail },
];

export function BottomNavigation() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ 
        y: 0, 
        opacity: 1 
      }}
      transition={{ 
        duration: 0.3, 
        ease: "easeInOut" 
      }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      {/* Glass Navigation Bar */}
      <motion.nav
        className="bg-background/70 backdrop-blur-xl border border-border/50 rounded-2xl px-4 py-3 shadow-2xl"
        style={{
          backdropFilter: "blur(20px)",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "1rem",
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center gap-2">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href.substring(1);
            
            return (
              <motion.a
                key={item.name}
                href={item.href}
                className={`relative group flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? 'text-primary bg-primary/10' 
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                }`}
                whileHover={{ 
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.1 
                }}
              >
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                    layoutId="activeIndicator"
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 30 
                    }}
                  />
                )}

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <item.icon className="w-5 h-5 mb-1" />
                </motion.div>

                {/* Label */}
                <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {item.name}
                </span>

                {/* Hover background */}
                <motion.div
                  className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  initial={false}
                />
              </motion.a>
            );
          })}

          {/* Divider */}
          <div className="w-px h-8 bg-border/30 mx-1" />

          {/* Scroll to top button */}
          <motion.button
            onClick={scrollToTop}
            className="flex flex-col items-center justify-center p-2 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 group"
            whileHover={{ 
              y: -2,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronUp className="w-5 h-5 mb-1" />
            </motion.div>
            <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Top
            </span>
          </motion.button>
        </div>

        {/* Glass reflection effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          }}
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
          }}
        />
      </motion.nav>

      {/* Enhanced glass styles for dark mode */}
      <style jsx>{`
        .dark nav {
          background: rgba(0, 0, 0, 0.2) !important;
          border-color: rgba(255, 255, 255, 0.1) !important;
        }
      `}</style>
    </motion.div>
  );
}