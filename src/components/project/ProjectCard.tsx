// /src/components/project/ProjectCard.tsx
import React from "react";
import { Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
  onEdit: () => void;
  onDelete: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="p-4 border rounded shadow-md flex flex-col">
      <h2 className="font-semibold text-lg">{project.title}</h2>
      <p className="text-sm text-gray-600">Budget: ${project.budget}</p>
      <p className="text-sm text-gray-600">Deadline: {project.deadline}</p>
      <p className="text-sm text-gray-600">Status: {project.status}</p>
      <div className="mt-4 flex justify-between">
        <button onClick={onEdit} className="text-blue-500">
          Edit
        </button>
        <button onClick={onDelete} className="text-red-500">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
