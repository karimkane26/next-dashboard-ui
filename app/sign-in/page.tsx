"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Les règles du formulaire de connexion
const schema = z.object({
  email: z.string().email({ message: "Invalid email address!" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long!" }),
});

type Inputs = z.infer<typeof schema>;

const LoginPage = () => {
  const router = useRouter(); // permet de changer de page depuis le code

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    // Plus tard : envoyer data à l'API /api/auth/login et récupérer le token.
    // Pour l'instant, on va directement au dashboard.
    router.push("/dashboard");
  });

  return (
    <div className="h-screen flex items-center justify-center bg-lamaSkyLight">
      <form onSubmit={onSubmit} className="bg-white p-8 rounded-md shadow-xl flex flex-col gap-4 w-[90%] max-w-sm">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="" width={24} height={24} />
          <h1 className="text-xl font-bold">Daroul Tanzil</h1>
        </div>
        <h2 className="text-gray-400">Sign in to your account</h2>

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
          <label className="text-xs text-gray-500">Password</label>
          <input
            type="password"
            {...register("password")}
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm"
          />
          {errors.password?.message && <p className="text-xs text-red-400">{errors.password.message}</p>}
        </div>

        <button className="bg-blue-500 text-white rounded-md text-sm p-2">Sign in</button>
      </form>
    </div>
  );
};

export default LoginPage;
