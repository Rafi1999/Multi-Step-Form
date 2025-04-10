"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step1Schema } from "../../lib/validationSchemas";
import { z } from "zod";
import InputField from "../InputField";

export default function Step1({ onNext, data }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof step1Schema>>({
    resolver: zodResolver(step1Schema),
    defaultValues: data,
  });

  return (
    <form onSubmit={handleSubmit(onNext)}>
      <InputField label="Full Name" name="fullName" register={register} errors={errors} />
      <InputField label="Email" name="email" register={register} errors={errors} />
      <InputField label="Phone" name="phone" register={register} errors={errors} />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md mt-4">Next</button>
    </form>
  );
}
