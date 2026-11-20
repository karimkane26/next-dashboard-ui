import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Chargement des polices Google
const policeSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const policeMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Le titre de l'onglet du navigateur
export const metadata: Metadata = {
  title: "Daroul Tanzil — Tableau de bord",
  description: "Tableau de bord de gestion scolaire",
};

// Mise en page RACINE : le SEUL endroit du projet avec <html> et <body>
// (le nom du fichier, layout.tsx, est imposé par Next.js)
export default function MiseEnPageRacine({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr">
      <body className={`${policeSans.variable} ${policeMono.variable} h-full antialiased`}>
        {children}
      </body>
    </html>
  );
}
