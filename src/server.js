import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

import authRoutes from "./routes/auth.routes.js";
import propertyRoutes from "./routes/property.routes.js";
import clientRoutes from "./routes/client.routes.js";

import swaggerDocument from "./resources/swagger.json" assert { type: "json" };

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

/* ===============================
   SWAGGER
=============================== */

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/* ===============================
   ROTAS
=============================== */

app.use("/auth", authRoutes);
app.use("/properties", propertyRoutes);
app.use("/clients", clientRoutes);

/* ===============================
   START SERVER
=============================== */

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000 🚀");
  console.log("Swagger disponível em:");
  console.log("http://localhost:3000/api-docs");
});