import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const dados = [
  { dia: "01/ago", registros: 1 },
  { dia: "02/ago", registros: 2 },
  { dia: "03/ago", registros: 1 },
  { dia: "04/ago", registros: 2 },
  { dia: "05/ago", registros: 3 },
  { dia: "06/ago", registros: 4 },
  { dia: "07/ago", registros: 8 },
  { dia: "08/ago", registros: 10 },
  { dia: "09/ago", registros: 5 },
  { dia: "10/ago", registros: 2 },
  { dia: "11/ago", registros: 1 },
  { dia: "12/ago", registros: 3 },
  { dia: "13/ago", registros: 5 },
  { dia: "14/ago", registros: 8 },
  { dia: "15/ago", registros: 5 },
  { dia: "16/ago", registros: 4 },
  { dia: "17/ago", registros: 5 },
  { dia: "18/ago", registros: 5 },
  { dia: "19/ago", registros: 17 },
  { dia: "20/ago", registros: 23 },
  { dia: "21/ago", registros: 20 },
  { dia: "22/ago", registros: 12 },
  { dia: "23/ago", registros: 7 },
  { dia: "24/ago", registros: 5 },
  { dia: "25/ago", registros: 4 },
  { dia: "26/ago", registros: 4 },
  { dia: "27/ago", registros: 5 },
  { dia: "28/ago", registros: 5 },
  { dia: "29/ago", registros: 6 },
  { dia: "30/ago", registros: 12 },
  { dia: "31/ago", registros: 47 },
];

export default function GraficoRegistros() {
  return (
    <div className="w-full h-full overflow-hidden">
      <LineChart
        width="100%"
        height="100%"
        data={dados}
        margin={{
          top: 10,
          right: 20,
          left: 0,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="dia" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="registros"
          stroke="#2563eb"
          strokeWidth={2}
          dot={{
            r: 3,
            fill: "#2563eb",
          }}
        />
      </LineChart>
    </div>
  );
}