import express from "express";
import FornecedorCTRL from "../Controladores/FornecedorCTRL.js";

const router = express.Router();
const fornecedorController = new FornecedorCTRL();


router.post("/fornecedores", fornecedorController.gravar);
router.put("/fornecedores/:id", fornecedorController.atualizar);
router.delete("/fornecedores/:id", fornecedorController.excluir);
router.get("/fornecedores", fornecedorController.consultar);
router.get("/fornecedores/:id", fornecedorController.consultarID);

export default router;
