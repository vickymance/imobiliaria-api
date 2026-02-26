import { Router } from "express";
import {
  registerBroker,
  registerClient,
  login
} from "../controllers/auth.controller.js";

import {
  validateBrokerRegistration,
  validateClientRegistration
} from "../middleware/validate.middleware.js";

const router = Router();

router.post("/register-broker", validateBrokerRegistration, registerBroker);
router.post("/register-client", validateClientRegistration, registerClient);
router.post("/login", login);

export default router;