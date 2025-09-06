import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Code, Lightbulb, Target } from "lucide-react";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-center mb-16 relative"
          >
            About Me
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.h2>
          
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <CardContent className="p-8 md:p-12 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div
                        className="p-2 rounded-lg bg-primary/10"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Target className="w-5 h-5 text-primary" />
                      </motion.div>
                      <h3>Professional Summary</h3>
                    </div>
                    
                    <motion.p 
                      className="text-muted-foreground leading-relaxed mb-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    >
                      I'm that person who gets genuinely excited about solving problems with code! 🚀 Whether it's building full-stack applications, diving deep into machine learning algorithms, or setting up cloud infrastructure, I love the whole journey from "What if we could..." to "Look what we built!"
                    </motion.p>
                    
                    <motion.p 
                      className="text-muted-foreground leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    >
                      I'm always eager to learn, collaborate, and contribute to meaningful projects. If you're working on something cool or need a teammate who brings both technical skills and enthusiasm, let's chat! 💬
                    </motion.p>
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-8"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div
                          className="p-2 rounded-lg bg-secondary/20"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                        >
                          <Code className="w-5 h-5 text-primary" />
                        </motion.div>
                        <h4>Current Focus</h4>
                      </div>
                      <motion.ul 
                        className="space-y-3"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        {[
                          "Advanced Data Structures & Algorithms",
                          "Object-Oriented Programming", 
                          "Database Management Systems",
                          "Operating Systems"
                        ].map((item, index) => (
                          <motion.li
                            key={index}
                            variants={listItemVariants}
                            className="text-muted-foreground flex items-center group/item cursor-default"
                            whileHover={{ x: 5 }}
                          >
                            <motion.span 
                              className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"
                              whileHover={{ scale: 1.5 }}
                            />
                            <span className="group-hover/item:text-foreground transition-colors duration-200">
                              {item}
                            </span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div
                          className="p-2 rounded-lg bg-accent/20"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Lightbulb className="w-5 h-5 text-primary" />
                        </motion.div>
                        <h4>Interests</h4>
                      </div>
                      <motion.ul 
                        className="space-y-3"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        {[
                          "Edge AI & Cloud-native Infrastructures",
                          "Open-source Contribution",
                          "Academic Excellence"
                        ].map((item, index) => (
                          <motion.li
                            key={index}
                            variants={listItemVariants}
                            className="text-muted-foreground flex items-center group/item cursor-default"
                            whileHover={{ x: 5 }}
                          >
                            <motion.span 
                              className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0"
                              whileHover={{ scale: 1.5 }}
                            />
                            <span className="group-hover/item:text-foreground transition-colors duration-200">
                              {item}
                            </span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}