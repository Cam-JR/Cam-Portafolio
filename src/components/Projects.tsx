import projects from "../lib/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Proyectos</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}
