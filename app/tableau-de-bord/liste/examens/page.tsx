import ModaleFormulaire from "@/app/composants/ModaleFormulaire";
import Pagination from "@/app/composants/Pagination";
import RechercheTableau from "@/app/composants/RechercheTableau";
import Tableau from "@/app/composants/Tableau";
import { donneesExamens, role } from "@/lib/donnees";
import Image from "next/image";

// La forme d'un élément de la liste
type Examen = {
  id: number;
  matiere: string;
  classe: string;
  enseignant: string;
  date: string;
};

// Les colonnes du tableau
// className : "hidden md:table-cell" = colonne cachée sur mobile, visible à partir de 768px
const colonnes = [
  { titre: "Matière", cle: "matiere" },
  { titre: "Classe", cle: "classe" },
  { titre: "Enseignant", cle: "enseignant", className: "hidden md:table-cell" },
  { titre: "Date", cle: "date", className: "hidden md:table-cell" },
  { titre: "Actions", cle: "actions" },
];

const PageListeExamens = () => {
  // Comment dessiner UNE ligne du tableau
  const afficherLigne = (element: Examen) => (
    <tr
      key={element.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-violetDouxClair"
    >
      <td className="flex items-center gap-4 p-4">{element.matiere}</td>
      <td>{element.classe}</td>
      <td className="hidden md:table-cell">{element.enseignant}</td>
      <td className="hidden md:table-cell">{element.date}</td>
      <td>
        <div className="flex items-center gap-2">
          {(role === "admin" || role === "enseignant") && (
            <>
              <ModaleFormulaire table="examen" type="modifier" donnees={element} />
              <ModaleFormulaire table="examen" type="supprimer" id={element.id} />
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
        <h1 className="hidden md:block text-lg font-semibold">Tous les examens</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <RechercheTableau />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-jauneDoux">
              <Image src="/filter.png" alt="Filtrer" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-jauneDoux">
              <Image src="/sort.png" alt="Trier" width={14} height={14} />
            </button>
            {(role === "admin" || role === "enseignant") && <ModaleFormulaire table="examen" type="creer" />}
          </div>
        </div>
      </div>
      {/* LISTE */}
      <Tableau colonnes={colonnes} afficherLigne={afficherLigne} donnees={donneesExamens} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default PageListeExamens;
