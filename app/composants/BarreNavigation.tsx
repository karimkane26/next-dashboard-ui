import Image from "next/image";
import { nomDuRole, role, utilisateurConnecte } from "@/lib/donnees";

// La barre du haut : recherche, icônes, utilisateur connecté
const BarreNavigation = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* BARRE DE RECHERCHE (cachée sur mobile) */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image alt="" src="/search.png" width={14} height={14} />
        <input
          type="text"
          placeholder="Rechercher..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>
      {/* ICÔNES ET UTILISATEUR */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image alt="Messages" src="/message.png" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image alt="Annonces" src="/announcement.png" width={20} height={20} />
          {/* Badge de notification */}
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-sm">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">{utilisateurConnecte.nom}</span>
          <span className="text-xs leading-3 font-medium text-gray-500">{nomDuRole(role)}</span>
        </div>
        <Image
          alt=""
          src={utilisateurConnecte.photo}
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default BarreNavigation;
