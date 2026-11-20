import ModaleFormulaire from "@/app/composants/ModaleFormulaire";
import Pagination from "@/app/composants/Pagination";
import RechercheTableau from "@/app/composants/RechercheTableau";
import Tableau from "@/app/composants/Tableau";
import { donneesParents, role } from "@/lib/donnees";
import Image from "next/image";

// La forme d'un élément de la liste
type Parent = {
  id: number;
  nom: string;
  email?: string;
  eleves: string[];
  telephone: string;
  adresse: string;
};

// Les colonnes du tableau
// className : "hidden md:table-cell" = colonne cachée sur mobile, visible à partir de 768px
const colonnes = [
  { titre: "Infos", cle: "infos" },
  { titre: "Élèves", cle: "eleves", className: "hidden md:table-cell" },
  { titre: "Téléphone", cle: "telephone", className: "hidden lg:table-cell" },
  { titre: "Adresse", cle: "adresse", className: "hidden lg:table-cell" },
  { titre: "Actions", cle: "actions" },
];

const PageListeParents = () => {
  // Comment dessiner UNE ligne du tableau
  const afficherLigne = (element: Parent) => (
    <tr
      key={element.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-violetDouxClair"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{element.nom}</h3>
          <p className="text-xs text-gray-500">{element.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{element.eleves.join(", ")}</td>
      <td className="hidden lg:table-cell">{element.telephone}</td>
      <td className="hidden lg:table-cell">{element.adresse}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <ModaleFormulaire table="parent" type="modifier" donnees={element} />
              <ModaleFormulaire table="parent" type="supprimer" id={element.id} />
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
        <h1 className="hidden md:block text-lg font-semibold">Tous les parents</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <RechercheTableau />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-jauneDoux">
              <Image src="/filter.png" alt="Filtrer" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-jauneDoux">
              <Image src="/sort.png" alt="Trier" width={14} height={14} />
            </button>
            {role === "admin" && <ModaleFormulaire table="parent" type="creer" />}
          </div>
        </div>
      </div>
      {/* LISTE */}
      <Tableau colonnes={colonnes} afficherLigne={afficherLigne} donnees={donneesParents} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default PageListeParents;
