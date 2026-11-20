import Link from "next/link";
import { donneesAnnonces } from "@/lib/donnees";

// Les 3 dernières annonces (sur l'accueil et les fiches)
const Annonces = () => {
  // slice(0, 3) = on garde seulement les 3 premières
  const dernieresAnnonces = donneesAnnonces.slice(0, 3);

  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Annonces</h1>
        <Link href="/tableau-de-bord/liste/annonces" className="text-xs text-gray-400">
          Voir tout
        </Link>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {dernieresAnnonces.map((annonce) => (
          <div key={annonce.id} className="rounded-md p-4 odd:bg-bleuCielClair even:bg-violetDouxClair">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">{annonce.titre}</h2>
              <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                {annonce.date}
              </span>
            </div>
            <p className="text-sm text-gray-400 mt-1">Classe concernée : {annonce.classe}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Annonces;
