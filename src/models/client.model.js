export function createClient({
  id,
  name,
  phone,
  email,
  regionInterest,
  selectedPropertyId,
  lastUpdate,
  nextUpdate,
  notes
}) {
  return {
    id,
    name,
    phone,
    email,
    regionInterest,
    selectedPropertyId: selectedPropertyId || null,
    lastUpdate: lastUpdate || null,
    nextUpdate: nextUpdate || null,
    notes: [
  {
    note: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }
]
  };
}