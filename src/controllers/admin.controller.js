import { db } from "../database/database.js";

// Listar corretores pendentes
export function listPendingBrokers(req, res) {
  const pending = db.users
    .filter(user => user.role === "broker_pending")
    .map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
      creci: user.creci
    }));

  res.json(pending);
}

// Aprovar corretor
export function approveBroker(req, res) {
  const { id } = req.params;

  const user = db.users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }

  if (user.role !== "broker_pending") {
    return res.status(400).json({ error: "Usuário não está pendente" });
  }

  user.role = "broker_active";

  res.json({ message: "Corretor aprovado com sucesso" });
}