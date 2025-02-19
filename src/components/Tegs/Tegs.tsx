"use client";

import React, { FC } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./tegs.module.css";
import Link from "next/link";

type TegsProps = {
  tegs: string[];
};

export const TegsComponent: FC<TegsProps> = ({ tegs }) => {
  const searchParams = useSearchParams();

  const handleCategory = (teg: string) => {
    const params = new URLSearchParams(searchParams || "");
    params.set("teg", teg);
    return `/recipes?${params.toString()}`;
  };

  return (
    <div className={styles.tegs}>
      {tegs.map((teg, i) =>
        <Link href={handleCategory(teg)} key={i} className={styles.teg}>
          {teg}
        </Link>
      )}
    </div>
  );
};
