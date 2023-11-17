import { Router } from "express";
import ProdutosCTRL from "../Controle/ProdutosCTRL.js";

const router = new Router();
const produtosController = new ProdutosCTRL();

router.post("/produtos", produtosController.gravar);
router.put("/produtos/:id", produtosController.atualizar);
router.delete("/produtos/:id", produtosController.excluir);
router.get("/produtos", produtosController.consultarA);
router.get("/produtos/:id", produtosController.consultarA);

export default router;
