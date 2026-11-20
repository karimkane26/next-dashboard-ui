"use client";

import Image from "next/image";
import { RadialBar, RadialBarChart, Tooltip } from "recharts";

// Les données du graphique en anneaux (fill = couleur de l'anneau)
const donnees = [
  { nom: "Total", effectif: 106, fill: "white" },
  { nom: "Filles", effectif: 53, fill: "#FAE27C" },
  { nom: "Garçons", effectif: 53, fill: "#C3EBFA" },
];

// Graphique : répartition filles / garçons
const GraphiqueEffectif = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4 flex flex-col">
      {/* TITRE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Élèves</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      {/* GRAPHIQUE */}
      <div className="relative w-full flex-1 min-h-[200px]">
        <RadialBarChart
          style={{ width: "100%", height: "100%" }}
          responsive
          cx="50%"
          cy="50%"
          barSize={32}
          data={donnees}
          innerRadius="40%"
          outerRadius="100%"
        >
          <RadialBar background dataKey="effectif" />
          <Tooltip />
        </RadialBarChart>

        {/* Icône centrée au milieu de l'anneau */}
        <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          loading="eager"
        />
      </div>

      {/* LÉGENDE */}
      <div className="flex justify-center gap-8 sm:gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-bleuCiel rounded-full" />
          <h1 className="font-bold">1 234</h1>
          <h2 className="text-xs text-gray-300">Garçons (55 %)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-jauneDoux rounded-full" />
          <h1 className="font-bold">1 234</h1>
          <h2 className="text-xs text-gray-300">Filles (45 %)</h2>
        </div>
      </div>
    </div>
  );
};

export default GraphiqueEffectif;
