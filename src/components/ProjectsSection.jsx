import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Adaptive Traffic Control",
    description: "Developing AI-powered traffic signal system to optimize timings using real-time vehicle detection and adaptive control algorithms.",
    image: "/projects/project1.png",
    tags: ["Yolo", "SUMO", "OpenCV"],
    githubUrl: "#",
  },
  {
    id: 2,
    title: "COVID Insight",
    description:
      "Created interactive COVID-19 dashboards delivering real-time insights on cases, recoveries, and vaccination trends.",
    image: "/projects/project2.png",
    tags: ["Python", "Streamlit", "Ploty.js"],
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Fake News Detection",
    description:
      "Developed ML pipeline for fake news detection, optimizing performance through preprocessing, vectorization, and multi-model evaluation.",
    image: "/projects/project3.png",
    tags: ["Python", "NLTK", "scikit"],
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects, each built with precision, innovation, and a focus on real-world AI/ML applications and usability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">

                    <a
                      href={project.githubUrl}
                      target="blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      {/* <Github size={20} /> */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>





        {/* <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/vvndsz"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div> */}
      </div>
    </section>
  );
};
