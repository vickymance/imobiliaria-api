import { getProperties, updateProperties } from "../database/database.js";
import { createProperty } from "../models/property.model.js";

// ===============================
// CRIAR IMÓVEL
// ===============================
export function addProperty(data) {

  const properties = getProperties();

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

  // validações
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

  updateProperties(properties);

  return newProperty;
}


// ===============================
// LISTAR TODOS
// ===============================
export function getAllProperties() {
  return getProperties();
}


// ===============================
// BUSCAR POR ID
// ===============================
export function getPropertyById(id) {

  const properties = getProperties();

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


// ===============================
// ATUALIZAR
// ===============================
export function updateProperty(id, data) {

  const properties = getProperties();

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

  updateProperties(properties);

  return property;
}


// ===============================
// DELETAR
// ===============================
export function deleteProperty(id) {

  const properties = getProperties();

  const index = properties.findIndex(
    p => p.id === Number(id)
  );

  if (index === -1) {
    const error = new Error("Imóvel não encontrado");
    error.status = 404;
    throw error;
  }

  const deletedProperty = properties.splice(index, 1)[0];

  updateProperties(properties);

  return deletedProperty;
}