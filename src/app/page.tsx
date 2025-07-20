"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard");
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-[#2F80ED] mb-2">DriveLead Pro</h1>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );
}
