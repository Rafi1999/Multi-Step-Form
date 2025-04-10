"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step2Schema } from "../../lib/validationSchemas";
import { z } from "zod";
import InputField from "../InputField";
import FormNavigation from "../FormNavigation";

export default function Step2({ onNext, onBack, data }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof step2Schema>>({
    resolver: zodResolver(step2Schema),
    defaultValues: data,
  });

  const onSubmit = (formData: any) => {
    onNext(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField label="Street Address" name="street" register={register} errors={errors} />
      <InputField label="City" name="city" register={register} errors={errors} />
      <InputField label="Zip Code" name="zip" register={register} errors={errors} />

      <FormNavigation step={2} totalSteps={4} onBack={onBack} onNext={handleSubmit(onSubmit)} />
    </form>
  );
}
