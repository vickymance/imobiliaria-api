import {
  registerBrokerService,
  registerClientService,
  loginUser
} from "../services/auth.service.js";

export async function registerBroker(req, res) {
  try {
    const user = await registerBrokerService(req.body);
    res.status(201).json({ message: "Corretor registrado com sucesso", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function registerClient(req, res) {
  try {
    const user = await registerClientService(req.body);
    res.status(201).json({ message: "Cliente registrado com sucesso", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function login(req, res) {
  try {
    const token = await loginUser(req.body);
    res.status(200).json({ token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}