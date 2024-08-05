"use client";

import { useRouter } from "next/navigation";

export default function ThankYouPage() {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen brand-bg-color">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4 brand-text-color">Thank You</h1>
        <p className="text-lg mb-6 brand-text-color">
          Kyle will respond back soon.
        </p>
        <button onClick={handleBackToHome} className="px-4 py-2 rounded btn">
          Back to Home
        </button>
      </div>
    </div>
  );
}
