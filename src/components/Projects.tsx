import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, Zap } from "lucide-react";

const projects = [
  {
    title: "LeetCode Browser",
    domain: "Software Development | Web Automation",
    description: "Built a lightweight custom browser for LeetCode problem navigation with integrated APIs/web scraping to fetch problems, difficulty level, tags, and solutions.",
    features: [
      "Search, filter, and bookmark functionality for better problem tracking",
      "Reduced time in navigating problems by 30–40%",
      "Improved structured practice workflow"
    ],
    technologies: ["Python", "Flask", "Streamlit", "BeautifulSoup", "Selenium", "SQLite"],
    impact: "Reduced navigation time by 30-40%, improved structured practice"
  },
  {
    title: "Customer Segmentation",
    domain: "Machine Learning | Data Analytics", 
    description: "Applied unsupervised learning to segment customers for food delivery apps, helping businesses understand different customer behaviors for improved recommendations and retention.",
    features: [
      "Analyzed >10,000 transactions (purchase history, frequency, spending score)",
      "Applied K-Means, DBSCAN, Hierarchical Clustering algorithms",
      "Visualized results using PCA + t-SNE for dimensionality reduction",
      "Evaluated clusters with Silhouette Score"
    ],
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
    impact: "Identified 4-5 distinct customer groups (loyal high spenders, discount seekers, occasional users)"
  },
  {
    title: "Helmet Detection",
    domain: "Deep Learning | Computer Vision | AI Safety",
    description: "Developed a real-time helmet detection system for road safety authorities to monitor riders and reduce accidents and fatalities.",
    features: [
      "Trained CNN and tested YOLOv5 for real-time detection",
      "Preprocessed images with OpenCV (resizing, augmentation, normalization)",
      "Deployed model for live video stream detection using camera feeds",
      "Achieved ~90% accuracy in helmet detection"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "YOLOv5", "OpenCV"],
    impact: "90% accuracy in helmet detection, useful for traffic monitoring and safety enforcement"
  },
  {
    title: "Image Source Detector", 
    domain: "AI | Computer Vision | Forensics",
    description: "Created an AI system to detect the source of images (real vs AI-generated) addressing the rise of deepfakes and AI-generated content for security and authenticity verification.",
    features: [
      "Collected dataset of real images, GAN-generated images, and AI-modified samples", 
      "Used CNN-based classifiers (ResNet, EfficientNet) for binary classification",
      "Explored metadata + pixel-level patterns and GAN artifacts",
      "Deployed as web app for image upload and source prediction"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Flask", "Streamlit"],
    impact: "Classified images with 85-90% accuracy, extensible to fake news detection and forensic analysis"
  }
];

export function Projects() {
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-secondary/10 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
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
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="relative inline-block">
              Featured Projects
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
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg relative overflow-hidden h-full">
                  {/* Card Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100"
                    style={{ padding: '1px' }}
                    initial={{ backgroundPosition: '0% 50%' }}
                    animate={{ backgroundPosition: '100% 50%' }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-full h-full bg-card rounded-lg" />
                  </motion.div>

                  <CardHeader className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <CardTitle className="group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                            <motion.div
                              whileHover={{ rotate: 180 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Zap className="w-5 h-5" />
                            </motion.div>
                            {project.title}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">{project.domain}</p>
                        </motion.div>
                      </div>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                        <motion.div
                          className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors cursor-pointer"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github className="w-4 h-4" />
                        </motion.div>
                        <motion.div
                          className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors cursor-pointer"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6 relative z-10">
                    <motion.p 
                      className="text-muted-foreground leading-relaxed"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.description}
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="mb-3 flex items-center gap-2">
                        Key Features
                        <motion.div
                          className="w-1 h-1 bg-primary rounded-full"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            className="text-sm text-muted-foreground flex items-start group/feature"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            whileHover={{ x: 5 }}
                          >
                            <motion.span 
                              className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"
                              whileHover={{ scale: 1.5 }}
                            />
                            <span className="group-hover/feature:text-foreground transition-colors duration-200">
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                          >
                            <Badge variant="secondary" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="pt-4 border-t border-border"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-sm">
                        <span className="font-medium text-primary">Impact:</span>{" "}
                        <span className="text-muted-foreground">{project.impact}</span>
                      </p>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}