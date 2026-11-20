import { redirect } from "next/navigation";

// Page d'accueil "/" : on envoie directement l'utilisateur vers la connexion
export default function Accueil() {
  redirect("/connexion");
}
