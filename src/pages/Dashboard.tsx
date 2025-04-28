// /src/pages/dashboard/DashboardPage.tsx
import React, { useEffect, useState } from "react";
import { clientService } from "../services/clientService";
import { projectService } from "../services/projectService";
import { reminderService } from "../services/reminderService";
const DashboardPage = () => {
  const [clientCount, setClientCount] = useState<number>(0);
  const [projectCount, setProjectCount] = useState<number>(0);
  const [reminderCount, setReminderCount] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clients = await clientService.getAllClients();
        const projects = await projectService.getAllProjects();
        const reminders = await reminderService.getAllReminders();

        setClientCount(clients.length);
        setProjectCount(projects.length);
        setReminderCount(reminders.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">CRM</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Total Clients</h3>
          <p>{clientCount}</p>
        </div>
        <div className="p-4 border rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Total Projects</h3>
          <p>{projectCount}</p>
        </div>
        <div className="p-4 border rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Total Reminders</h3>
          <p>{reminderCount}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
