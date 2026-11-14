import Image from "next/image";
import Link from "next/link";
import Menu from "@/app/components/Menu";
import Navbar from "@/app/components/Navbar";

// Layout du dashboard : il s'affiche DANS le <body> du layout racine,
// donc il renvoie un simple <div> (jamais <html> ni <body>)
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex">
      {/* Partie gauche : logo + menu */}
      <div className="w-[14%] md:w-[8%] xl:w-[14%]">
        <Link href="/" className="flex items-center gap-2 lg:justify-start">
          <Image alt="logo" src="/logo.png" width={32} height={32} />
          <span className="hidden lg:block font-bold">Daroul Tanzil</span>
        </Link>
        <Menu />
      </div>

      {/* Partie droite : barre de navigation + contenu de la page */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
