import { creciRegistry } from "../database/database.js";

export function findCreci(number) {
  return creciRegistry.find(c => c.number === number);
}