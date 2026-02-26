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

  // Se for CLIENT → modo vitrine
  if (req.user.role === "client") {
    const showcase = properties.map(property => ({
      id: property.id,
      city: property.city,
      neighborhood: property.neighborhood,
      type: property.type,
      price: property.price,
      image: property.images[0] || null
    }));

    return res.json(showcase);
  }

  // Se for BROKER → retorna completo
  return res.json(properties);
}

export function getById(req, res) {
  try {
    const property = getPropertyById(req.params.id);

    if (req.user.role === "client") {
      return res.json({
        id: property.id,
        city: property.city,
        neighborhood: property.neighborhood,
        type: property.type,
        price: property.price,
        image: property.images[0] || null
      });
    }

    return res.json(property);
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