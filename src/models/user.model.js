export function createUser({ id, name, email, password, role }) {
  return {
    id,
    name,
    email,
    password,
    role // "broker" ou "client"
  };
}