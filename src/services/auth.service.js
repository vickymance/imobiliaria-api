import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { users, updateUsers } from "../database/database.js";
import { findCreci } from "./creci.service.js";
import { JWT_SECRET } from "../config/jwt.js";

export async function registerBroker(data) {
  const { name, email, password, creci } = data;

  if (!name || !email || !password || !creci) {
    throw new Error("Todos os campos são obrigatórios");
  }

  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    throw new Error("Email já cadastrado");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  let creciStatus = "not_found";
  const creciData = findCreci(creci);

  if (creciData) {
    creciStatus = creciData.status; // active ou inactive
  }

  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    password: hashedPassword,
    role: "broker",
    creci,
    creci_status: creciStatus
  };

  const updatedUsers = [...users, newUser];
updateUsers(updatedUsers);

  return {
    message: "Corretor registrado com sucesso",
    creci_status: creciStatus
  };
}

export async function registerClient(data) {
  const { name, email, password } = data;

  if (!name || !email || !password) {
    throw new Error("Todos os campos são obrigatórios");
  }

  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    throw new Error("Email já cadastrado");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    password: hashedPassword,
    role: "client"
  };

  const updatedUsers = [...users, newUser];
updateUsers(updatedUsers);

  return { message: "Cliente registrado com sucesso" };
}

export async function login(data) {
  const { email, password } = data;

  const user = users.find(u => u.email === email);
  if (!user) {
    throw new Error("Credenciais inválidas");
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new Error("Credenciais inválidas");
  }

const token = jwt.sign(
  {
    id: user.id,
    role: user.role
  },
  JWT_SECRET,
  { expiresIn: "1h" }
);

return {
  token,
  user: {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role
  }
};

};