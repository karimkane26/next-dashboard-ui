import Annonces from "@/app/composants/Annonces";
import GrandCalendrier from "@/app/composants/GrandCalendrier";
import ModaleFormulaire from "@/app/composants/ModaleFormulaire";
import Performance from "@/app/composants/Performance";
import { role } from "@/lib/donnees";
import Image from "next/image";
import Link from "next/link";

// Les petites cartes de statistiques (décrites comme des données, puis affichées avec .map)
const cartes = [
  { icone: "/singleAttendance.png", valeur: "90 %", libelle: "Présence" },
  { icone: "/singleBranch.png", valeur: "6e", libelle: "Niveau" },
  { icone: "/singleLesson.png", valeur: "18", libelle: "Cours" },
  { icone: "/singleClass.png", valeur: "6A", libelle: "Classe" },
];

// Les raccourcis vers les autres listes
const raccourcis = [
  { libelle: "Ses cours", lien: "/tableau-de-bord/liste/cours", couleur: "bg-bleuCielClair" },
  { libelle: "Ses enseignants", lien: "/tableau-de-bord/liste/enseignants", couleur: "bg-violetDouxClair" },
  { libelle: "Ses examens", lien: "/tableau-de-bord/liste/examens", couleur: "bg-pink-50" },
  { libelle: "Ses devoirs", lien: "/tableau-de-bord/liste/devoirs", couleur: "bg-bleuCielClair" },
  { libelle: "Ses résultats", lien: "/tableau-de-bord/liste/resultats", couleur: "bg-jauneDouxClair" },
];

// Fiche détaillée d'un élève ("/tableau-de-bord/liste/eleves/1")
const PageFicheEleve = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* GAUCHE */}
      <div className="w-full xl:w-2/3">
        {/* HAUT */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* CARTE D'IDENTITÉ */}
          <div className="bg-bleuCiel py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/5414817/pexels-photo-5414817.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">Cameron Moran</h1>
                {role === "admin" && (
                  <ModaleFormulaire
                    table="eleve"
                    type="modifier"
                    donnees={{
                      id: 1,
                      nomUtilisateur: "cameronmoran",
                      email: "cameron@gmail.com",
                      motDePasse: "motdepasse",
                      prenom: "Cameron",
                      nom: "Moran",
                      telephone: "+221 77 765 43 21",
                      adresse: "5 avenue des Écoles, Dakar",
                      groupeSanguin: "A+",
                      dateNaissance: "2012-03-15",
                      sexe: "homme",
                    }}
                  />
                )}
              </div>
              <p className="text-sm text-gray-500">Élève de 6A, délégué de classe.</p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span>Mars 2012</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>cameron@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>+221 77 765 43 21</span>
                </div>
              </div>
            </div>
          </div>
          {/* PETITES CARTES */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {cartes.map((carte) => (
              <div
                key={carte.libelle}
                className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]"
              >
                <Image src={carte.icone} alt="" width={24} height={24} className="w-6 h-6" />
                <div>
                  <h1 className="text-xl font-semibold">{carte.valeur}</h1>
                  <span className="text-sm text-gray-400">{carte.libelle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* BAS : emploi du temps */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Emploi du temps de l&apos;élève</h1>
          <GrandCalendrier />
        </div>
      </div>
      {/* DROITE */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Raccourcis</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            {raccourcis.map((raccourci) => (
              <Link key={raccourci.libelle} className={`p-3 rounded-md ${raccourci.couleur}`} href={raccourci.lien}>
                {raccourci.libelle}
              </Link>
            ))}
          </div>
        </div>
        <Performance />
        <Annonces />
      </div>
    </div>
  );
};

export default PageFicheEleve;
