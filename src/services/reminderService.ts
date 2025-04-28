/* eslint-disable @typescript-eslint/no-explicit-any */
// /src/services/reminderService.ts
import axios from "axios";

const apiUrl = "/api/reminders";

export const reminderService = {
  getAllReminders: async () => {
    const response = await axios.get(apiUrl);
    return response.data;
  },
  getReminderById: async (id: string) => {
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
  },
  createReminder: async (reminderData: any) => {
    const response = await axios.post(apiUrl, reminderData);
    return response.data;
  },
  updateReminder: async (id: string, reminderData: any) => {
    const response = await axios.put(`${apiUrl}/${id}`, reminderData);
    return response.data;
  },
  deleteReminder: async (id: string) => {
    const response = await axios.delete(`${apiUrl}/${id}`);
    return response.data;
  },
};
