import {
  addProperty,
  getAllProperties,
  getPropertyById,
  updateProperty
} from "../services/property.service.js";

export function create(req, res) {
  try {
    const property = addProperty(req.body);
    res.status(201).json(property);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export function list(req, res) {
  const properties = getAllProperties();
  res.json(properties);
}

export function getById(req, res) {
  try {
    const property = getPropertyById(req.params.id);
    res.json(property);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

export function update(req, res) {
  try {
    const property = updateProperty(req.params.id, req.body);
    res.json(property);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}