import { useState } from "react";
import { cn } from "@/lib/utils";

// Importing skill logos from Simple Icons (via react-icons/si)
const skills = [
  // ---------------- Machine Learning ----------------
  { icon: <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg" width="40" style={{ filter: 'invert(1)' }} />, category: "TechTools", name: "" },
  { icon: <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg" width="40" style={{ filter: 'invert(1)' }} />, category: "TechTools", name: "" },
  { icon: <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/cplusplus.svg" width="40" style={{ filter: 'invert(1)' }} />, category: "TechTools", name: "" },
  { icon: <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/csharp.svg" width="40" style={{ filter: 'invert(1)' }} />, category: "TechTools", name: "" },
  { icon: <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/rust.svg" width="40" style={{ filter: 'invert(1)' }} />, category: "TechTools", name: "" },
  { icon: <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg" width="40" style={{ filter: 'invert(1)' }} />, category: "TechTools", name: "" },
  { icon: <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg" width="40" style={{ filter: 'invert(1)' }} />, category: "TechTools", name: "" },
  { icon: <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg" width="40" style={{ filter: 'invert(1)' }} />, category: "TechTools", name: "" },
  { icon: <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg" width="40" style={{ filter: 'invert(1)' }} />, category: "TechTools", name: "" },
  { icon: <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg" width="40" style={{ filter: 'invert(1)' }} />, category: "TechTools", name: "" },
  { icon: <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg" width="40" style={{ filter: 'invert(1)' }} />, category: "TechTools", name: "" },
  { icon: <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" width="40" style={{ filter: 'invert(1)' }} />, category: "TechTools", name: "" },

  // ---------------- Data Science ----------------
  { icon: <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tensorflow.svg" width="40" style={{ filter: 'invert(1)' }} />, category: "AIML", name: "" },
  { icon: <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/pytorch.svg" width="40" style={{ filter: 'invert(1)' }} />, category: "AIML", name: "" },
  { icon: <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/keras.svg" width="40" style={{ filter: 'invert(1)' }} />, category: "AIML", name: "" },
  { icon: <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/scikitlearn.svg" width="40" style={{ filter: 'invert(1)' }} />, category: "AIML", name: "" },
  { icon: <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/opencv.svg" width="40" style={{ filter: 'invert(1)' }} />, category: "AIML", name: "" },
  { icon: <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/spacy.svg" width="40" style={{ filter: 'invert(1)' }} />, category: "AIML", name: "" },


];




const categories = ["TechTools", "AIML"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("TechTools");

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Category buttons */}
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
              {category.replace(/([A-Z])/g, " $1")}
            </button>
          ))}
        </div>

        {/* Skill icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center justify-center gap-2"
            >
              {skill.icon}
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
