"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Les règles du formulaire de connexion
const schema = z.object({
  email: z.string().email({ message: "Adresse email invalide !" }),
  motDePasse: z.string().min(8, { message: "Le mot de passe doit contenir au moins 8 caractères !" }),
});

type Valeurs = z.infer<typeof schema>;

// Page "/connexion"
const PageConnexion = () => {
  const routeur = useRouter(); // permet de changer de page depuis le code

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Valeurs>({
    resolver: zodResolver(schema),
  });

  const seConnecter = handleSubmit((valeurs) => {
    console.log(valeurs);
    // Plus tard : envoyer les valeurs à l'API /api/auth/login et récupérer le token.
    // Pour l'instant, on va directement au tableau de bord.
    routeur.push("/tableau-de-bord");
  });

  return (
    <div className="h-screen flex items-center justify-center bg-bleuCielClair">
      <form
        onSubmit={seConnecter}
        className="bg-white p-8 rounded-md shadow-xl flex flex-col gap-4 w-[90%] max-w-sm"
      >
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="" width={24} height={24} />
          <h1 className="text-xl font-bold">Daroul Tanzil</h1>
        </div>
        <h2 className="text-gray-400">Connectez-vous à votre compte</h2>

        <div className="flex flex-col gap-2">
          <label className="text-xs text-gray-500">Email</label>
          <input
            type="email"
            {...register("email")}
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm"
          />
          {errors.email?.message && <p className="text-xs text-red-400">{errors.email.message}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs text-gray-500">Mot de passe</label>
          <input
            type="password"
            {...register("motDePasse")}
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm"
          />
          {errors.motDePasse?.message && (
            <p className="text-xs text-red-400">{errors.motDePasse.message}</p>
          )}
        </div>

        <button className="bg-blue-500 text-white rounded-md text-sm p-2">Se connecter</button>
      </form>
    </div>
  );
};

export default PageConnexion;
