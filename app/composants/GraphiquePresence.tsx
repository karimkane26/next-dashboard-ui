"use client";

import Image from "next/image";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Présents / absents pour chaque jour de la semaine
const donnees = [
  { jour: "Lun", presents: 60, absents: 40 },
  { jour: "Mar", presents: 70, absents: 60 },
  { jour: "Mer", presents: 90, absents: 75 },
  { jour: "Jeu", presents: 90, absents: 75 },
  { jour: "Ven", presents: 65, absents: 55 },
];

// Graphique en barres : les présences de la semaine
const GraphiquePresence = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Présences</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={donnees} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          {/* dataKey = le nom de la propriété à lire dans chaque objet */}
          <XAxis dataKey="jour" axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <YAxis axisLine={false} />
          <Tooltip />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          {/* name = le texte affiché dans la légende */}
          <Bar dataKey="presents" name="Présents" fill="#FAE27C" legendType="circle" radius={[10, 10, 0, 0]} />
          <Bar dataKey="absents" name="Absents" fill="#C3EBFA" legendType="circle" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphiquePresence;
