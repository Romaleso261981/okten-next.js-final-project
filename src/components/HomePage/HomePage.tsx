"use client";

import { UserContext } from "@/contexts/userContext";
import { Container } from "@mantine/core";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";
import { EmailBanner } from "../EmailBanner/EmailBanner";

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
  return (
    <Container>
      <EmailBanner />
    </Container>
  );
}
