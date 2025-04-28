// /src/pages/clients/CreateClientPage.tsx
import React, { useState } from "react";
import { clientService } from "../../services/clientService";
import { useNavigate } from "react-router-dom";

const CreateClientPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await clientService.createClient({ name, email, phone });
      navigate("/clients");
    } catch (error) {
      console.error("Error creating client:", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create Client</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4 p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mb-4 p-2 border rounded"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Create Client
        </button>
      </form>
    </div>
  );
};

export default CreateClientPage;
