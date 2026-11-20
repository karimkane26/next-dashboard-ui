"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { donneesEvenements } from "@/lib/donnees";

// Une date, ou rien (null), ou une période [début, fin]
type MorceauDeValeur = Date | null;
type Valeur = MorceauDeValeur | [MorceauDeValeur, MorceauDeValeur];

// Petit calendrier du mois + les prochains événements
const CalendrierEvenements = () => {
  // La date sélectionnée (aujourd'hui au départ)
  const [dateChoisie, setDateChoisie] = useState<Valeur>(new Date());

  // On affiche les 3 premiers événements
  const prochainsEvenements = donneesEvenements.slice(0, 3);

  return (
    <div className="bg-white p-4 rounded-md">
      {/* locale="fr-FR" : jours et mois en français */}
      <Calendar onChange={setDateChoisie} value={dateChoisie} locale="fr-FR" />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Événements</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {prochainsEvenements.map((evenement) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-bleuCiel even:border-t-violetDoux"
            key={evenement.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{evenement.titre}</h1>
              <span className="text-gray-300 text-xs">
                {evenement.heureDebut} - {evenement.heureFin}
              </span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">
              Classe {evenement.classe}, le {evenement.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendrierEvenements;
