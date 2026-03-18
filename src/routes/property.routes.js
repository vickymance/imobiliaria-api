import { Router } from "express";
import {
  create,
  list,
  getById,
  update,
  remove
} from "../controllers/property.controller.js";

import { authenticate } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";

const router = Router();

// Ambos autenticados podem listar
router.get("/", authenticate, list);

// Ambos autenticados podem ver por ID
router.get("/:id", authenticate, getById);

// Apenas broker pode criar
router.post("/", authenticate, authorize("broker"), create);

// Apenas broker pode atualizar
router.put("/:id", authenticate, authorize("broker"), update);

// Apenas broker pode deletar
router.delete("/:id", authenticate, authorize("broker"), remove);

export default router;