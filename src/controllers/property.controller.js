import {
  addProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  deleteProperty
} from "../services/property.service.js";

// ===============================
// CRIAR
// ===============================
export function create(req, res) {
  try {
    const property = addProperty(req.body);
    res.status(201).json(property);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// ===============================
// LISTAR
// ===============================
export function list(req, res) {
  const properties = getAllProperties();

  // 🔥 CLIENTE AGORA VÊ TODOS OS DADOS
  return res.json(properties);
}

// ===============================
// BUSCAR POR ID
// ===============================
export function getById(req, res) {
  try {
    const property = getPropertyById(req.params.id);

    // 🔥 CLIENTE AGORA VÊ TODOS OS DADOS
    return res.json(property);

  } catch (error) {
    res.status(error.status || 500).json({
      error: error.message
    });
  }
}

// ===============================
// ATUALIZAR
// ===============================
export function update(req, res) {
  try {
    const property = updateProperty(req.params.id, req.body);
    res.json(property);
  } catch (error) {
    res.status(error.status || 500).json({
      error: error.message
    });
  }
}

// ===============================
// DELETAR
// ===============================
export function remove(req, res) {
  try {
    const property = deleteProperty(req.params.id);
    res.json({
      message: "Imóvel deletado com sucesso",
      property
    });
  } catch (error) {
    res.status(error.status || 500).json({
      error: error.message
    });
  }
}