import { db } from "../database/database.js";
import { createProperty } from "../models/property.model.js";

export function addProperty(data) {
  const newProperty = createProperty({
    id: Date.now().toString(),
    ...data
  });

  db.properties.push(newProperty);

  return newProperty;
}

export function getAllProperties() {
  return db.properties;
}

export function getPropertyById(id) {
  const property = db.properties.find(p => p.id === id);

  if (!property) {
    throw new Error("Imóvel não encontrado");
  }

  return property;
}

export function updateProperty(id, data) {
  const property = db.properties.find(p => p.id === id);

  if (!property) {
    throw new Error("Imóvel não encontrado");
  }

  Object.assign(property, data);

  return property;
}