import { Router } from "express";
import ClientesCTRL from "../Controle/ClientesCTRL.js";

const router = new Router();
const clientesController = new ClientesCTRL();

router.post("/clientes", clientesController.gravar);
router.put("/clientes/:id", clientesController.atualizar);
router.delete("/clientes/:id", clientesController.excluir);
router.get("/clientes", clientesController.consultar);
router.get("/clientes/:id", clientesController.consultarID);

export default router;
