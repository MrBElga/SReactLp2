import { Router } from "express";
import VendaCTRL from "../Controle/VendaCTRL.js";

const router = new Router();
const vendaController = new VendaCTRL();

router.post("/venda", vendaController.gravar);
router.put("/venda/:id", vendaController.atualizar);
router.delete("/venda/:id", vendaController.excluir);
router.get("/venda", vendaController.consultar);
router.get("/venda/:id", vendaController.consultarID);

export default router;
