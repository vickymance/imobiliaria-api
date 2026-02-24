import { registerUser, loginUser } from "../services/auth.service.js";

export async function register(req, res) {
  try {
    const user = await registerUser(req.body);

    res.status(201).json({
      message: "Usuário criado com sucesso",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function login(req, res) {
  try {
    const token = await loginUser(req.body);

    res.status(200).json({
      message: "Login realizado com sucesso",
      token
    });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}