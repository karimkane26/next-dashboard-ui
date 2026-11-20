"use client";

import Image from "next/image";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

// 92 % de réussite, 8 % restant (fill = couleur de la part)
const donnees = [
  { nom: "Note", valeur: 92, fill: "#C3EBFA" },
  { nom: "Reste", valeur: 8, fill: "#FAE27C" },
];

// Demi-camembert : la moyenne de l'élève ou de l'enseignant
const Performance = () => {
  return (
    <div className="bg-white p-4 rounded-md h-80 relative">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Performance</h1>
        <Image src="/moreDark.png" alt="" width={16} height={16} />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          {/* startAngle 180 → endAngle 0 = un demi-cercle */}
          <Pie
            dataKey="valeur"
            startAngle={180}
            endAngle={0}
            data={donnees}
            cx="50%"
            cy="50%"
            innerRadius={70}
          />
        </PieChart>
      </ResponsiveContainer>
      {/* Texte centré au milieu du demi-cercle */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-3xl font-bold">9,2</h1>
        <p className="text-xs text-gray-300">sur 10 maximum</p>
      </div>
      <h2 className="font-medium absolute bottom-16 left-0 right-0 m-auto text-center">
        1er semestre – 2e semestre
      </h2>
    </div>
  );
};

export default Performance;
