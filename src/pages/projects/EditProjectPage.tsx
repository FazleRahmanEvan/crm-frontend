/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams } from "react-router-dom";
import ProjectForm from "../../components/project/ProjectForm";

const EditProjectPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Edit Project</h1>
      <ProjectForm projectId={id!} onSubmit={(_project) => {}} />
    </div>
  );
};

export default EditProjectPage;
