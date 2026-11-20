"use client";

import Image from "next/image";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Revenus et dépenses de chaque mois
const donnees = [
  { mois: "Jan", revenus: 4000, depenses: 2400 },
  { mois: "Fév", revenus: 3000, depenses: 1398 },
  { mois: "Mar", revenus: 2000, depenses: 9800 },
  { mois: "Avr", revenus: 2780, depenses: 3908 },
  { mois: "Mai", revenus: 1890, depenses: 4800 },
  { mois: "Juin", revenus: 2390, depenses: 3800 },
  { mois: "Juil", revenus: 3490, depenses: 4300 },
  { mois: "Août", revenus: 3490, depenses: 4300 },
  { mois: "Sep", revenus: 3490, depenses: 4300 },
  { mois: "Oct", revenus: 3490, depenses: 4300 },
  { mois: "Nov", revenus: 3490, depenses: 4300 },
  { mois: "Déc", revenus: 3490, depenses: 4300 },
];

// Graphique en courbes : les finances de l'année
const GraphiqueFinance = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4 flex flex-col">
      {/* TITRE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finances</h1>
        <Image src="/moreDark.png" width={20} height={20} alt="" />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={donnees} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mois" tick={{ fill: "#d1d5db" }} tickLine={false} tickMargin={20} />
          <YAxis tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line type="monotone" dataKey="revenus" name="Revenus" stroke="#C3EBFA" strokeWidth={5} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="depenses" name="Dépenses" stroke="#CFCEFF" strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphiqueFinance;
