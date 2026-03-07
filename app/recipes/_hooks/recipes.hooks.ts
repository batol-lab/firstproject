"use client"

import { useQuery } from "@tanstack/react-query";
import { ResponceRecipes } from "../_types/recipes.types";
import { getRecipes } from "../services/recipes.service";

export function useRecipes(search: string,page:number) {
    return   useQuery<ResponceRecipes>({
    queryKey: ["recipes",search,page],
    queryFn:()=> getRecipes(search,page),
  });
    
}