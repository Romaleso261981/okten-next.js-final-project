"use client";

import React, { useState, useContext } from "react";
import s from "./login.module.css";
import { UserContext } from "@/contexts/userContext";
import { useRouter } from "next/navigation";

import Cookies from "js-cookie";
import { ShortUser } from "@/utils/types";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { login } = useContext(UserContext);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user: { username: string; password: string } = {
      username: username,
      password: password
    };
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });

      if (response.ok) {
        const data = await response.json();
        console.log("data", data);

        const newUser: ShortUser = {
          lastName: data.lastName,
          firstName: data.firstName
        };
        Cookies.set("authToken", data.accessToken, { expires: 7 });
        login(newUser);
        router.push("/");
      } else {
        console.error("Помилка реєстрації");
      }
    } catch (error) {
      console.error("Помилка з'єднання", error);
    }
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Login</h2>
      <form onSubmit={handleSubmit} className={s.form}>
        <div className={s.inputGroup}>
          <label className={s.label}>username:</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            className={s.input}
            autoComplete="username"
          />
        </div>
        <div className={s.inputGroup}>
          <label className={s.label}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className={s.input}
            autoComplete="current-password"
          />
        </div>
        <button type="submit" className={s.button}>
          Login
        </button>
      </form>
    </div>
  );
}
