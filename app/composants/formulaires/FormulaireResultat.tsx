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
  eleve: z.string().min(1, { message: "Ce champ est obligatoire !" }),
  note: z.string().min(1, { message: "Ce champ est obligatoire !" }),
  date: z.string().min(1, { message: "Ce champ est obligatoire !" }),
  type: z.enum(["examen", "devoir"], { message: "Choix obligatoire !" }),
});

type Valeurs = z.infer<typeof schema>;

const FormulaireResultat = ({
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
        {type === "creer" ? "Ajouter un résultat" : "Modifier le résultat"}
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
          libelle="Élève"
          nom="eleve"
          valeurParDefaut={donnees?.eleve}
          enregistrer={register}
          erreur={errors.eleve}
        />
        <ChampSaisie
          libelle="Note"
          nom="note"
          type="number"
          valeurParDefaut={donnees?.note}
          enregistrer={register}
          erreur={errors.note}
        />
        <ChampSaisie
          libelle="Date"
          nom="date"
          type="date"
          valeurParDefaut={donnees?.date}
          enregistrer={register}
          erreur={errors.date}
        />
        {/* Liste déroulante : même principe que ChampSaisie, écrit à la main */}
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Type</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("type")}
            defaultValue={donnees?.type}
          >
            <option value="examen">Examen</option>
            <option value="devoir">Devoir</option>
          </select>
          {errors.type?.message && (
            <p className="text-xs text-red-400">{errors.type.message.toString()}</p>
          )}
        </div>
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "creer" ? "Ajouter" : "Enregistrer"}
      </button>
    </form>
  );
};

export default FormulaireResultat;
