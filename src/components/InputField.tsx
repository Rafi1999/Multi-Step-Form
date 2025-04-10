"use client";

type InputProps = {
  label: string;
  name: string;
  register: any;
  errors: any;
  type?: string;
};

export default function InputField({ label, name, register, errors, type = "text" }: InputProps) {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-1">{label}</label>
      <input
        type={type}
        {...register(name)}
        className="w-full border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-md"
      />
      {errors[name] && <p className="text-red-500 text-sm">{errors[name].message}</p>}
    </div>
  );
}
