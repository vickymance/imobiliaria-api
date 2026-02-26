export function createUser({ id, name, email, password, role, creci }) {
  return {
    id,
    name,
    email,
    password,
    role,
    creci: creci || null
  };
}