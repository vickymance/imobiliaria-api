import { Router } from "express";
import {
  create,
  list,
  getById,
  update,
  addNote,
  setNext,
  linkProperty,
  getNotes,
  updatePipelineStatus,
  remove
} from "../controllers/client.controller.js";

import { authenticate } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";

const router = Router();

// Apenas broker acessa tudo
router.use(authenticate, authorize("broker"));

// ===============================
// CLIENTES
// ===============================
router.post("/", create);
router.get("/", list);
router.get("/:id", getById);
router.put("/:id", update);
router.delete("/:id", remove);

// ===============================
// FOLLOW-UP
// ===============================
router.post("/:id/notes", addNote);
router.get("/:id/notes", getNotes); // ✅ CORRETO

// ===============================
// PRÓXIMA ATUALIZAÇÃO
// ===============================
router.post("/:id/next-update", setNext);

// ===============================
// VINCULAR IMÓVEL
// ===============================
router.post("/:id/link-property", linkProperty);

// ===============================
// ATUALIZAR PIPELINE
// ===============================
router.patch("/:id/pipeline", updatePipelineStatus);

export default router;