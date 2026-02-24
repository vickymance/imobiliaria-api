import {
  addClient,
  getAllClients,
  getClientById,
  updateClient,
  addClientNote,
  setNextUpdate,
  linkPropertyToClient
} from "../services/client.service.js";

export function create(req, res) {
  try {
    const client = addClient(req.body);
    res.status(201).json(client);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export function list(req, res) {
  const clients = getAllClients();
  res.json(clients);
}

export function getById(req, res) {
  try {
    const client = getClientById(req.params.id);
    res.json(client);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

export function update(req, res) {
  try {
    const client = updateClient(req.params.id, req.body);
    res.json(client);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

export function addNote(req, res) {
  try {
    const client = addClientNote(req.params.id, req.body.note);
    res.json(client);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

export function setNext(req, res) {
  try {
    const client = setNextUpdate(req.params.id, req.body.date);
    res.json(client);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

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