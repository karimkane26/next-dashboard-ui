"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import "moment/locale/fr"; // charge la traduction française de moment
import { evenementsCalendrier } from "@/lib/donnees";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Suspense, useState } from "react";

moment.locale("fr"); // jours et mois en français
const localisateur = momentLocalizer(moment);

// Les textes des boutons de l'agenda, en français
const textes = {
  work_week: "Semaine",
  day: "Jour",
  today: "Aujourd'hui",
  previous: "Précédent",
  next: "Suivant",
};

// Grand agenda : l'emploi du temps de la semaine
const GrandCalendrier = () => {
  // La vue affichée : la semaine de travail au départ
  const [vue, setVue] = useState<View>(Views.WORK_WEEK);

  return (
    // Suspense : l'agenda lit la date du jour, il est donc affiché au moment de la visite
    <Suspense fallback={<div>Chargement...</div>}>
      <Calendar
        localizer={localisateur}
        culture="fr"
        messages={textes}
        events={evenementsCalendrier}
        // Nos événements ont des clés en français : on dit à l'agenda où lire chaque info
        titleAccessor="titre"
        startAccessor="debut"
        endAccessor="fin"
        allDayAccessor="journeeEntiere"
        views={["work_week", "day"]}
        view={vue}
        style={{ height: "98%" }}
        onView={(nouvelleVue) => setVue(nouvelleVue)}
        min={new Date(2025, 1, 0, 8, 0, 0)} // début de journée : 8h
        max={new Date(2025, 1, 0, 17, 0, 0)} // fin de journée : 17h
      />
    </Suspense>
  );
};

export default GrandCalendrier;
