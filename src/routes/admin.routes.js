import { Router } from "express";
import { listPendingBrokers, approveBroker } from "../controllers/admin.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { requireAdmin } from "../middleware/admin.middleware.js";

const router = Router();

router.get("/pending-brokers", authenticate, requireAdmin, listPendingBrokers);
router.patch("/approve-broker/:id", authenticate, requireAdmin, approveBroker);

export default router;