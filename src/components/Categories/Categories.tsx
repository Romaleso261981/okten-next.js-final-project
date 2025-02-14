"use client";

import React, { FC } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./Categories.module.css";
import Link from "next/link";

type Category = {
  id: number;
  name: string;
};

type CategoriesProps = {
  categories: Category[];
};

export const Categories: FC<CategoriesProps> = ({ categories }) => {
  const searchParams = useSearchParams();

  const handleCategory = (category: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("with_genres", category);
    return `/movies/discover?${params.toString()}`;
  };

  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <Link
          href={handleCategory(category.id.toString())}
          key={category.id}
          className={styles.category}
        >
          <div className={styles.name}>{category.name}</div>
        </Link>
      ))}
    </div>
  );
};
