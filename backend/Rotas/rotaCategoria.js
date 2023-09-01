import { Router } from "express";
import CategoriaCTRL from "../Controle/CategoriaCTRL.js";

const router = new Router();
const categoriaController = new CategoriaCTRL();

router.post("/categorias", categoriaController.gravar);
router.put("/categorias/:id", categoriaController.atualizar);
router.delete("/categorias/:id", categoriaController.excluir);
router.get("/categorias", categoriaController.consultar);
router.get("/categorias/:id", categoriaController.consultarID);

export default router;
