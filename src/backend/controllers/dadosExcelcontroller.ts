import ExcelJS from "exceljs";
import type { Request, Response } from "express";

type Linha = unknown[];

type Planilha = Linha[]

interface DadosExcel {
    [nomeDaAba: string]: Planilha;
}
export default async function buscarRelatorio(
  req: Request,
  res: Response
) {
  try {
    const workbook = new ExcelJS.Workbook();

    await workbook.xlsx.readFile(
      "D:/Matheus2/OneDrive - DIAGNOSTICOS DA AMERICA S.A/Minha planilha de conferência de SPN.xlsx"
    );

    const meses = [
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro"
    ];

    const dados: DadosExcel = {};

    workbook.eachSheet((worksheet) => {
      if (!meses.includes(worksheet.name)) {
        return;
      }

      const linhas: Planilha = [];

      worksheet.eachRow((row) => {
        linhas.push(row.values as unknown[]);
      });

      dados[worksheet.name] = linhas;
    });

    return res.json(dados);

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      erro: "Erro ao ler o Excel"
    });
  }
}