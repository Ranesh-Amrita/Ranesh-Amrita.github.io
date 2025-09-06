import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function Education() {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-16">Education</h2>
          
          <div className="space-y-8">
            {/* Bachelor's Degree */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle>Bachelor of Technology in Computer Science & Engineering</CardTitle>
                    <p className="text-muted-foreground mt-1">Amrita Vishwa Vidyapeetham, Amaravati, Andhra Pradesh</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>2023 - 2027</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>CGPA: 8.17/10.0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Expected Graduation: May 2027. Currently pursuing a comprehensive computer science education 
                  with focus on artificial intelligence, machine learning, and software development.
                </p>
              </CardContent>
            </Card>

            {/* Intermediate */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle>Intermediate (MPC)</CardTitle>
                    <p className="text-muted-foreground mt-1">Narayana Junior College, Vijayawada, Andhra Pradesh</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>2021 - 2023</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>Marks: 952/1000 (~95%)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Mathematics 150/150 (100%)</Badge>
                  <Badge variant="outline">Physics 60/60 (100%)</Badge>
                  <Badge variant="outline">Chemistry 60/60 (100%)</Badge>
                  <Badge variant="outline">Inter 1st Year</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Secondary School */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle>Secondary School Certificate (SSC)</CardTitle>
                    <p className="text-muted-foreground mt-1">SLATI THE SCHOOL, Vijayawada, Andhra Pradesh</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>2021</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>Marks: 600/600 (100%)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Based on pre-final marks during Corona. Achieved perfect score across all subjects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}