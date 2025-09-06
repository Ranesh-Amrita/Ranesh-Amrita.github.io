import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code2 } from "lucide-react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Static Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/5 to-primary/5" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="relative">
            <motion.h1 
              className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Ranesh Chandra Katta
              <motion.div
                className="absolute -top-4 -right-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-8 h-8 text-primary/60" />
              </motion.div>
            </motion.h1>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            Computer Science Student & Code Enthusiast
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Hey there! 👋 I'm a CS student who loves turning ideas into reality through code. When I'm not debugging at 2 AM, you'll find me exploring the latest in AI/ML, building cool projects, or competing in hackathons. Always up for learning something new and collaborating on exciting projects!
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="px-8 relative overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                View My Projects
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="lg" className="px-8 relative overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex justify-center gap-6"
          >
            {[
              { icon: Github, href: "https://github.com/RaneshChandraKatta", color: "hover:bg-gray-100 dark:hover:bg-gray-800", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/RaneshChandraKatta", color: "hover:bg-blue-50 dark:hover:bg-blue-900/20", label: "LinkedIn" },
              { icon: Code2, href: "https://leetcode.com/raneshchandrakatta", color: "hover:bg-orange-50 dark:hover:bg-orange-900/20", label: "LeetCode" },
              { icon: Mail, href: "mailto:katta.raneshchandra@gmail.com", color: "hover:bg-green-50 dark:hover:bg-green-900/20", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.icon !== Mail ? "_blank" : undefined}
                rel={social.icon !== Mail ? "noopener noreferrer" : undefined}
                className={`p-3 rounded-full bg-secondary transition-all duration-300 ${social.color} group relative`}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <social.icon className="w-6 h-6" />
                
                {/* Tooltip */}
                <motion.div
                  className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap"
                  initial={{ opacity: 0, y: 5 }}
                  whileHover={{ opacity: 1, y: 0 }}
                >
                  {social.label}
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-primary/20 rounded-full" />
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg" />
    </section>
  );
}