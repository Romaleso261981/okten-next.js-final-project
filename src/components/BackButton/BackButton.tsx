"use client";

import { useRouter } from "next/navigation";
import React from "react";

const BackButton: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return <button onClick={handleBack}>Back</button>;
};

export default BackButton;
