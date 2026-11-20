import { nomDuRole, role, utilisateurConnecte } from "@/lib/donnees";
import Image from "next/image";
import Link from "next/link";

// Page "/tableau-de-bord/profil" : les infos de l'utilisateur connecté
const PageProfil = () => {
  return (
    <div className="flex-1 m-4 mt-0">
      <div className="bg-bleuCiel py-6 px-4 rounded-md flex flex-col md:flex-row items-center gap-6">
        <Image
          src={utilisateurConnecte.photo}
          alt=""
          width={120}
          height={120}
          className="w-28 h-28 rounded-full object-cover"
        />
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h1 className="text-xl font-semibold">{utilisateurConnecte.nom}</h1>
          <span className="text-sm text-gray-600">{nomDuRole(role)}</span>

          <div className="flex flex-col gap-2 mt-2 text-sm">
            <div className="flex items-center gap-2">
              <Image src="/mail.png" alt="" width={14} height={14} />
              <span>{utilisateurConnecte.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/phone.png" alt="" width={14} height={14} />
              <span>{utilisateurConnecte.telephone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/home.png" alt="" width={14} height={14} />
              <span>{utilisateurConnecte.adresse}</span>
            </div>
          </div>
        </div>
      </div>

      <Link
        href="/tableau-de-bord/parametres"
        className="inline-block mt-4 bg-white p-3 rounded-md text-sm"
      >
        Modifier mes informations →
      </Link>
    </div>
  );
};

export default PageProfil;
