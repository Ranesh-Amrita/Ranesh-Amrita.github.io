import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Database, Cloud, Wrench, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="w-5 h-5" />,
    skills: ["Python", "C++", "HTML", "CSS", "JavaScript", "Java basics"]
  },
  {
    title: "Cloud Platforms",
    icon: <Cloud className="w-5 h-5" />,
    skills: ["AWS (Amazon Web Services)", "Cloud Fundamentals"]
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5" />,
    skills: ["MySQL (currently learning)"]
  },
  {
    title: "Tools & Version Control",
    icon: <Wrench className="w-5 h-5" />,
    skills: ["Git", "GitHub", "ChatGPT"]
  },
  {
    title: "Operating Systems",
    icon: <Wrench className="w-5 h-5" />,
    skills: ["Windows", "Linux", "MacOS"]
  },
  {
    title: "Core Concepts",
    icon: <Brain className="w-5 h-5" />,
    skills: [
      "Machine Learning (ML)",
      "Data Structures & Algorithms (DSA)",
      "Object-Oriented Programming (OOP)",
      "Data Science"
    ]
  }
];

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-secondary/10 to-transparent rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="relative inline-block">
              Technical Skills
              <motion.div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </h2>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group relative overflow-hidden h-full">
                  {/* Hover gradient effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  <CardHeader className="relative z-10">
                    <CardTitle className="flex items-center gap-3 group-hover:text-primary transition-colors duration-300">
                      <motion.div 
                        className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: [0, -10, 10, 0] 
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {category.icon}
                      </motion.div>
                      <motion.span
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {category.title}
                      </motion.span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: idx * 0.1 + index * 0.1 
                          }}
                          whileHover={{ 
                            scale: 1.05, 
                            y: -2,
                            transition: { duration: 0.2 }
                          }}
                          viewport={{ once: true }}
                        >
                          <Badge 
                            variant="outline" 
                            className="text-xs hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 cursor-default"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>

                  {/* Animated corner decoration */}
                  <motion.div
                    className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-br from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100"
                    animate={{ 
                      scale: [0, 1, 0],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: index * 0.2 
                    }}
                  />
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-xl max-w-2xl mx-auto hover:shadow-2xl transition-shadow duration-500 group relative overflow-hidden">
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center justify-center gap-2 group-hover:text-primary transition-colors duration-300">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Brain className="w-5 h-5" />
                  </motion.div>
                  Currently Learning
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2 justify-center">
                  {[
                    "Advanced Data Structures & Algorithms",
                    "Object-Oriented Programming",
                    "Database Management Systems",
                    "Operating Systems"
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                      viewport={{ once: true }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="hover:bg-secondary/80 transition-colors duration-200 cursor-default relative overflow-hidden group/badge"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.5 }}
                        />
                        <span className="relative z-10">{skill}</span>
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}