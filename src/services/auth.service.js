import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "../database/database.js";
import { createUser } from "../models/user.model.js";

const SECRET = "superSecretKey";

export async function registerUser({ name, email, password, role }) {
  const userExists = db.users.find(u => u.email === email);

  if (userExists) {
    throw new Error("Usuário já existe");
  }

  if (role !== "broker" && role !== "client") {
    throw new Error("Tipo de usuário inválido");
  }

  const hashedPassword = await bcrypt.hash(password, 8);

  const newUser = createUser({
    id: Date.now().toString(),
    name,
    email,
    password: hashedPassword,
    role
  });

  db.users.push(newUser);

  return newUser;
}

export async function loginUser({ email, password }) {
  const user = db.users.find(u => u.email === email);

  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error("Senha inválida");
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    SECRET,
    { expiresIn: "1h" }
  );

  return token;
}