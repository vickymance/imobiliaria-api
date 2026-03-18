import { properties } from "../database/database.js";
import { createProperty } from "../models/property.model.js";

export function addProperty(data) {

  const {
    city,
    neighborhood,
    street,
    size,
    bedrooms,
    type,
    price
  } = data;

  if (
    !city ||
    !neighborhood ||
    !street ||
    !size ||
    !bedrooms ||
    !type ||
    price === undefined
  ) {
    const error = new Error("Campos obrigatórios não preenchidos");
  error.status = 400;
  throw error;
  }

  // 🔥 NOVAS VALIDAÇÕES PROFISSIONAIS

  if (typeof size !== "number" || size <= 0) {
   const error = new Error("Tamanho inválido");
    error.status = 400;
  throw error;
  }

  if (typeof bedrooms !== "number" || bedrooms <= 0) {
  const error = new Error("Quantidade de quartos inválida");
  error.status = 400;
  throw error;
  }

  if (typeof price !== "number" || price <= 0) {
  const error = new Error("Preço inválido");
  error.status = 400;
  throw error;
  }

 const newProperty = {
  id: properties.length + 1,
  city,
  neighborhood,
  street,
  size,
  bedrooms,
  type,
  price,
  images: data.images || []
};

  properties.push(newProperty);

  return newProperty;
}

export function getAllProperties() {
  return properties;
}

export function getPropertyById(id) {
  const property = properties.find(
    p => p.id === Number(id)
  );

  if (!property) {
    const error = new Error("Imóvel não encontrado");
    error.status = 404;
    throw error;
  }

  return property;
}

export function updateProperty(id, data) {

  const property = properties.find(
    p => p.id === Number(id)
  );

  if (!property) {
    const error = new Error("Imóvel não encontrado");
    error.status = 404;
    throw error;
  }

  if (!data || Object.keys(data).length === 0) {
    const error = new Error("Body de atualização vazio");
    error.status = 400;
    throw error;
  }

  if ("price" in data) {
    if (typeof data.price !== "number" || data.price <= 0) {
      const error = new Error("Preço inválido");
      error.status = 400;
      throw error;
    }
  }

  Object.assign(property, data);

  return property;
}

export function deleteProperty(id) {

  const index = properties.findIndex(
    p => p.id === Number(id)
  );

  if (index === -1) {
    const error = new Error("Imóvel não encontrado");
    error.status = 404;
    throw error;
  }

  const deletedProperty = properties.splice(index, 1)[0];

  return deletedProperty;
}