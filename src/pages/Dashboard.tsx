/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState<any>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/dashboard`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setDashboardData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDashboardData();
  }, []);

  if (!dashboardData) return <div>Loading...</div>;

  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
            <h2 className="text-lg font-semibold">Total Clients</h2>
            <p className="text-2xl">{dashboardData.totalClients}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
            <h2 className="text-lg font-semibold">Total Projects</h2>
            <p className="text-2xl">{dashboardData.totalProjects}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
            <h2 className="text-lg font-semibold">Reminders Due Soon</h2>
            <p className="text-2xl">{dashboardData.remindersDue}</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Projects by Status</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            {dashboardData.projectsByStatus.map(
              (status: string, index: number) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded shadow"
                >
                  <h3 className="text-lg">{status}</h3>
                  <p className="text-xl">
                    {dashboardData.projectsByStatus[status]}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
