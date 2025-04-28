// /src/components/client/ClientForm.tsx
import React, { useState } from "react";
import { Client } from "../../types/client";

interface ClientFormProps {
  onSubmit: (client: Client) => void;
  initialClient?: Client; // For editing an existing client
}

const ClientForm: React.FC<ClientFormProps> = ({ onSubmit, initialClient }) => {
  const [name, setName] = useState(initialClient?.name || "");
  const [email, setEmail] = useState(initialClient?.email || "");
  const [phone, setPhone] = useState(initialClient?.phone || "");
  const [company, setCompany] = useState(initialClient?.company || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name,
      email,
      phone,
      company,
      _id: "",
      user: "",
      createdAt: "",
      updatedAt: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Client Name"
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full p-2 border rounded"
      />
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Company (optional)"
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded"
      >
        Save Client
      </button>
    </form>
  );
};

export default ClientForm;
