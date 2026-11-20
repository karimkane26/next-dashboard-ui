import { FieldError } from "react-hook-form";

type ProprietesChampSaisie = {
  libelle: string; // le texte affiché au-dessus du champ
  type?: string; // "text" par défaut, ou "email", "password", "date", "number"...
  enregistrer: any; // la fonction register de react-hook-form
  nom: string; // le nom du champ (doit exister dans le schéma zod)
  valeurParDefaut?: string; // la valeur de départ (en modification)
  erreur?: FieldError; // l'erreur éventuelle, affichée en rouge
  proprietesInput?: React.InputHTMLAttributes<HTMLInputElement>; // options en plus pour <input>
};

// Un champ de formulaire réutilisable : libellé + input + message d'erreur
const ChampSaisie = ({
  libelle,
  type = "text",
  enregistrer,
  nom,
  valeurParDefaut,
  erreur,
  proprietesInput,
}: ProprietesChampSaisie) => {
  return (
    <div className="flex flex-col gap-2 w-full md:w-1/4">
      <label className="text-xs text-gray-500">{libelle}</label>
      <input
        type={type}
        {...enregistrer(nom)}
        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
        {...proprietesInput}
        defaultValue={valeurParDefaut}
      />
      {erreur?.message && <p className="text-xs text-red-400">{erreur.message.toString()}</p>}
    </div>
  );
};

export default ChampSaisie;
