import { Router } from "express";
import {
  create,
  list,
  getById,
  update,
  addNote,
  setNext,
  linkProperty
} from "../controllers/client.controller.js";

import { authenticate } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";

const router = Router();

// Apenas broker acessa tudo
router.use(authenticate, authorize("broker"));

router.post("/", create);
router.get("/", list);
router.get("/:id", getById);
router.put("/:id", update);

// Última atualização (nota)
router.post("/:id/notes", addNote);

// Próxima atualização
router.post("/:id/next-update", setNext);

// Vincular imóvel
router.post("/:id/link-property", linkProperty);

export default router;