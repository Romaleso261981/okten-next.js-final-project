import React from "react";
import Link from "next/link";

import s from "./movies.module.css";
import Image from "next/image";
import { Recipes } from "@/utils/types";

const defaultImg = "https://via.placeholder.com/500x750";

type MovieListProps = {
  recipes: Recipes[];
};

export const MovieList: React.FC<MovieListProps> = ({ recipes }) => {
  if (!recipes) {
    return <div>Loading...</div>;
  }

  return (
    <ul className={s.list}>
      {recipes.map(recipe =>
        <li className={s.item} key={recipe.id}>
          <Link href={`/movie/${recipe.id}`}>
            <Image
              className={s.img}
              src={recipe.image ? recipe.image : defaultImg}
              alt={recipe.name}
            />
          </Link>
          <h3>
            {recipe.name}
          </h3>
        </li>
      )}
    </ul>
  );
};
