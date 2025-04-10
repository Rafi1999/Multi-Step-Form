"use client";

type Props = {
  step: number;
  totalSteps: number;
  onBack: () => void;
  onNext: () => void;
  isSubmitting?: boolean;
};

export default function FormNavigation({ step, totalSteps, onBack, onNext, isSubmitting }: Props) {
  return (
    <div className="flex justify-between mt-6">
      {step > 1 ? (
        <button onClick={onBack} className="px-4 py-2 bg-gray-300 rounded-md dark:bg-gray-600">
          Previous
        </button>
      ) : <div />}

      <button
        onClick={onNext}
        disabled={isSubmitting}
        className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:opacity-60"
      >
        {step === totalSteps ? (isSubmitting ? "Submitting..." : "Submit") : "Next"}
      </button>
    </div>
  );
}
