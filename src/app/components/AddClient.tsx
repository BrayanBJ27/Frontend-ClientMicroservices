"use client";

import React, { useState } from "react";
import axios from "axios";

interface AddClientProps {
  onAddClient: () => void;
}

const AddClient: React.FC<AddClientProps> = ({ onAddClient }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://3.130.35.128:8085/clients", { name, email });
      onAddClient();
    } catch (error) {
      console.error("Error adding client:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Client Name"
        className="border p-2"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border p-2"
      />
      <button type="submit" className="bg-green-500 text-white p-2">
        Add Clients
      </button>
    </form>
  );
};

export default AddClient;
