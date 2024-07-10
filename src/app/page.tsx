"use client";

import React, { useState, useEffect } from "react";
import AddClient from "./components/AddClient";
import ClientList from "./components/ClientList";
import axios from "axios";

interface Client {
  id: number;
  name: string;
  email: string;
}

const Home: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);

  const fetchClients = async () => {
    try {
      const response = await axios.get("http://3.130.35.128:8086/clients");
      setClients(response.data);
    } catch (error) {
      console.error("Error fetching clients:", error);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold">ClientesFeliz Management In Real Time</h1>
      <AddClient onAddClient={fetchClients} />
      <button className="bg-blue-500 text-white p-2 mt-2" onClick={fetchClients}>
        List Clients
      </button>
      <ClientList clients={clients} onUpdateClient={fetchClients} />
    </div>
  );
};

export default Home;
