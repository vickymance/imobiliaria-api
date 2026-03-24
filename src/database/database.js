import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// resolve path corretamente (evita bugs)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// arquivos
const USERS_FILE = path.join(__dirname, 'users.json');
const PROPERTIES_FILE = path.join(__dirname, 'properties.json');
const CLIENTS_FILE = path.join(__dirname, 'clients.json');
const CRECI_FILE = path.join(__dirname, 'creci.json');

// helpers
const load = (file) => {
  try {
    const data = fs.readFileSync(file, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Erro ao carregar ${file}:`, error.message);
    return [];
  }
};

const save = (file, data) => {
  if (!Array.isArray(data)) {
    throw new Error('Dados inválidos para persistência');
  }
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
};

// exports
export let users = load(USERS_FILE);
export let properties = load(PROPERTIES_FILE);
export let clients = load(CLIENTS_FILE);
export let creciRegistry = load(CRECI_FILE);
export const getProperties = () => load(PROPERTIES_FILE);

// updates
export const updateUsers = (data) => {
  users = data;
  save(USERS_FILE, users);
};

export const updateProperties = (data) => {
  properties = data;
  save(PROPERTIES_FILE, properties);
};

export const updateClients = (data) => {
  clients = data;
  save(CLIENTS_FILE, clients);
};