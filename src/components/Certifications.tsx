import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award, Calendar, ExternalLink, Trophy, Star } from "lucide-react";

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "August 2025 – 2028",
    type: "Cloud",
    description: "Cloud fundamentals and AWS services knowledge validation",
    badgeUrl: "https://www.credly.com/badges/061d1cf5-7879-4906-a961-13b01356f576/public_url"
  },
  {
    title: "Oracle Database SQL Certified Associate",
    issuer: "Oracle Corporation",
    date: "2024",
    type: "Database",
    description: "MySQL database management and SQL query optimization certification",
    badgeUrl: "#"
  }
];

const achievements = [
  {
    title: "Odoo Hackathon 2025 - Finalist",
    organization: "Odoo",
    date: "2025",
    type: "Competition",
    description: "Application Programming Achievement",
    certificateUrl: "https://drive.google.com/file/d/1AVQSSpF2oTJn6s55uNyHwtq4323ODiR/view"
  },
  {
    title: "HACKEREARTH 2025 - Finalist",
    organization: "HackerEarth",
    date: "2025", 
    type: "Competition",
    description: "Innovation and Technology Competition",
    certificateUrl: "https://drive.google.com/file/d/1kMnEm20xSAvrql_LjzV0uoJeK5OqLEWs/view"
  }
];

export function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
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

  return (
    <section id="certifications" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ 
          duration: 15, 
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
              Certifications & Achievements
              <motion.div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </h2>
          </motion.div>
          
          <motion.div 
            className="grid lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Certifications Column */}
            <motion.div variants={cardVariants}>
              <motion.h3 
                className="mb-8 flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  whileHover={{ rotate: [0, -15, 15, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Award className="w-5 h-5 text-primary" />
                </motion.div>
                Certifications
              </motion.h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ y: -5 }}
                    viewport={{ once: true }}
                  >
                    <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                      {/* Animated background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      
                      {/* Success glow */}
                      <motion.div
                        className="absolute top-2 right-2"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                      >
                        <Star className="w-4 h-4 text-yellow-400" />
                      </motion.div>

                      <CardHeader className="relative z-10">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <motion.div
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <CardTitle className="group-hover:text-primary transition-colors duration-300">
                                {cert.title}
                              </CardTitle>
                              <p className="text-muted-foreground mt-1">{cert.issuer}</p>
                              <div className="flex items-center gap-2 mt-2">
                                <Calendar className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">{cert.date}</span>
                              </div>
                            </motion.div>
                          </div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Badge variant="secondary" className="relative overflow-hidden">
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.5 }}
                              />
                              <span className="relative z-10">{cert.type}</span>
                            </Badge>
                          </motion.div>
                        </div>
                      </CardHeader>
                      <CardContent className="relative z-10">
                        <motion.p 
                          className="text-muted-foreground mb-4"
                          initial={{ opacity: 0.8 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {cert.description}
                        </motion.p>
                        <motion.a 
                          href={cert.badgeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm group/link"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="group-hover/link:animate-none"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </motion.div>
                          View Badge
                        </motion.a>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements Column */}
            <motion.div variants={cardVariants}>
              <motion.h3 
                className="mb-8 flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  whileHover={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Trophy className="w-5 h-5 text-primary" />
                </motion.div>
                Competition Achievements
              </motion.h3>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ y: -5 }}
                    viewport={{ once: true }}
                  >
                    <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                      {/* Animated background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-bl from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      
                      {/* Achievement badge */}
                      <motion.div
                        className="absolute top-2 right-2"
                        animate={{ 
                          y: [0, -5, 0],
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                      >
                        <Trophy className="w-4 h-4 text-yellow-500" />
                      </motion.div>

                      <CardHeader className="relative z-10">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <motion.div
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <CardTitle className="group-hover:text-primary transition-colors duration-300">
                                {achievement.title}
                              </CardTitle>
                              <p className="text-muted-foreground mt-1">{achievement.organization}</p>
                              <div className="flex items-center gap-2 mt-2">
                                <Calendar className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">{achievement.date}</span>
                              </div>
                            </motion.div>
                          </div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Badge variant="outline" className="relative overflow-hidden">
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.5 }}
                              />
                              <span className="relative z-10">{achievement.type}</span>
                            </Badge>
                          </motion.div>
                        </div>
                      </CardHeader>
                      <CardContent className="relative z-10">
                        <motion.p 
                          className="text-muted-foreground mb-4"
                          initial={{ opacity: 0.8 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {achievement.description}
                        </motion.p>
                        <motion.a 
                          href={achievement.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm group/link"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="group-hover/link:animate-none"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </motion.div>
                          View Certificate
                        </motion.a>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Additional Information */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-xl max-w-2xl mx-auto hover:shadow-2xl transition-shadow duration-500 group relative overflow-hidden">
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-center flex items-center justify-center gap-2 group-hover:text-primary transition-colors duration-300">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Star className="w-5 h-5" />
                  </motion.div>
                  Additional Information
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="mb-3">Academic Performance</h4>
                    <p className="text-muted-foreground text-sm">
                      Consistent high performance with 100% in SSC and 95% in Intermediate
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="mb-3">Professional Interests</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {["Edge AI", "Cloud-native Infrastructures", "Open-source Contribution"].map((interest, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          viewport={{ once: true }}
                        >
                          <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                            {interest}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
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