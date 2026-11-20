"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ChampSaisie from "@/app/composants/ChampSaisie";
import { utilisateurConnecte } from "@/lib/donnees";

// Les règles : le mot de passe est facultatif (vide = on ne le change pas)
const schema = z.object({
  nom: z.string().min(1, { message: "Ce champ est obligatoire !" }),
  email: z.string().email({ message: "Adresse email invalide !" }),
  telephone: z.string().min(1, { message: "Ce champ est obligatoire !" }),
  motDePasse: z.string().refine((valeur) => valeur === "" || valeur.length >= 8, {
    message: "Le mot de passe doit contenir au moins 8 caractères !",
  }),
});

type Valeurs = z.infer<typeof schema>;

// Page "/tableau-de-bord/parametres" : modifier ses informations
const PageParametres = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Valeurs>({
    resolver: zodResolver(schema),
  });

  const enregistrer = handleSubmit((valeurs) => {
    console.log(valeurs); // Plus tard : envoyer à l'API
  });

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <form className="flex flex-col gap-8" onSubmit={enregistrer}>
        <h1 className="text-xl font-semibold">Paramètres</h1>
        <div className="flex justify-between flex-wrap gap-4">
          <ChampSaisie libelle="Nom" nom="nom" valeurParDefaut={utilisateurConnecte.nom} enregistrer={register} erreur={errors.nom} />
          <ChampSaisie libelle="Email" nom="email" valeurParDefaut={utilisateurConnecte.email} enregistrer={register} erreur={errors.email} />
          <ChampSaisie libelle="Téléphone" nom="telephone" valeurParDefaut={utilisateurConnecte.telephone} enregistrer={register} erreur={errors.telephone} />
          <ChampSaisie libelle="Nouveau mot de passe" nom="motDePasse" type="password" enregistrer={register} erreur={errors.motDePasse} />
        </div>
        <button className="bg-blue-400 text-white p-2 rounded-md">Enregistrer</button>
      </form>
    </div>
  );
};

export default PageParametres;
