import ExcelJS from "exceljs";

export default async function lerExcel() {
  const workbook = new ExcelJS.Workbook();

  await workbook.xlsx.readFile(
    "D:/Matheus2/OneDrive - DIAGNOSTICOS DA AMERICA S.A/Minha planilha de conferência de SPN.xlsx"
  );

  const worksheet = workbook.getWorksheet(1);

    if (!worksheet) {
        throw new Error("Planilha não encontrada");
    }

  worksheet.eachRow((row) => {
    console.log(row.values);
  });
}

lerExcel();