# 🏠 CRM Imobiliário - API

## 📌 Visão Geral

API REST responsável pelas regras de negócio do CRM imobiliário.

### Funcionalidades:
- Autenticação JWT
- Gestão de imóveis
- Gestão de clientes
- Follow-up e pipeline

Base URL:
```
http://localhost:3000
```

---

## 🚀 Tecnologias

- Node.js
- Express
- JWT
- Swagger (OpenAPI)
- Arquitetura MVC

---

## ⚙️ Pré-requisitos

- Node.js
- npm

---

## 🔧 Setup

```bash
git clone <repo-backend>
cd imobiliaria-api
npm install
npm run dev
```

Swagger:
```
http://localhost:3000/api-docs
```

---

## 🔐 Autenticação

```http
POST /auth/login
```

Header:
```
Authorization: Bearer TOKEN
```

---

## 📡 Endpoints

### Auth
- POST /auth/register-broker
- POST /auth/register-client
- POST /auth/login

### Properties
- GET /properties
- POST /properties
- PUT /properties/:id
- DELETE /properties/:id

### Clients
- GET /clients
- POST /clients
- PUT /clients/:id
- DELETE /clients/:id

### Follow-up
- POST /clients/:id/notes
- POST /clients/:id/next-update

---

## 📁 Estrutura

```
src/
├── controllers/
├── routes/
├── services/
├── middleware/
├── database/
└── server.js
```
