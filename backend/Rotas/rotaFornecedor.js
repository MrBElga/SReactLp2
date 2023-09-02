import { Router } from "express";
import FornecedorCTRL from "../Controle/FornecedorCTRL.js";

const router = new Router();
const fornecedorController = new FornecedorCTRL();

router.post("/fornecedor", fornecedorController.gravar);
router.put("/fornecedor/:id", fornecedorController.atualizar);
router.delete("/fornecedor/:id", fornecedorController.excluir);
router.get("/fornecedor", fornecedorController.consultar);
router.get("/fornecedor/:id", fornecedorController.consultarID);

export default router;
