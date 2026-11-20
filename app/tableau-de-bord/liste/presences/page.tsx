import ModaleFormulaire from "@/app/composants/ModaleFormulaire";
import Pagination from "@/app/composants/Pagination";
import RechercheTableau from "@/app/composants/RechercheTableau";
import Tableau from "@/app/composants/Tableau";
import { donneesPresences, role } from "@/lib/donnees";
import Image from "next/image";

// La forme d'un élément de la liste
type Presence = {
  id: number;
  eleve: string;
  classe: string;
  date: string;
  present: boolean;
};

// Les colonnes du tableau
// className : "hidden md:table-cell" = colonne cachée sur mobile, visible à partir de 768px
const colonnes = [
  { titre: "Élève", cle: "eleve" },
  { titre: "Classe", cle: "classe", className: "hidden md:table-cell" },
  { titre: "Date", cle: "date", className: "hidden md:table-cell" },
  { titre: "Statut", cle: "statut" },
  { titre: "Actions", cle: "actions" },
];

const PageListePresences = () => {
  // Comment dessiner UNE ligne du tableau
  const afficherLigne = (element: Presence) => (
    <tr
      key={element.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-violetDouxClair"
    >
      <td className="flex items-center gap-4 p-4">{element.eleve}</td>
      <td className="hidden md:table-cell">{element.classe}</td>
      <td className="hidden md:table-cell">{element.date}</td>
      <td>
        {/* Badge vert si présent, rouge si absent */}
        {element.present ? (
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Présent</span>
        ) : (
          <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">Absent</span>
        )}
      </td>
      <td>
        <div className="flex items-center gap-2">
          {(role === "admin" || role === "enseignant") && (
            <>
              <ModaleFormulaire table="presence" type="modifier" donnees={element} />
              <ModaleFormulaire table="presence" type="supprimer" id={element.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* HAUT : titre, recherche et boutons */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Toutes les présences</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <RechercheTableau />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-jauneDoux">
              <Image src="/filter.png" alt="Filtrer" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-jauneDoux">
              <Image src="/sort.png" alt="Trier" width={14} height={14} />
            </button>
            {(role === "admin" || role === "enseignant") && <ModaleFormulaire table="presence" type="creer" />}
          </div>
        </div>
      </div>
      {/* LISTE */}
      <Tableau colonnes={colonnes} afficherLigne={afficherLigne} donnees={donneesPresences} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default PageListePresences;
