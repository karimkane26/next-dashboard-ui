"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "@/app/components/InputField";
import { currentUser } from "@/lib/data";

// Les règles : le mot de passe est facultatif (vide = on ne le change pas)
const schema = z.object({
  name: z.string().min(1, { message: "Name is required!" }),
  email: z.string().email({ message: "Invalid email address!" }),
  phone: z.string().min(1, { message: "Phone is required!" }),
  password: z
    .string()
    .refine((value) => value === "" || value.length >= 8, {
      message: "Password must be at least 8 characters long!",
    }),
});

type Inputs = z.infer<typeof schema>;

// Page "/dashboard/settings" : modifier ses informations
const SettingsPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data); // Plus tard : envoyer à l'API
  });

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <form className="flex flex-col gap-8" onSubmit={onSubmit}>
        <h1 className="text-xl font-semibold">Settings</h1>
        <div className="flex justify-between flex-wrap gap-4">
          <InputField label="Name" name="name" defaultValue={currentUser.name} register={register} error={errors.name} />
          <InputField label="Email" name="email" defaultValue={currentUser.email} register={register} error={errors.email} />
          <InputField label="Phone" name="phone" defaultValue={currentUser.phone} register={register} error={errors.phone} />
          <InputField label="New password" name="password" type="password" register={register} error={errors.password} />
        </div>
        <button className="bg-blue-400 text-white p-2 rounded-md">Save</button>
      </form>
    </div>
  );
};

export default SettingsPage;
