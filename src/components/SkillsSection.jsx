import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend & Mobile
  { name: "Flutter", category: "frontend" },
  { name: "HTML/CSS", category: "frontend" },
  { name: "Android Studio", category: "frontend" },
  { name: "VS Code", category: "frontend" },
  { name: "Unity", category: "frontend" },
  { name: "React", category: "frontend" },

  // Backend & Cloud
  { name: "Firebase", category: "backend" },
  { name: "SQL", category: "backend" },
  { name: "MySQL", category: "backend" },
  { name: "AWS", category: "backend" },
  { name: "Google Cloud", category: "backend" },
  { name: "GitLab/GitHub", category: "backend" },
  { name: "IntelliJ IDEA", category: "backend" },

  // Languages
 { name: "Dart", category: "languages" },
  { name: "JavaScript", category: "languages" },
  { name: "Kotlin", category: "languages" },
  { name: "Java", category: "languages" },
  { name: "Python", category: "languages" },
  { name: "C++", category: "languages" },
  { name: "C#", category: "languages" },

  // Design
  { name: "Figma", category: "design" },
  { name: "Canva", category: "design" },
  { name: "Photoshop", category: "design" },
  { name: "Blender", category: "design" },
  { name: "Adobe Illustrator", category: "design" },

];

const categories = ["all", "frontend", "backend", "languages", "design"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card px-4 py-5 rounded-lg shadow-xs card-hover text-center"
            >
              <h3 className="font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};