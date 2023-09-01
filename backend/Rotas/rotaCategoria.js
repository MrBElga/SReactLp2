import express from "express";
import CategoriaCTRL from "../Controladores/CategoriaCTRL.js";

const router = express.Router();
const categoriaController = new CategoriaCTRL();

router.post("/categorias", categoriaController.gravar);
router.put("/categorias/:id", categoriaController.atualizar);
router.delete("/categorias/:id", categoriaController.excluir);
router.get("/categorias", categoriaController.consultar);
router.get("/categorias/:id", categoriaController.consultarID);

export default router;
