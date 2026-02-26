import { db } from "../database/database.js";

export function findCreci(creciNumber) {
  return db.creciRegistry.find(c => c.number === creciNumber);
}