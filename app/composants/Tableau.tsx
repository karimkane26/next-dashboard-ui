// Une colonne du tableau
type Colonne = {
  titre: string; // le texte de l'en-tête
  cle: string; // un identifiant unique pour la colonne
  className?: string; // les classes Tailwind (ex. pour la cacher sur mobile)
};

// Tableau GÉNÉRIQUE : il ne sait rien des enseignants ou des élèves.
// On lui donne les colonnes, les données, et une fonction qui dessine une ligne.
const Tableau = ({
  colonnes,
  afficherLigne,
  donnees,
}: {
  colonnes: Colonne[];
  afficherLigne: (element: any) => React.ReactNode;
  donnees: any[];
}) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-left text-gray-500 text-sm">
          {colonnes.map((colonne) => (
            <th key={colonne.cle} className={colonne.className}>
              {colonne.titre}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{donnees.map((element) => afficherLigne(element))}</tbody>
    </table>
  );
};

export default Tableau;
