import { Router } from "express";

import buscarRelatorio from "../controllers/dadosExcelcontroller";

const router = Router();

router.get("/relatorio", buscarRelatorio);

export default router;