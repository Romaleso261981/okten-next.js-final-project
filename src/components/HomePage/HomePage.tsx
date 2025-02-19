"use client";

import { UserContext } from "@/contexts/userContext";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";

export default function HomePage() {
  const router = useRouter();
  const { user } = useContext(UserContext);

  useEffect(
    () => {
      if (user === null) {
        router.push("/login");
      }
    },
    [user, router]
  );
  return <div>HomePage</div>;
}
