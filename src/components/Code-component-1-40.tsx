import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "August 2025 – 2028",
    type: "Certification",
    description: "Cloud fundamentals and AWS services knowledge validation",
    badgeUrl: "https://www.credly.com/badges/061d1cf5-7879-4906-a961-13b01356f576/public_url"
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
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-16">Certifications & Achievements</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Certifications Column */}
            <div>
              <h3 className="mb-8 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Certifications
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="group-hover:text-primary transition-colors">
                            {cert.title}
                          </CardTitle>
                          <p className="text-muted-foreground mt-1">{cert.issuer}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{cert.date}</span>
                          </div>
                        </div>
                        <Badge variant="secondary">{cert.type}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{cert.description}</p>
                      <a 
                        href={cert.badgeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Badge
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Achievements Column */}
            <div>
              <h3 className="mb-8 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Competition Achievements
              </h3>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="group-hover:text-primary transition-colors">
                            {achievement.title}
                          </CardTitle>
                          <p className="text-muted-foreground mt-1">{achievement.organization}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{achievement.date}</span>
                          </div>
                        </div>
                        <Badge variant="outline">{achievement.type}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{achievement.description}</p>
                      <a 
                        href={achievement.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Certificate
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-16">
            <Card className="border-0 shadow-lg max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center">Additional Information</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2">Academic Performance</h4>
                    <p className="text-muted-foreground text-sm">
                      Consistent high performance with 100% in SSC and 95% in Intermediate
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2">Professional Interests</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge variant="outline">Edge AI</Badge>
                      <Badge variant="outline">Cloud-native Infrastructures</Badge>
                      <Badge variant="outline">Open-source Contribution</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}