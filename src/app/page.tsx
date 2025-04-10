"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { mockSubmit } from "./utils/api";
import Step1 from "../components/steps/Step1";
import Step2 from "../components/steps/Step2";
import Step3 from "../components/steps/Step3";
import Summary from "../components/steps/Summary";

export default function Home() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const mutation = useMutation({
    mutationFn: mockSubmit,
    onSuccess: () => alert("✅ Form submitted! Check the console."),
    onError: () => alert("❌ Something went wrong!"),
  });

  const next = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((s) => s + 1);
  };

  const back = () => setStep((s) => s - 1);
  const submit = () => mutation.mutate(formData);

  return (
    <main className="max-w-xl mx-auto p-4 mt-10 bg-white dark:bg-gray-800 text-black dark:text-white rounded-md shadow">
      <h1 className="text-2xl font-bold">Multi-Step Form</h1>

      {step === 1 && <Step1 onNext={next} data={formData} />}
      {step === 2 && <Step2 onNext={next} onBack={back} data={formData} />}
      {step === 3 && <Step3 onNext={next} onBack={back} data={formData} />}
      {step === 4 && (
        <Summary
          data={formData}
          onBack={back}
          onSubmit={submit}
          isSubmitting={mutation.isPending}
        />
      )}
    </main>
  );
}
