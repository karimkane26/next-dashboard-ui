import ModaleFormulaire from "@/app/composants/ModaleFormulaire";
import Pagination from "@/app/composants/Pagination";
import RechercheTableau from "@/app/composants/RechercheTableau";
import Tableau from "@/app/composants/Tableau";
import { donneesEleves, role } from "@/lib/donnees";
import Image from "next/image";
import Link from "next/link";

// La forme d'un élément de la liste
type Eleve = {
  id: number;
  idEleve: string;
  nom: string;
  email?: string;
  photo: string;
  telephone?: string;
  niveau: number;
  classe: string;
  adresse: string;
};

// Les colonnes du tableau
// className : "hidden md:table-cell" = colonne cachée sur mobile, visible à partir de 768px
const colonnes = [
  { titre: "Infos", cle: "infos" },
  { titre: "ID élève", cle: "idEleve", className: "hidden md:table-cell" },
  { titre: "Niveau", cle: "niveau", className: "hidden md:table-cell" },
  { titre: "Téléphone", cle: "telephone", className: "hidden lg:table-cell" },
  { titre: "Adresse", cle: "adresse", className: "hidden lg:table-cell" },
  { titre: "Actions", cle: "actions" },
];

const PageListeEleves = () => {
  // Comment dessiner UNE ligne du tableau
  const afficherLigne = (element: Eleve) => (
    <tr
      key={element.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-violetDouxClair"
    >
      <td className="flex items-center gap-4 p-4">
        <Image
          src={element.photo}
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{element.nom}</h3>
          <p className="text-xs text-gray-500">{element.classe}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{element.idEleve}</td>
      <td className="hidden md:table-cell">{element.niveau}</td>
      <td className="hidden lg:table-cell">{element.telephone}</td>
      <td className="hidden lg:table-cell">{element.adresse}</td>
      <td>
        <div className="flex items-center gap-2">
          {/* Bouton "voir" : ouvre la fiche détaillée */}
          <Link href={`/tableau-de-bord/liste/eleves/${element.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-bleuCiel">
              <Image src="/view.png" alt="Voir" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <ModaleFormulaire table="eleve" type="supprimer" id={element.id} />
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* HAUT : titre, recherche et boutons */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Tous les élèves</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <RechercheTableau />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-jauneDoux">
              <Image src="/filter.png" alt="Filtrer" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-jauneDoux">
              <Image src="/sort.png" alt="Trier" width={14} height={14} />
            </button>
            {role === "admin" && <ModaleFormulaire table="eleve" type="creer" />}
          </div>
        </div>
      </div>
      {/* LISTE */}
      <Tableau colonnes={colonnes} afficherLigne={afficherLigne} donnees={donneesEleves} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default PageListeEleves;
