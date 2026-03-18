import { clients } from "../database/database.js";
import { createClient } from "../models/client.model.js";

// ===============================
// CRIAR CLIENTE
// ===============================
export function addClient(data) {
  const { name, phone, email } = data;

  if (!name || !phone || !email) {
    throw new Error("Campos obrigatórios não preenchidos");
  }

  const newClient = {
    id: clients.length + 1,
    ...data,
    notes: [],
pipeline: "frio",
    nextUpdate: null
  };

  clients.push(newClient);

  return newClient;
}

// ===============================
// LISTAR CLIENTES
// ===============================
export function getAllClients() {
  return clients;
}

// ===============================
// BUSCAR CLIENTE POR ID
// ===============================
export function getClientById(id) {
  const client = clients.find(c => c.id === Number(id));

  if (!client) {
    throw new Error("Cliente não encontrado");
  }

  return client;
}

// ===============================
// ATUALIZAR CLIENTE
// ===============================
export function updateClient(id, data) {
  const client = getClientById(id);

  Object.assign(client, data);

  return client;
}

// ===============================
// ADICIONAR NOTA (COM DATA)
// ===============================
export function addClientNote(id, note) {
  const client = getClientById(id);

  const newNote = {
    note,
    createdAt: new Date()
  };

  client.notes.push(newNote);

  return newNote;
}

// ===============================
// BUSCAR HISTÓRICO DE NOTAS
// ===============================
export function getClientNotes(id) {
  const client = getClientById(id);

  return client.notes || [];
}

// ===============================
// DEFINIR PRÓXIMA ATUALIZAÇÃO
// ===============================
export function setNextUpdate(id, date) {
  const client = getClientById(id);

  client.nextUpdate = date;

  return client;
}

// ===============================
// VINCULAR IMÓVEL
// ===============================
export function linkPropertyToClient(id, propertyId) {
  const client = getClientById(id);

  client.propertyId = propertyId;

  return client;
}

// ===============================
// ATUALIZAR PIPELINE
// ===============================
export function updatePipeline(id, pipeline) {
  const client = getClientById(id);

  client.pipeline = pipeline;

  return client;
}
