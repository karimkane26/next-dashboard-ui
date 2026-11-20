import Annonces from "@/app/composants/Annonces";
import GrandCalendrier from "@/app/composants/GrandCalendrier";

// Page d'accueil du parent
const PageParent = () => {
  return (
    <div className="px-4 flex gap-4 flex-col md:flex-row">
      {/* GAUCHE : emploi du temps de l'enfant */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="font-semibold">Emploi du temps (John Doe)</h1>
          <GrandCalendrier />
        </div>
      </div>
      {/* DROITE */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Annonces />
      </div>
    </div>
  );
};

export default PageParent;
