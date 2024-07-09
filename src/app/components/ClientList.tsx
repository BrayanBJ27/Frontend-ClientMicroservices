"use client";

import React, { useState } from "react";
import axios from "axios";

interface Client {
  id: number;
  name: string;
  email: string;
}

interface ClientListProps {
  clients: Client[];
  onUpdateClient: () => void;
}

const ClientList: React.FC<ClientListProps> = ({ clients, onUpdateClient }) => {
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  const [newEmail, setNewEmail] = useState("");

  const handleEdit = (client: Client) => {
    setEditingClient(client);
    setNewEmail(client.email);
  };

  const handleSave = async (client: Client) => {
    try {
      await axios.put(`http://3.129.12.254:8087/clients/${client.id}`, { email: newEmail });
      setEditingClient(null);
      onUpdateClient();
    } catch (error) {
      console.error("Error updating client:", error);
    }
  };

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2">Name</th>
          <th className="py-2">Email</th>
          <th className="py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((client) => (
          <tr key={client.id}>
            <td className="border px-4 py-2">{client.name}</td>
            <td className="border px-4 py-2">
              {editingClient?.id === client.id ? (
                <input
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="border p-2"
                />
              ) : (
                client.email
              )}
            </td>
            <td className="border px-4 py-2">
              {editingClient?.id === client.id ? (
                <button
                  onClick={() => handleSave(client)}
                  className="bg-blue-500 text-white p-2"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(client)}
                  className="bg-yellow-500 text-white p-2"
                >
                  Edit
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClientList;
