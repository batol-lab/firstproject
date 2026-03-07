import axios from "axios";
import { ResponceRecipes } from "../_types/recipes.types";



  export async function getRecipes(search: string,page:number) {
      
    const Newpage = page * 30;
  const responce = await axios.get<ResponceRecipes>(
    search
      ? `https://dummyjson.com/recipes/search?q=${search}&skip=${Newpage}`
      : `https://dummyjson.com/recipes?skip=${Newpage}`,
  );
  return responce.data;
}
