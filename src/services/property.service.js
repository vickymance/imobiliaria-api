import { properties } from "../database/database.js";
import { createProperty } from "../models/property.model.js";

export function addProperty(data) {
  const newProperty = createProperty({
    id: Date.now().toString(),
    ...data
  });

  properties.push(newProperty);

  return newProperty;
}

export function getAllProperties() {
  return properties;
}

export function getPropertyById(id) {
  const property = properties.find(p => p.id === id);

  if (!property) {
    throw new Error("Imóvel não encontrado");
  }

  return property;
}

export function updateProperty(id, data) {
  const property = properties.find(p => p.id === id);

  if (!property) {
    throw new Error("Imóvel não encontrado");
  }

  Object.assign(property, data);

  return property;
}