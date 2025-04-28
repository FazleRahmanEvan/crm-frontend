/* eslint-disable @typescript-eslint/no-explicit-any */
// /src/services/interactionService.ts
import axios from "axios";

const apiUrl = "/api/interactions";

export const interactionService = {
  getAllInteractions: async () => {
    const response = await axios.get(apiUrl);
    return response.data;
  },
  getInteractionById: async (id: string) => {
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
  },
  createInteraction: async (interactionData: any) => {
    const response = await axios.post(apiUrl, interactionData);
    return response.data;
  },
  updateInteraction: async (id: string, interactionData: any) => {
    const response = await axios.put(`${apiUrl}/${id}`, interactionData);
    return response.data;
  },
  deleteInteraction: async (id: string) => {
    const response = await axios.delete(`${apiUrl}/${id}`);
    return response.data;
  },
};
