import express from "express";
import ClientesCTRL from "../Controladores/ClientesCTRL.js";

const router = express.Router();
const clientesController = new ClientesCTRL();

router.post("/clientes", clientesController.gravar);
router.put("/clientes/:id", clientesController.atualizar);
router.delete("/clientes/:id", clientesController.excluir);
router.get("/clientes", clientesController.consultar);
router.get("/clientes/:id", clientesController.consultarID);

export default router;
