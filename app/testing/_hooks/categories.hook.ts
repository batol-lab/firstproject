"use client"

import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../_services/catecories.services";

export function useGetCategories(){
    return useQuery<string[]>({
        queryKey: ["categories"],
        queryFn: fetchCategories,
      });
}