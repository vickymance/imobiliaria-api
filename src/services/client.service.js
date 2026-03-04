import { clients } from "../database/database.js";
import { createClient } from "../models/client.model.js";

export function addClient(data) {
  const newClient = createClient({
    id: Date.now().toString(),
    notes: [],
    nextUpdate: null,
    propertyId: null,
    ...data
  });

  clients.push(newClient);
  return newClient;
}

export function getAllClients() {
  return clients;
}

export function getClientById(id) {
  const client = clients.find(c => c.id === id);

  if (!client) {
    throw new Error("Cliente não encontrado");
  }

  return client;
}

export function updateClient(id, data) {
  const client = getClientById(id);
  Object.assign(client, data);
  return client;
}

export function addClientNote(id, note) {
  const client = getClientById(id);

  const newNote = {
    id: Date.now().toString(),
    date: new Date(),
    description: note
  };

  client.notes.push(newNote);

  return client;
}

export function setNextUpdate(id, date) {
  const client = getClientById(id);
  client.nextUpdate = date;
  return client;
}

export function linkPropertyToClient(id, propertyId) {
  const client = getClientById(id);
  client.propertyId = propertyId;
  return client;
}