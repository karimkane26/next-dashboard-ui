"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ChampSaisie from "../ChampSaisie";

// Les règles du formulaire
// (un <input> renvoie toujours du TEXTE, même pour un nombre ou une date)
const schema = z.object({
  nom: z.string().min(1, { message: "Ce champ est obligatoire !" }),
  capacite: z.string().min(1, { message: "Ce champ est obligatoire !" }),
  niveau: z.string().min(1, { message: "Ce champ est obligatoire !" }),
  responsable: z.string().min(1, { message: "Ce champ est obligatoire !" }),
});

type Valeurs = z.infer<typeof schema>;

const FormulaireClasse = ({
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
        {type === "creer" ? "Ajouter une classe" : "Modifier la classe"}
      </h1>
      <div className="flex justify-between flex-wrap gap-4">
        <ChampSaisie
          libelle="Nom de la classe"
          nom="nom"
          valeurParDefaut={donnees?.nom}
          enregistrer={register}
          erreur={errors.nom}
        />
        <ChampSaisie
          libelle="Capacité"
          nom="capacite"
          type="number"
          valeurParDefaut={donnees?.capacite}
          enregistrer={register}
          erreur={errors.capacite}
        />
        <ChampSaisie
          libelle="Niveau"
          nom="niveau"
          type="number"
          valeurParDefaut={donnees?.niveau}
          enregistrer={register}
          erreur={errors.niveau}
        />
        <ChampSaisie
          libelle="Responsable"
          nom="responsable"
          valeurParDefaut={donnees?.responsable}
          enregistrer={register}
          erreur={errors.responsable}
        />
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "creer" ? "Ajouter" : "Enregistrer"}
      </button>
    </form>
  );
};

export default FormulaireClasse;
