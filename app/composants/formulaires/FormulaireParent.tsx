"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ChampSaisie from "../ChampSaisie";

// Les règles du formulaire
// (un <input> renvoie toujours du TEXTE, même pour un nombre ou une date)
const schema = z.object({
  nom: z.string().min(1, { message: "Ce champ est obligatoire !" }),
  email: z.string().email({ message: "Adresse email invalide !" }),
  telephone: z.string().min(1, { message: "Ce champ est obligatoire !" }),
  adresse: z.string().min(1, { message: "Ce champ est obligatoire !" }),
  eleves: z.string().min(1, { message: "Ce champ est obligatoire !" }),
});

type Valeurs = z.infer<typeof schema>;

const FormulaireParent = ({
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
        {type === "creer" ? "Ajouter un parent" : "Modifier le parent"}
      </h1>
      <div className="flex justify-between flex-wrap gap-4">
        <ChampSaisie
          libelle="Nom"
          nom="nom"
          valeurParDefaut={donnees?.nom}
          enregistrer={register}
          erreur={errors.nom}
        />
        <ChampSaisie
          libelle="Email"
          nom="email"
          type="email"
          valeurParDefaut={donnees?.email}
          enregistrer={register}
          erreur={errors.email}
        />
        <ChampSaisie
          libelle="Téléphone"
          nom="telephone"
          valeurParDefaut={donnees?.telephone}
          enregistrer={register}
          erreur={errors.telephone}
        />
        <ChampSaisie
          libelle="Adresse"
          nom="adresse"
          valeurParDefaut={donnees?.adresse}
          enregistrer={register}
          erreur={errors.adresse}
        />
        <ChampSaisie
          libelle="Élèves (séparés par des virgules)"
          nom="eleves"
          valeurParDefaut={donnees?.eleves?.join(", ")}
          enregistrer={register}
          erreur={errors.eleves}
        />
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "creer" ? "Ajouter" : "Enregistrer"}
      </button>
    </form>
  );
};

export default FormulaireParent;
