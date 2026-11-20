import Image from "next/image";
import Link from "next/link";
import Menu from "@/app/composants/Menu";
import BarreNavigation from "@/app/composants/BarreNavigation";

// Mise en page du tableau de bord : elle s'affiche DANS le <body> de la mise en page racine,
// donc elle renvoie un simple <div> (jamais <html> ni <body>)
export default function MiseEnPageTableauDeBord({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex">
      {/* Partie gauche : logo + menu */}
      <div className="w-[14%] md:w-[8%] xl:w-[14%]">
        <Link href="/tableau-de-bord" className="flex items-center gap-2 lg:justify-start">
          <Image alt="logo" src="/logo.png" width={32} height={32} />
          <span className="hidden lg:block font-bold">Daroul Tanzil</span>
        </Link>
        <Menu />
      </div>

      {/* Partie droite : barre de navigation + contenu de la page */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        <BarreNavigation />
        {children}
      </div>
    </div>
  );
}
