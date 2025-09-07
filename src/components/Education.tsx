import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Calendar, MapPin, Trophy } from "lucide-react";

export function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="education" className="py-20 bg-secondary/10 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto"
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
              Education
              <motion.div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </h2>
          </motion.div>
          
          <motion.div 
            className="space-y-8 relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Timeline Line */}
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 2, delay: 0.5 }}
              viewport={{ once: true }}
            />

            {/* Bachelor's Degree */}
            <motion.div variants={cardVariants}>
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden ml-16">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Timeline Dot */}
                <motion.div
                  className="absolute -left-20 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 0.3 }}
                />

                <CardHeader className="relative z-10">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <GraduationCap className="w-6 h-6" />
                    </motion.div>
                    <div className="flex-1">
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <CardTitle className="group-hover:text-primary transition-colors duration-300">
                          Bachelor of Technology in Computer Science & Engineering
                        </CardTitle>
                        <p className="text-muted-foreground mt-1">Amrita Vishwa Vidyapeetham, Amaravati, Andhra Pradesh</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>2023 - 2027</span>
                          </div>
                          <motion.div 
                            className="flex items-center gap-1"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Trophy className="w-4 h-4 text-yellow-500" />
                            <span>CGPA: 8.17/10.0</span>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <motion.p 
                    className="text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    Expected Graduation: May 2027. Currently pursuing a comprehensive computer science education 
                    with focus on artificial intelligence, machine learning, and software development.
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Intermediate */}
            <motion.div variants={cardVariants}>
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden ml-16">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Timeline Dot */}
                <motion.div
                  className="absolute -left-20 top-8 w-4 h-4 bg-secondary rounded-full border-4 border-background shadow-lg"
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 0.3 }}
                />

                <CardHeader className="relative z-10">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="p-3 rounded-lg bg-secondary/10 text-primary group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300"
                      whileHover={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <GraduationCap className="w-6 h-6" />
                    </motion.div>
                    <div className="flex-1">
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <CardTitle className="group-hover:text-primary transition-colors duration-300">
                          Intermediate (MPC)
                        </CardTitle>
                        <p className="text-muted-foreground mt-1">Narayana Junior College, Vijayawada, Andhra Pradesh</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>2021 - 2023</span>
                          </div>
                          <motion.div 
                            className="flex items-center gap-1"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Trophy className="w-4 h-4 text-yellow-500" />
                            <span>Marks: 952/1000 (~95%)</span>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Mathematics 150/150 (100%)",
                      "Physics 60/60 (100%)",
                      "Chemistry 60/60 (100%)",
                      "Inter 1st Year"
                    ].map((badge, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        viewport={{ once: true }}
                      >
                        <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                          {badge}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Secondary School */}
            <motion.div variants={cardVariants}>
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden ml-16">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Timeline Dot */}
                <motion.div
                  className="absolute -left-20 top-8 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg"
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 0.3 }}
                />

                <CardHeader className="relative z-10">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="p-3 rounded-lg bg-accent/10 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300"
                      whileHover={{ rotate: [0, -15, 15, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <GraduationCap className="w-6 h-6" />
                    </motion.div>
                    <div className="flex-1">
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <CardTitle className="group-hover:text-primary transition-colors duration-300">
                          Secondary School Certificate (SSC)
                        </CardTitle>
                        <p className="text-muted-foreground mt-1">SLATI THE SCHOOL, Vijayawada, Andhra Pradesh</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>2021</span>
                          </div>
                          <motion.div 
                            className="flex items-center gap-1"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Trophy className="w-4 h-4 text-yellow-500" />
                            <span>Marks: 600/600 (100%)</span>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <motion.p 
                    className="text-muted-foreground"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    Based on pre-final marks during Corona. Achieved perfect score across all subjects.
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}