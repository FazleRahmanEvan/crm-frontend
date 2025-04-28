import React, { useState, useEffect } from "react";
import { Project } from "../../types/project";
import { clientService } from "../../services/clientService";

interface ProjectFormProps {
  onSubmit: (project: Project) => void;
  initialProject?: Project;
  projectId?: string; // Add projectId as an optional prop
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
  const [clientId, setClientId] = useState<string>(
    initialProject?.clientId || ""
  );
  const [clients, setClients] = useState<{ _id: string; name: string }[]>([]);

  // Fetch clients when component mounts
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const clientData = await clientService.getAllClients();
        setClients(clientData);
      } catch (error) {
        console.error("Failed to fetch clients", error);
      }
    };
    fetchClients();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      budget: Number(budget), // Ensure budget is always a number
      deadline,
      status,
      _id: initialProject?._id || "", // If updating, keep _id
      clientId,
      user: "", // Add user if necessary (or pass it as needed)
      createdAt: "", // Add createdAt if necessary
      updatedAt: "", // Add updatedAt if necessary
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
      <select
        value={clientId}
        onChange={(e) => setClientId(e.target.value)}
        className="w-full p-2 border rounded"
        required
      >
        <option value="">Select Client</option>
        {clients.map((client) => (
          <option key={client._id} value={client._id}>
            {client.name}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded"
      >
        {initialProject ? "Update Project" : "Create Project"}
      </button>
    </form>
  );
};

export default ProjectForm;
