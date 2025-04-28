// /src/components/client/ClientCard.tsx
import React from "react";
import { Client } from "../../types/client"; // Assuming the Client type exists

interface ClientCardProps {
  client: Client;
  onEdit: () => void;
  onDelete: () => void;
}

const ClientCard: React.FC<ClientCardProps> = ({
  client,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="p-4 border rounded shadow-md flex flex-col">
      <h2 className="font-semibold text-lg">{client.name}</h2>
      <p className="text-sm text-gray-600">{client.email}</p>
      <p className="text-sm text-gray-600">{client.phone}</p>
      <p className="text-sm text-gray-600">{client.company}</p>
      <div className="mt-4 flex justify-between">
        <button onClick={onEdit} className="text-blue-500">
          Edit
        </button>
        <button onClick={onDelete} className="text-red-500">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ClientCard;
