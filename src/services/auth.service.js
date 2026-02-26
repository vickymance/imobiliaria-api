import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "../database/database.js";
import { createUser } from "../models/user.model.js";
import { findCreci } from "./creci.service.js";

const SECRET = "superSecretKey";

// 🔵 Registrar Broker
export async function registerBrokerService({ name, email, password, creci }) {
  if (!name || !email || !password || !creci) {
    throw new Error("Todos os campos são obrigatórios");
  }

  const userExists = db.users.find(u => u.email === email);
  if (userExists) {
    throw new Error("Usuário já existe");
  }

  const creciData = findCreci(creci);

  if (!creciData) {
    throw new Error("CRECI não encontrado");
  }

  if (creciData.status !== "active") {
    throw new Error("CRECI não está ativo");
  }

  const hashedPassword = await bcrypt.hash(password, 8);

  const newUser = createUser({
    id: Date.now().toString(),
    name,
    email,
    password: hashedPassword,
    role: "broker_pending",
    creci
  });

  db.users.push(newUser);

  return newUser;
}

// 🟢 Registrar Client
export async function registerClientService({ name, email, password }) {
  if (!name || !email || !password) {
    throw new Error("Todos os campos são obrigatórios");
  }

  const userExists = db.users.find(u => u.email === email);
  if (userExists) {
    throw new Error("Usuário já existe");
  }

  const hashedPassword = await bcrypt.hash(password, 8);

  const newUser = createUser({
    id: Date.now().toString(),
    name,
    email,
    password: hashedPassword,
    role: "client"
  });

  db.users.push(newUser);

  return newUser;
}

// 🔐 Login
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