import ProjectForm from "../../components/project/ProjectForm";

const CreateProjectPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Create New Project</h1>
      <ProjectForm
        onSubmit={(project) => {
          // Handle the submitted project here
          console.log(project);
        }}
      />
    </div>
  );
};

export default CreateProjectPage;
