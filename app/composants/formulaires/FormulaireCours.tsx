"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ChampSaisie from "../ChampSaisie";

// Les règles du formulaire
// (un <input> renvoie toujours du TEXTE, même pour un nombre ou une date)
const schema = z.object({
  matiere: z.string().min(1, { message: "Ce champ est obligatoire !" }),
  classe: z.string().min(1, { message: "Ce champ est obligatoire !" }),
  enseignant: z.string().min(1, { message: "Ce champ est obligatoire !" }),
});

type Valeurs = z.infer<typeof schema>;

const FormulaireCours = ({
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
        {type === "creer" ? "Ajouter un cours" : "Modifier le cours"}
      </h1>
      <div className="flex justify-between flex-wrap gap-4">
        <ChampSaisie
          libelle="Matière"
          nom="matiere"
          valeurParDefaut={donnees?.matiere}
          enregistrer={register}
          erreur={errors.matiere}
        />
        <ChampSaisie
          libelle="Classe"
          nom="classe"
          valeurParDefaut={donnees?.classe}
          enregistrer={register}
          erreur={errors.classe}
        />
        <ChampSaisie
          libelle="Enseignant"
          nom="enseignant"
          valeurParDefaut={donnees?.enseignant}
          enregistrer={register}
          erreur={errors.enseignant}
        />
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "creer" ? "Ajouter" : "Enregistrer"}
      </button>
    </form>
  );
};

export default FormulaireCours;
