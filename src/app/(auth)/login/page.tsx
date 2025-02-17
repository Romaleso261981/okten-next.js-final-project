"use client";

import React, { useState, useContext, useEffect } from "react";
import s from "./login.module.css";
import { ShortUser } from "@/utils/types";
import { UserContext } from "@/contexts/userContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { setUser, isLoggedIn, setIsLoggedIn, saveToLocalStorage } = useContext(
    UserContext
  );
  const router = useRouter();

  useEffect(
    () => {
      if (isLoggedIn) {
        router.push("/recipes");
      }
    },
    [isLoggedIn, router]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user: ShortUser = {
      lastName: email,
      firstName: name
    };
    setUser(user);
    setIsLoggedIn(true);
    saveToLocalStorage("user", user);
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Login</h2>
      <form onSubmit={handleSubmit} className={s.form}>
        <div className={s.inputGroup}>
          <label className={s.label}>Name:</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className={s.input}
          />
        </div>
        <div className={s.inputGroup}>
          <label className={s.label}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className={s.input}
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
          />
        </div>
        <button type="submit" className={s.button}>
          Login
        </button>
      </form>
    </div>
  );
}
