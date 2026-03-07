import React from "react";
import { Recipestype } from "../_types/recipes.types";

const RecipesCard = (props: Recipestype) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.image}</p>
      <p>{props.ingredients}</p>
      <p> {props.instructions}</p>
      <p>{props.rating}</p>
    </div>
  );
};

export default RecipesCard;
