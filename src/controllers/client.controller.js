import {
  addClient,
  getAllClients,
  getClientById,
  updateClient,
  addClientNote,
  setNextUpdate,
  linkPropertyToClient,
  getClientNotes,
  updatePipeline,
  deleteClient
} from "../services/client.service.js";

// ===============================
// CRIAR CLIENTE
// ===============================
export function create(req, res) {
  try {
    const client = addClient(req.body);
    res.status(201).json(client);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// ===============================
// LISTAR CLIENTES
// ===============================
export function list(req, res) {
  const clients = getAllClients();
  res.json(clients);
}

// ===============================
// BUSCAR POR ID
// ===============================
export function getById(req, res) {
  try {
    const client = getClientById(req.params.id);
    res.json(client);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

// ===============================
// ATUALIZAR CLIENTE
// ===============================
export function update(req, res) {
  try {
    const client = updateClient(req.params.id, req.body);
    res.json(client);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

// ===============================
// ADICIONAR NOTA
// ===============================
export function addNote(req, res) {
  try {
    const note = addClientNote(req.params.id, req.body.note);
    res.json(note);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

// ===============================
// BUSCAR HISTÓRICO DE NOTAS (NOVO)
// ===============================
export function getNotes(req, res) {
  try {
    const notes = getClientNotes(req.params.id);
    res.json(notes);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

// ===============================
// DEFINIR PRÓXIMA ATUALIZAÇÃO
// ===============================
export function setNext(req, res) {
  try {
    const client = setNextUpdate(req.params.id, req.body.date);
    res.json(client);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

// ===============================
// VINCULAR IMÓVEL
// ===============================
export function linkProperty(req, res) {
  try {
    const client = linkPropertyToClient(
      req.params.id,
      req.body.propertyId
    );
    res.json(client);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

// ===============================
// ATUALIZAR PIPELINE
// ===============================
export function updatePipelineStatus(req, res) {
  try {
    const client = updatePipeline(req.params.id, req.body.pipeline);
    res.json(client);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

// ===============================
// DELETE CLIENT 
// ===============================
export function remove(req, res) {
  try {
    const client = deleteClient(req.params.id);
    res.json(client);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}