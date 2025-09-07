import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, Code2 } from "lucide-react";

export function Contact() {
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

  return (
    <section id="contact" className="py-20 bg-secondary/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="relative inline-block">
              Get In Touch
              <motion.div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </h2>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3>Let's Connect</h3>
                </div>
                <motion.p 
                  className="text-muted-foreground leading-relaxed mb-8"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  Love what you see? Got an interesting project in mind? Or just want to chat about tech over coffee (virtual or real)? ☕️ 
                  I'm always excited to connect with fellow developers, potential collaborators, or anyone with cool ideas to share!
                </motion.p>
              </motion.div>

              <div className="space-y-6">
                {[
                  { 
                    icon: Mail, 
                    title: "Email", 
                    value: "katta.raneshchandra@gmail.com", 
                    href: "mailto:katta.raneshchandra@gmail.com",
                    color: "hover:bg-green-50 dark:hover:bg-green-900/10"
                  },
                  { 
                    icon: Phone, 
                    title: "Phone", 
                    value: "+91 8520982289",
                    color: "hover:bg-blue-50 dark:hover:bg-blue-900/10"
                  },
                  { 
                    icon: MapPin, 
                    title: "Location", 
                    value: "Vijayawada, Andhra Pradesh, India",
                    color: "hover:bg-purple-50 dark:hover:bg-purple-900/10"
                  },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                    viewport={{ once: true }}
                  >
                    <Card className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 group ${contact.color}`}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <motion.div 
                            className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <contact.icon className="w-5 h-5" />
                          </motion.div>
                          <div>
                            <p className="font-medium group-hover:text-primary transition-colors duration-300">
                              {contact.title}
                            </p>
                            {contact.href ? (
                              <motion.a 
                                href={contact.href}
                                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                                whileHover={{ x: 3 }}
                              >
                                {contact.value}
                              </motion.a>
                            ) : (
                              <p className="text-muted-foreground">{contact.value}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="mb-4 flex items-center gap-2">
                  Follow Me
                  <span className="w-2 h-2 bg-primary rounded-full" />
                </h4>
                <div className="flex gap-4">
                  {[
                    { 
                      icon: Github, 
                      href: "https://github.com/RaneshChandraKatta",
                      color: "hover:bg-gray-100 dark:hover:bg-gray-800",
                      label: "GitHub"
                    },
                    { 
                      icon: Linkedin, 
                      href: "https://www.linkedin.com/in/RaneshChandraKatta",
                      color: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
                      label: "LinkedIn"
                    },
                    { 
                      icon: Code2, 
                      href: "https://leetcode.com/raneshchandrakatta",
                      color: "hover:bg-orange-50 dark:hover:bg-orange-900/20",
                      label: "LeetCode"
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg bg-secondary transition-all duration-300 ${social.color} group relative`}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -3,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <social.icon className="w-5 h-5" />
                      
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
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-500 group relative overflow-hidden">
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <CardHeader className="relative z-10">
                  <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                    <Send className="w-5 h-5" />
                    Send me a message
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 relative z-10">
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div 
                      className="space-y-2"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Your first name"
                        className="transition-all duration-200 focus:shadow-lg" 
                      />
                    </motion.div>
                    <motion.div 
                      className="space-y-2"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Your last name"
                        className="transition-all duration-200 focus:shadow-lg" 
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="space-y-2"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com"
                      className="transition-all duration-200 focus:shadow-lg" 
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-2"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="What's this about?"
                      className="transition-all duration-200 focus:shadow-lg" 
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-2"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me more about your project or opportunity..."
                      rows={6}
                      className="transition-all duration-200 focus:shadow-lg resize-none" 
                    />
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="w-full relative overflow-hidden group/btn" size="lg">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                        className="relative z-10 flex items-center"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </motion.div>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Footer */}
      <motion.div 
        className="border-t border-border mt-20 pt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center text-muted-foreground"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <p>&copy; 2025 Ranesh Chandra Katta. All rights reserved.</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}