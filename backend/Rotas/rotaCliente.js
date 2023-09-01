import express from "express";
import ClientesCTRL from "../Controladores/ClientesCTRL.js";

const router = express.Router();
const clientesController = new ClientesCTRL();

// Rota para criar um novo cliente
router.post("/clientes", clientesController.gravar);

// Rota para atualizar um cliente existente
router.put("/clientes/:id", clientesController.atualizar);

// Rota para excluir um cliente
router.delete("/clientes/:id", clientesController.excluir);

// Rota para consultar todos os clientes
router.get("/clientes", clientesController.consultar);

// Rota para consultar um cliente pelo ID
router.get("/clientes/:id", clientesController.consultarID);

export default router;
