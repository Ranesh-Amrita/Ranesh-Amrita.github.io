import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { BottomNavigation } from "./components/BottomNavigation";

export default function App() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Certifications />
      <Contact />
      <BottomNavigation />
    </div>
  );
}