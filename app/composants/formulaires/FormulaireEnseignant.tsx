"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ChampSaisie from "../ChampSaisie";
import Image from "next/image";

// Les règles du formulaire
// (un <input> renvoie toujours du TEXTE, même pour un nombre ou une date)
const schema = z.object({
  nomUtilisateur: z
    .string()
    .min(3, { message: "Au moins 3 caractères !" })
    .max(20, { message: "Au maximum 20 caractères !" }),
  email: z.string().email({ message: "Adresse email invalide !" }),
  motDePasse: z.string().min(8, { message: "Le mot de passe doit contenir au moins 8 caractères !" }),
  prenom: z.string().min(1, { message: "Ce champ est obligatoire !" }),
  nom: z.string().min(1, { message: "Ce champ est obligatoire !" }),
  telephone: z.string().min(1, { message: "Ce champ est obligatoire !" }),
  adresse: z.string().min(1, { message: "Ce champ est obligatoire !" }),
  groupeSanguin: z.string().min(1, { message: "Ce champ est obligatoire !" }),
  dateNaissance: z.string().min(1, { message: "Ce champ est obligatoire !" }),
  sexe: z.enum(["homme", "femme"], { message: "Choix obligatoire !" }),
  // Un <input type="file"> renvoie une LISTE de fichiers : on vérifie qu'il y en a au moins 1
  photo: z.any().refine((fichiers) => fichiers?.length > 0, { message: "La photo est obligatoire !" }),
});

type Valeurs = z.infer<typeof schema>;

const FormulaireEnseignant = ({
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
        {type === "creer" ? "Ajouter un enseignant" : "Modifier l'enseignant"}
      </h1>
      <span className="text-xs text-gray-400 font-medium">Informations de connexion</span>
      <div className="flex justify-between flex-wrap gap-4">
        <ChampSaisie
          libelle="Nom d'utilisateur"
          nom="nomUtilisateur"
          valeurParDefaut={donnees?.nomUtilisateur}
          enregistrer={register}
          erreur={errors.nomUtilisateur}
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
          libelle="Mot de passe"
          nom="motDePasse"
          type="password"
          valeurParDefaut={donnees?.motDePasse}
          enregistrer={register}
          erreur={errors.motDePasse}
        />
      </div>
      <span className="text-xs text-gray-400 font-medium">Informations personnelles</span>
      <div className="flex justify-between flex-wrap gap-4">
        <ChampSaisie
          libelle="Prénom"
          nom="prenom"
          valeurParDefaut={donnees?.prenom}
          enregistrer={register}
          erreur={errors.prenom}
        />
        <ChampSaisie
          libelle="Nom"
          nom="nom"
          valeurParDefaut={donnees?.nom}
          enregistrer={register}
          erreur={errors.nom}
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
          libelle="Groupe sanguin"
          nom="groupeSanguin"
          valeurParDefaut={donnees?.groupeSanguin}
          enregistrer={register}
          erreur={errors.groupeSanguin}
        />
        <ChampSaisie
          libelle="Date de naissance"
          nom="dateNaissance"
          type="date"
          valeurParDefaut={donnees?.dateNaissance}
          enregistrer={register}
          erreur={errors.dateNaissance}
        />
        {/* Liste déroulante : même principe que ChampSaisie, écrit à la main */}
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Sexe</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("sexe")}
            defaultValue={donnees?.sexe}
          >
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
          </select>
          {errors.sexe?.message && (
            <p className="text-xs text-red-400">{errors.sexe.message.toString()}</p>
          )}
        </div>
        {/* Envoi de photo : le vrai <input> est caché, on clique sur le <label> */}
        <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
          <label
            className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
            htmlFor="photo"
          >
            <Image src="/upload.png" alt="" width={28} height={28} />
            <span>Ajouter une photo</span>
          </label>
          <input type="file" id="photo" {...register("photo")} className="hidden" />
          {errors.photo?.message && (
            <p className="text-xs text-red-400">{errors.photo.message.toString()}</p>
          )}
        </div>
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "creer" ? "Ajouter" : "Enregistrer"}
      </button>
    </form>
  );
};

export default FormulaireEnseignant;
