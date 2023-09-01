import express from "express";
import ProdutosCTRL from "../Controladores/ProdutosCTRL.js";

const router = express.Router();
const produtosController = new ProdutosCTRL();

router.post("/produtos", produtosController.gravar);
router.put("/produtos/:id", produtosController.atualizar);
router.delete("/produtos/:id", produtosController.excluir);
router.get("/produtos", produtosController.consultar);
router.get("/produtos/:id", produtosController.consultarID);

export default router;
