"use client"

import { useQuery } from "@tanstack/react-query";
import { ResponceProducts } from "../_types/products.type";
import { fetchData } from "../_services/products.service";

export function useGetProducts(search: string,page:number, selectedCategory?: string) {
  return useQuery<ResponceProducts>({
    queryKey: ["products", search,page, selectedCategory],
    queryFn: () => fetchData(search, page,selectedCategory),
  });
}