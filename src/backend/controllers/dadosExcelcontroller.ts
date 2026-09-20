import ExcelJS from "exceljs";
import type { Request, Response } from "express";

export default async function buscarRelatorio(
  req: Request,
  res: Response
) {
  try {
    const workbook = new ExcelJS.Workbook();

    await workbook.xlsx.readFile(
      "D:/Matheus2/OneDrive - DIAGNOSTICOS DA AMERICA S.A/Minha planilha de conferência de SPN.xlsx"
    );

    const worksheet = workbook.getWorksheet(1);

    if (!worksheet) {
      return res.status(404).json({
        erro: "Planilha não encontrada"
      });
    }

    const dados: unknown[][] = [];

    worksheet.eachRow((row) => {
      dados.push(row.values as unknown[]);
    });

    return res.json(dados);

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      erro: "Erro ao ler o Excel"
    });
  }
}