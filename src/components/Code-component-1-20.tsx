import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Ranesh Chandra Katta
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Computer Science Student & AI/ML Enthusiast
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Dedicated Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning with a strong foundation in data structures, algorithms, and cloud computing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="px-8">
              View My Projects
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/RaneshChandraKatta" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/RaneshChandraKatta" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:raneshchandra@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
}