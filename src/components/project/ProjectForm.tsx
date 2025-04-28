import React, { useState } from "react";
import { Project } from "../../types/project";

interface ProjectFormProps {
  onSubmit: (project: Project) => void;
  initialProject?: Project;
}

const ProjectForm: React.FC<ProjectFormProps> = ({
  onSubmit,
  initialProject,
}) => {
  const [title, setTitle] = useState(initialProject?.title || "");
  const [budget, setBudget] = useState(initialProject?.budget.toString() || "");
  const [deadline, setDeadline] = useState(initialProject?.deadline || "");
  const [status, setStatus] = useState<Project["status"]>(
    initialProject?.status || "Not Started"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      budget: Number(budget),
      deadline,
      status,
      _id: "",
      clientId: "",
      user: "",
      createdAt: "",
      updatedAt: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Project Title"
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        placeholder="Budget"
        className="w-full p-2 border rounded"
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as Project["status"])}
        className="w-full p-2 border rounded"
      >
        <option value="Not Started">Not Started</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded"
      >
        Save Project
      </button>
    </form>
  );
};

export default ProjectForm;
