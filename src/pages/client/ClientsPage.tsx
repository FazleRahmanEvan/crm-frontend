/* eslint-disable @typescript-eslint/no-explicit-any */
// /src/pages/clients/ClientsPage.tsx
import React, { useEffect, useState } from "react";
import { clientService } from "../../services/clientService";
import ClientCard from "../../components/client/ClientCard";

const ClientsPage = () => {
  const [clients, setClients] = useState<any[]>([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const fetchedClients = await clientService.getAllClients();
        setClients(fetchedClients);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };

    fetchClients();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Clients</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {clients.map((client) => (
          <ClientCard
            key={client._id}
            client={client}
            onEdit={function (): void {
              throw new Error("Function not implemented.");
            }}
            onDelete={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientsPage;
