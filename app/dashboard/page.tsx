import { redirect } from "next/navigation";
import { role } from "@/lib/data";

// "/dashboard" : on envoie l'utilisateur vers SA page d'accueil selon son rôle
// ex. role = "teacher" → "/dashboard/teacher"
export default function Dashboard() {
  redirect(`/dashboard/${role}`);
}
