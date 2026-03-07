"use client";

import { useQuery } from "@tanstack/react-query";
import { getData } from "../_services/newnews.services";
import { ResponceArticles } from "../_types/newnews.type";


export function useNewNews(page: number) {
  return useQuery<ResponceArticles>({
    queryKey: ["articles", page],
    queryFn: () => getData(page),
  });
}