import express from "express";
import authRoutes from "./routes/auth.routes.js";
import propertyRoutes from "./routes/property.routes.js";
import clientRoutes from "./routes/client.routes.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./resources/swagger.json" with { type: "json" };
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API Imobiliária funcionando 🚀" });
});

app.use("/auth", authRoutes);
app.use("/properties", propertyRoutes);
app.use("/clients", clientRoutes);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;