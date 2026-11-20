"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState, type JSX } from "react";

// CHARGEMENT DIFFÉRÉ : chaque formulaire n'est téléchargé qu'à l'ouverture de la modale
// (les options { loading } doivent être écrites directement dans dynamic(), pas dans une variable)
const FormulaireEnseignant = dynamic(() => import("./formulaires/FormulaireEnseignant"), {
  loading: () => <h1>Chargement...</h1>,
});
const FormulaireEleve = dynamic(() => import("./formulaires/FormulaireEleve"), {
  loading: () => <h1>Chargement...</h1>,
});
const FormulaireParent = dynamic(() => import("./formulaires/FormulaireParent"), {
  loading: () => <h1>Chargement...</h1>,
});
const FormulaireMatiere = dynamic(() => import("./formulaires/FormulaireMatiere"), {
  loading: () => <h1>Chargement...</h1>,
});
const FormulaireClasse = dynamic(() => import("./formulaires/FormulaireClasse"), {
  loading: () => <h1>Chargement...</h1>,
});
const FormulaireCours = dynamic(() => import("./formulaires/FormulaireCours"), {
  loading: () => <h1>Chargement...</h1>,
});
const FormulaireExamen = dynamic(() => import("./formulaires/FormulaireExamen"), {
  loading: () => <h1>Chargement...</h1>,
});
const FormulaireDevoir = dynamic(() => import("./formulaires/FormulaireDevoir"), {
  loading: () => <h1>Chargement...</h1>,
});
const FormulaireResultat = dynamic(() => import("./formulaires/FormulaireResultat"), {
  loading: () => <h1>Chargement...</h1>,
});
const FormulairePresence = dynamic(() => import("./formulaires/FormulairePresence"), {
  loading: () => <h1>Chargement...</h1>,
});
const FormulaireEvenement = dynamic(() => import("./formulaires/FormulaireEvenement"), {
  loading: () => <h1>Chargement...</h1>,
});
const FormulaireAnnonce = dynamic(() => import("./formulaires/FormulaireAnnonce"), {
  loading: () => <h1>Chargement...</h1>,
});

// Le "dictionnaire" : nom de la table → le formulaire à afficher
const formulaires: {
  [cle: string]: (type: "creer" | "modifier", donnees?: any) => JSX.Element;
} = {
  enseignant: (type, donnees) => <FormulaireEnseignant type={type} donnees={donnees} />,
  eleve: (type, donnees) => <FormulaireEleve type={type} donnees={donnees} />,
  parent: (type, donnees) => <FormulaireParent type={type} donnees={donnees} />,
  matiere: (type, donnees) => <FormulaireMatiere type={type} donnees={donnees} />,
  classe: (type, donnees) => <FormulaireClasse type={type} donnees={donnees} />,
  cours: (type, donnees) => <FormulaireCours type={type} donnees={donnees} />,
  examen: (type, donnees) => <FormulaireExamen type={type} donnees={donnees} />,
  devoir: (type, donnees) => <FormulaireDevoir type={type} donnees={donnees} />,
  resultat: (type, donnees) => <FormulaireResultat type={type} donnees={donnees} />,
  presence: (type, donnees) => <FormulairePresence type={type} donnees={donnees} />,
  evenement: (type, donnees) => <FormulaireEvenement type={type} donnees={donnees} />,
  annonce: (type, donnees) => <FormulaireAnnonce type={type} donnees={donnees} />,
};

// Un bouton rond qui ouvre une fenêtre (modale) pour créer, modifier ou supprimer
const ModaleFormulaire = ({
  table,
  type,
  donnees,
  id,
}: {
  table:
    | "enseignant"
    | "eleve"
    | "parent"
    | "matiere"
    | "classe"
    | "cours"
    | "examen"
    | "devoir"
    | "resultat"
    | "presence"
    | "evenement"
    | "annonce";
  type: "creer" | "modifier" | "supprimer";
  donnees?: any;
  id?: number;
}) => {
  // Taille, couleur et icône du bouton selon l'action
  const taille = type === "creer" ? "w-8 h-8" : "w-7 h-7";
  const couleur =
    type === "creer" ? "bg-jauneDoux" : type === "modifier" ? "bg-bleuCiel" : "bg-violetDoux";
  const icone =
    type === "creer" ? "/plus.png" : type === "modifier" ? "/edit.png" : "/delete.png";

  // La modale est fermée au départ
  const [ouverte, setOuverte] = useState(false);

  // Choisit ce qu'on affiche dans la modale.
  // C'est une simple fonction (pas un composant) : on l'appelle avec afficherContenu()
  const afficherContenu = () => {
    // 1. Suppression : un simple message de confirmation
    if (type === "supprimer" && id) {
      return (
        <form action="" className="p-4 flex flex-col gap-4">
          <span className="text-center font-medium">
            Toutes les données seront perdues. Voulez-vous vraiment supprimer cet élément ?
          </span>
          <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
            Supprimer
          </button>
        </form>
      );
    }

    // 2. Création / modification : on cherche le formulaire de cette table
    const formulaire = formulaires[table];

    // Pas de formulaire pour cette table → message au lieu d'un plantage
    if (!formulaire) {
      return <p className="p-4 text-center">Formulaire introuvable !</p>;
    }

    return formulaire(type as "creer" | "modifier", donnees);
  };

  return (
    <>
      <button
        className={`${taille} flex items-center justify-center rounded-full ${couleur}`}
        onClick={() => setOuverte(true)}
      >
        <Image src={icone} alt={type} width={16} height={16} />
      </button>
      {ouverte && (
        // Fond noir transparent qui couvre tout l'écran
        <div className="w-screen h-screen fixed left-0 top-0 bg-black/60 z-50 flex items-center justify-center">
          {/* Boîte blanche au centre */}
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            {afficherContenu()}
            {/* Bouton de fermeture (la croix) */}
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOuverte(false)}
            >
              <Image src="/close.png" alt="Fermer" width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModaleFormulaire;
