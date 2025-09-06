import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Database, Cloud, Wrench } from "lucide-react";

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
    icon: <Code className="w-5 h-5" />,
    skills: [
      "Machine Learning (ML)",
      "Data Structures & Algorithms (DSA)",
      "Object-Oriented Programming (OOP)",
      "Data Science"
    ]
  }
];

export function Skills() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-16">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {category.icon}
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Card className="border-0 shadow-lg max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Currently Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Advanced Data Structures & Algorithms</Badge>
                  <Badge variant="secondary">Object-Oriented Programming</Badge>
                  <Badge variant="secondary">Database Management Systems</Badge>
                  <Badge variant="secondary">Operating Systems</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}