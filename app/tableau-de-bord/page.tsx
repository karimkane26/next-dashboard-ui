import { redirect } from "next/navigation";
import { role } from "@/lib/donnees";

// "/tableau-de-bord" : on envoie l'utilisateur vers SA page d'accueil selon son rôle
// ex. role = "enseignant" → "/tableau-de-bord/enseignant"
export default function TableauDeBord() {
  redirect(`/tableau-de-bord/${role}`);
}
