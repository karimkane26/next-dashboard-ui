import ModaleFormulaire from "@/app/composants/ModaleFormulaire";
import Pagination from "@/app/composants/Pagination";
import RechercheTableau from "@/app/composants/RechercheTableau";
import Tableau from "@/app/composants/Tableau";
import { donneesDevoirs, role } from "@/lib/donnees";
import Image from "next/image";

// La forme d'un élément de la liste
type Devoir = {
  id: number;
  matiere: string;
  classe: string;
  enseignant: string;
  dateLimite: string;
};

// Les colonnes du tableau
// className : "hidden md:table-cell" = colonne cachée sur mobile, visible à partir de 768px
const colonnes = [
  { titre: "Matière", cle: "matiere" },
  { titre: "Classe", cle: "classe" },
  { titre: "Enseignant", cle: "enseignant", className: "hidden md:table-cell" },
  { titre: "Date limite", cle: "dateLimite", className: "hidden md:table-cell" },
  { titre: "Actions", cle: "actions" },
];

const PageListeDevoirs = () => {
  // Comment dessiner UNE ligne du tableau
  const afficherLigne = (element: Devoir) => (
    <tr
      key={element.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-violetDouxClair"
    >
      <td className="flex items-center gap-4 p-4">{element.matiere}</td>
      <td>{element.classe}</td>
      <td className="hidden md:table-cell">{element.enseignant}</td>
      <td className="hidden md:table-cell">{element.dateLimite}</td>
      <td>
        <div className="flex items-center gap-2">
          {(role === "admin" || role === "enseignant") && (
            <>
              <ModaleFormulaire table="devoir" type="modifier" donnees={element} />
              <ModaleFormulaire table="devoir" type="supprimer" id={element.id} />
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
        <h1 className="hidden md:block text-lg font-semibold">Tous les devoirs</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <RechercheTableau />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-jauneDoux">
              <Image src="/filter.png" alt="Filtrer" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-jauneDoux">
              <Image src="/sort.png" alt="Trier" width={14} height={14} />
            </button>
            {(role === "admin" || role === "enseignant") && <ModaleFormulaire table="devoir" type="creer" />}
          </div>
        </div>
      </div>
      {/* LISTE */}
      <Tableau colonnes={colonnes} afficherLigne={afficherLigne} donnees={donneesDevoirs} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default PageListeDevoirs;
