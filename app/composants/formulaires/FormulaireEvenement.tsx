"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ChampSaisie from "../ChampSaisie";

// Les règles du formulaire
// (un <input> renvoie toujours du TEXTE, même pour un nombre ou une date)
const schema = z.object({
  titre: z.string().min(1, { message: "Ce champ est obligatoire !" }),
  classe: z.string().min(1, { message: "Ce champ est obligatoire !" }),
  date: z.string().min(1, { message: "Ce champ est obligatoire !" }),
  heureDebut: z.string().min(1, { message: "Ce champ est obligatoire !" }),
  heureFin: z.string().min(1, { message: "Ce champ est obligatoire !" }),
});

type Valeurs = z.infer<typeof schema>;

const FormulaireEvenement = ({
  type,
  donnees,
}: {
  type: "creer" | "modifier";
  donnees?: any;
}) => {
  const {
    register, // relie un champ au formulaire
    handleSubmit, // vérifie les règles AVANT d'appeler notre fonction
    formState: { errors }, // les erreurs à afficher en rouge
  } = useForm<Valeurs>({
    resolver: zodResolver(schema),
  });

  const envoyer = handleSubmit((valeurs) => {
    console.log(valeurs); // Plus tard : envoyer à l'API
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={envoyer}>
      <h1 className="text-xl font-semibold">
        {type === "creer" ? "Ajouter un événement" : "Modifier l'événement"}
      </h1>
      <div className="flex justify-between flex-wrap gap-4">
        <ChampSaisie
          libelle="Titre"
          nom="titre"
          valeurParDefaut={donnees?.titre}
          enregistrer={register}
          erreur={errors.titre}
        />
        <ChampSaisie
          libelle="Classe"
          nom="classe"
          valeurParDefaut={donnees?.classe}
          enregistrer={register}
          erreur={errors.classe}
        />
        <ChampSaisie
          libelle="Date"
          nom="date"
          type="date"
          valeurParDefaut={donnees?.date}
          enregistrer={register}
          erreur={errors.date}
        />
        <ChampSaisie
          libelle="Heure de début"
          nom="heureDebut"
          type="time"
          valeurParDefaut={donnees?.heureDebut}
          enregistrer={register}
          erreur={errors.heureDebut}
        />
        <ChampSaisie
          libelle="Heure de fin"
          nom="heureFin"
          type="time"
          valeurParDefaut={donnees?.heureFin}
          enregistrer={register}
          erreur={errors.heureFin}
        />
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "creer" ? "Ajouter" : "Enregistrer"}
      </button>
    </form>
  );
};

export default FormulaireEvenement;
