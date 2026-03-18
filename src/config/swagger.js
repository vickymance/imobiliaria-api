import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Imobiliária CRM",
      version: "1.0.0",
      description: "API para gerenciamento de corretores, clientes e imóveis"
    },

    servers: [
      {
        url: "http://localhost:3000"
      }
    ],

    components: {

      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      },

      schemas: {

        Property: {
          type: "object",
          properties: {
            id: { type: "integer" },
            city: { type: "string" },
            neighborhood: { type: "string" },
            street: { type: "string" },
            size: { type: "number" },
            bedrooms: { type: "number" },
            type: { type: "string" },
            price: { type: "number" },
            images: {
              type: "array",
              items: { type: "string" }
            }
          }
        },

        Client: {
          type: "object",
          properties: {
            id: { type: "integer" },
            name: { type: "string" },
            email: { type: "string" },
            phone: { type: "string" }
          }
        },

        Broker: {
          type: "object",
          properties: {
            id: { type: "integer" },
            name: { type: "string" },
            email: { type: "string" },
            creci: { type: "string" }
          }
        }

      }
    }
  },

  apis: ["./src/routes/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };