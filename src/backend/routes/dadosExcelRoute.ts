import { Router } from "express";

import buscarRelatorio from "../controllers/dadosExcelcontroller";

const router = Router();

router.get("/excel_data", buscarRelatorio);

export default router;