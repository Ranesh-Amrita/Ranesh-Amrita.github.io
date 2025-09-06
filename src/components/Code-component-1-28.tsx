import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";

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
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-16">Featured Projects</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{project.domain}</p>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors cursor-pointer">
                        <Github className="w-4 h-4" />
                      </div>
                      <div className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors cursor-pointer">
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div>
                    <h4 className="mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm">
                      <span className="font-medium text-primary">Impact:</span>{" "}
                      <span className="text-muted-foreground">{project.impact}</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}