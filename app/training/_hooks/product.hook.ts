"use client";

import { useQuery } from "@tanstack/react-query";
import { ProductResponce } from "../_type/product.responce.type";
import { getProducts } from "../_services/product.service";

export function useGetProducts(search: string,page: number, selectedCategory?: string) {
  return useQuery<ProductResponce>({
    queryKey: ["products", search,page, selectedCategory],
    queryFn: () => getProducts(search, page, selectedCategory),
  });
}
