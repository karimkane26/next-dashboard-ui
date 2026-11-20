import Image from "next/image";
import Link from "next/link";
import { role } from "@/lib/donnees";

// Un lien du menu
type ElementMenu = {
  icone: string; // image dans public/
  libelle: string; // texte affiché
  lien: string; // l'URL (= le chemin des dossiers dans app/)
  visiblePour: string[]; // les rôles qui voient ce lien
};

// Le menu est décrit sous forme de DONNÉES : pour ajouter un lien, on ajoute un objet
const sectionsMenu: { titre: string; elements: ElementMenu[] }[] = [
  {
    titre: "MENU",
    elements: [
      { icone: "/home.png", libelle: "Accueil", lien: "/tableau-de-bord", visiblePour: ["admin", "enseignant", "eleve", "parent"] },
      { icone: "/teacher.png", libelle: "Enseignants", lien: "/tableau-de-bord/liste/enseignants", visiblePour: ["admin", "enseignant"] },
      { icone: "/student.png", libelle: "Élèves", lien: "/tableau-de-bord/liste/eleves", visiblePour: ["admin", "enseignant"] },
      { icone: "/parent.png", libelle: "Parents", lien: "/tableau-de-bord/liste/parents", visiblePour: ["admin", "enseignant"] },
      { icone: "/subject.png", libelle: "Matières", lien: "/tableau-de-bord/liste/matieres", visiblePour: ["admin"] },
      { icone: "/class.png", libelle: "Classes", lien: "/tableau-de-bord/liste/classes", visiblePour: ["admin", "enseignant"] },
      { icone: "/lesson.png", libelle: "Cours", lien: "/tableau-de-bord/liste/cours", visiblePour: ["admin", "enseignant"] },
      { icone: "/exam.png", libelle: "Examens", lien: "/tableau-de-bord/liste/examens", visiblePour: ["admin", "enseignant", "eleve", "parent"] },
      { icone: "/assignment.png", libelle: "Devoirs", lien: "/tableau-de-bord/liste/devoirs", visiblePour: ["admin", "enseignant", "eleve", "parent"] },
      { icone: "/result.png", libelle: "Résultats", lien: "/tableau-de-bord/liste/resultats", visiblePour: ["admin", "enseignant", "eleve", "parent"] },
      { icone: "/attendance.png", libelle: "Présences", lien: "/tableau-de-bord/liste/presences", visiblePour: ["admin", "enseignant", "eleve", "parent"] },
      { icone: "/calendar.png", libelle: "Événements", lien: "/tableau-de-bord/liste/evenements", visiblePour: ["admin", "enseignant", "eleve", "parent"] },
      { icone: "/message.png", libelle: "Messages", lien: "/tableau-de-bord/messages", visiblePour: ["admin", "enseignant", "eleve", "parent"] },
      { icone: "/announcement.png", libelle: "Annonces", lien: "/tableau-de-bord/liste/annonces", visiblePour: ["admin", "enseignant", "eleve", "parent"] },
    ],
  },
  {
    titre: "AUTRES",
    elements: [
      { icone: "/profile.png", libelle: "Profil", lien: "/tableau-de-bord/profil", visiblePour: ["admin", "enseignant", "eleve", "parent"] },
      { icone: "/setting.png", libelle: "Paramètres", lien: "/tableau-de-bord/parametres", visiblePour: ["admin", "enseignant", "eleve", "parent"] },
      { icone: "/logout.png", libelle: "Déconnexion", lien: "/connexion", visiblePour: ["admin", "enseignant", "eleve", "parent"] },
    ],
  },
];

const Menu = () => {
  return (
    <div className="flex flex-col justify-between h-full py-6">
      {sectionsMenu.map((section) => (
        <div className="mb-4 flex flex-col gap-2" key={section.titre}>
          <span className="text-xs font-bold text-gray-500 uppercase hidden lg:block">
            {section.titre}
          </span>
          {section.elements.map((element) => {
            // On n'affiche le lien que si le rôle actuel est dans la liste
            if (element.visiblePour.includes(role)) {
              return (
                <Link
                  href={element.lien}
                  key={element.libelle}
                  className="flex items-center justify-center lg:justify-start gap-4 md:px-2 text-gray-500 py-2 rounded-md hover:bg-bleuCiel"
                >
                  <Image src={element.icone} alt="" width={20} height={20} />
                  <span className="hidden lg:block">{element.libelle}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
