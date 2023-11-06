import { Router } from "express";
import AdminCTRL from "../Controle/AdminCTRL.js";

const router = new Router();
const adminController = new AdminCTRL();

router.post("/admin", adminController.gravar);
router.put("/admin/:id", adminController.atualizar);
router.delete("/admin/:id", adminController.excluir);
router.get("/admin", adminController.consultar);
router.get("/admin/:id", adminController.consultarID);

export default router;
