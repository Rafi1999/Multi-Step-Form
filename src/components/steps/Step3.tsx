"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step3Schema } from "../../lib/validationSchemas";
import { z } from "zod";
import InputField from "../InputField";
import FormNavigation from "../FormNavigation";

export default function Step3({ onNext, onBack, data }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof step3Schema>>({
    resolver: zodResolver(step3Schema),
    defaultValues: data,
  });

  const onSubmit = (formData: any) => {
    onNext(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField label="Username" name="username" register={register} errors={errors} />
      <InputField label="Password" name="password" register={register} errors={errors} type="password" />
      <InputField label="Confirm Password" name="confirmPassword" register={register} errors={errors} type="password" />

      <FormNavigation step={3} totalSteps={4} onBack={onBack} onNext={handleSubmit(onSubmit)} />
    </form>
  );
}
