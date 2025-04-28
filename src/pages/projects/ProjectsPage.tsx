import { useEffect, useState } from "react";
import { projectService } from "../../services/projectService";
import { Project } from "../../types/project";
import ProjectCard from "../../components/project/ProjectCard";

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await projectService.getAllProjects();
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            project={project}
            onEdit={function (): void {
              throw new Error("Function not implemented.");
            }}
            onDelete={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
