/* eslint-disable @typescript-eslint/no-explicit-any */
// /src/services/clientService.ts
import axios from "axios";

const apiUrl = "/api/clients";

export const clientService = {
  getAllClients: async () => {
    const response = await axios.get(apiUrl);
    return response.data;
  },
  getClientById: async (id: string) => {
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
  },
  createClient: async (clientData: any) => {
    const response = await axios.post(apiUrl, clientData);
    return response.data;
  },
  updateClient: async (id: string, clientData: any) => {
    const response = await axios.put(`${apiUrl}/${id}`, clientData);
    return response.data;
  },
};
