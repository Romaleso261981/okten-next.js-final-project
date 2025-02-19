import React from "react";

import s from "./recipesList.module.css";
import { Recipe } from "@/utils/types";
import { BadgeCard } from "../BadgeCard/BadgeCard";

// const defaultImg = "https://via.placeholder.com/500x750";

type RecipeListProps = {
  recipes: Recipe[];
};

export const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  if (!recipes) {
    return <div>Loading...</div>;
  }

  return (
    <ul className={s.list}>
      {recipes.map(
        recipe => <BadgeCard key={recipe.id} recipe={recipe} />
        // <li className={s.item} key={recipe.id}>
        //   <Link href={`/recipe/${recipe.id}`}>
        //     <div className={s.imgWrapper}>
        //       <Image
        //         className={s.img}
        //         src={recipe.image ? recipe.image : defaultImg}
        //         alt={recipe.name}
        //         width={500}
        //         height={750}
        //       />
        //     </div>
        //     <div className={s.content}>
        //       <h3 className={s.title}>
        //         {recipe.name}
        //       </h3>
        //       <div className={s.rating}>
        //         {Array.from({ length: 5 }, (_, index) =>
        //           <span
        //             key={index}
        //             className={
        //               index < recipe.rating ? s.filledStar : s.emptyStar
        //             }
        //           >
        //             ★
        //           </span>
        //         )}
        //       </div>
        //     </div>
        //   </Link>
        // </li>
      )}
    </ul>
  );
};
