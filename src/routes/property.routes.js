import { Router } from "express";
import {
  create,
  list,
  getById,
  update
} from "../controllers/property.controller.js";

import { authenticate } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";

const router = Router();

// Ambos podem listar
router.get("/", authenticate, list);

// Ambos podem visualizar por ID
router.get("/:id", authenticate, getById);

// Apenas broker cria
router.post("/", authenticate, authorize("broker"), create);

// Apenas broker atualiza
router.put("/:id", authenticate, authorize("broker"), update);

export default router;