import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/jwt.js";

export function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token não fornecido" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    // Opcional para debug (mas dentro do try!)
    // console.log("Decoded:", decoded);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(403).json({ error: "Token inválido" });
  }
}

export function authorize(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ error: "Acesso negado" });
    }

    next();
  };
}