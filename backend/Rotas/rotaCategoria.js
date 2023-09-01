import express from "express";
import CategoriaCTRL from "../Controladores/CategoriaCTRL.js";

const router = express.Router();
const categoriaController = new CategoriaCTRL();

// Rota para criar uma nova categoria
router.post("/categorias", categoriaController.gravar);

// Rota para atualizar uma categoria existente
router.put("/categorias/:id", categoriaController.atualizar);

// Rota para excluir uma categoria
router.delete("/categorias/:id", categoriaController.excluir);

// Rota para consultar todas as categorias
router.get("/categorias", categoriaController.consultar);

// Rota para consultar uma categoria pelo ID
router.get("/categorias/:id", categoriaController.consultarID);

export default router;
