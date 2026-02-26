export const db = {
  users: [
    {
      id: "1",
      name: "Admin Master",
      email: "admin@email.com",
      password: "$2b$08$AZXM.aj8E3d6U5ysXPm3X.zMHqnX5LYmP4fIo6L8seC1ntF7f4PCa",
      role: "admin",
      creci: null
    }
  ],
  properties: [
    {
      id: "1",
      city: "São Paulo",
      neighborhood: "Moema",
      street: "Rua Azul",
      size: 90,
      bedrooms: 3,
      type: "apartamento",
      garage: true,
      price: 950000,
      images: ["foto1.jpg"]
    },
    {
      id: "2",
      city: "São Paulo",
      neighborhood: "Itaim",
      street: "Rua Verde",
      size: 120,
      bedrooms: 4,
      type: "casa",
      garage: true,
      price: 1500000,
      images: ["foto2.jpg"]
    }
  ],
  clients: [],

    creciRegistry: [
    { number: "123456", name: "Rogerio Silva", status: "active" },
    { number: "987654", name: "Maria Costa", status: "active" },
    { number: "555555", name: "Carlos Souza", status: "inactive" }
  ]
};