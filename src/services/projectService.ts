/* eslint-disable @typescript-eslint/no-explicit-any */
// /src/services/projectService.ts
import axios from "axios";

const apiUrl = "/api/projects";

export const projectService = {
  getAllProjects: async () => {
    const response = await axios.get(apiUrl);
    return response.data;
  },
  getProjectById: async (id: string) => {
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
  },
  createProject: async (projectData: any) => {
    const response = await axios.post(apiUrl, projectData);
    return response.data;
  },
  updateProject: async (id: string, projectData: any) => {
    const response = await axios.put(`${apiUrl}/${id}`, projectData);
    return response.data;
  },
  deleteProject: async (id: string) => {
    const response = await axios.delete(`${apiUrl}/${id}`);
    return response.data;
  },
};
