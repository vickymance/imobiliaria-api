import { db } from "../database/database.js";
import { createClient } from "../models/client.model.js";

export function addClient(data) {
  const newClient = createClient({
    id: Date.now().toString(),
    ...data
  });

  db.clients.push(newClient);
  return newClient;
}

export function getAllClients() {
  return db.clients;
}

export function getClientById(id) {
  const client = db.clients.find(c => c.id === id);

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

export function addClientNote(id, noteText) {
  const client = getClientById(id);

  const note = {
    date: new Date(),
    text: noteText
  };

  client.notes.push(note);
  client.lastUpdate = new Date();

  return client;
}

export function setNextUpdate(id, date) {
  const client = getClientById(id);

  client.nextUpdate = date;

  return client;
}

export function linkPropertyToClient(id, propertyId) {
  const client = getClientById(id);

  client.selectedPropertyId = propertyId;

  return client;
}