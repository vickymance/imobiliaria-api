import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/jwt.js";

export function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token não fornecido" });
  }

    const token = authHeader.replace("Bearer ", "").trim();

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Token inválido" });
  }
}