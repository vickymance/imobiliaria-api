import {
  registerBroker as registerBrokerService,
  registerClient as registerClientService,
  login as loginService
} from "../services/auth.service.js";

export async function registerBroker(req, res) {
  try {
    const result = await registerBrokerService(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function registerClient(req, res) {
  try {
    const result = await registerClientService(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function login(req, res) {
  try {
    const result = await loginService(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}