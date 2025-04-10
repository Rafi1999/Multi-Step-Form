"use client";

import FormNavigation from "../FormNavigation";

export default function Summary({ data, onBack, onSubmit, isSubmitting }: any) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Summary</h2>
      <ul className="space-y-2 text-sm">
        <li><strong>Full Name:</strong> {data.fullName}</li>
        <li><strong>Email:</strong> {data.email}</li>
        <li><strong>Phone:</strong> {data.phone}</li>
        <li><strong>Street:</strong> {data.street}</li>
        <li><strong>City:</strong> {data.city}</li>
        <li><strong>Zip Code:</strong> {data.zip}</li>
        <li><strong>Username:</strong> {data.username}</li>
        {/* Never show passwords in real UIs! */}
      </ul>

      <FormNavigation
        step={4}
        totalSteps={4}
        onBack={onBack}
        onNext={onSubmit}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}
