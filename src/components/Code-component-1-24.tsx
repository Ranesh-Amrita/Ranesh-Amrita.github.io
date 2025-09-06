import { Card, CardContent } from "./ui/card";

export function About() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-16">About Me</h2>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="mb-6">Professional Summary</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    AWS Certified Cloud Practitioner with hands-on experience in full-stack development and proven track record in competitive programming and hackathons. I specialize in building innovative solutions using AI/ML, web development, and cloud technologies.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Seeking SDE/ML or entry-level opportunities to leverage technical skills and contribute to software development projects through continuous learning, collaboration and delivery.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="mb-3">Current Focus</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Advanced Data Structures & Algorithms</li>
                      <li>• Object-Oriented Programming</li>
                      <li>• Database Management Systems</li>
                      <li>• Operating Systems</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="mb-3">Interests</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Edge AI & Cloud-native Infrastructures</li>
                      <li>• Open-source Contribution</li>
                      <li>• Academic Excellence</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}