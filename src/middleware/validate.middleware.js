export function validateBrokerRegistration(req, res, next) {
  const { name, email, password, creci } = req.body;

  if (!name || !email || !password || !creci) {
    return res.status(400).json({ error: "Campos obrigatórios ausentes" });
  }

  next();
}

export function validateClientRegistration(req, res, next) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Campos obrigatórios ausentes" });
  }

  next();
}