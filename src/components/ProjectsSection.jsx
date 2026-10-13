import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MuscleLogic",
    description: "Android and IOS mobile application for tracking workout routines. Designed for coach/client interaction and geared for complex bodybuilding programming",
    image: "/projects/ml/i1.png",
    tags: ["Dart", "Flutter", "VS Code", "Firebase", "Figma",],
    demoUrl: "#",
  },
  {
    id: 2,
    title: "MyLittleGarden",
    description: "Gardening simulation game where players plant, water, and harvest plants in a peaceful garden setting. With simple controls and a relaxing atmosphere, the game lets players grow their garden at their own pace while unlocking new seed types over time",
    image: "/projects/mlgd/i1.png",
    tags: ["C#", "Unity", "Blender",],
    demoUrl: "https://www.youtube.com/watch?v=n0n08KBfRMc",
  },
  {
    id: 3,
    title: "PawsHome",
    description: "A cross-platform social media application for Android, iOS, and desktop platforms designed specifically for dog and cat lovers to share photos within a pet-focused community",
    image: "/projects/ph/i1.png",
    tags: ["Dart", "Flutter", "VS Code",],
    demoUrl: "#",
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
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap justify-center gap-2 mb-4">
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
                <div className="mt-auto pt-4 flex justify-start">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    aria-label={`View ${project.title} demo`}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
          >
          </a>
        </div> */}
      </div>
    </section>
  );
};
