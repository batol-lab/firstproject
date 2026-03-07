"use client";

import { useQuery } from "@tanstack/react-query";
import { getData } from "../_services/news.services";

export function useNewa(page:number) {
    return useQuery({
      queryKey: ["articles",page],
      queryFn: () => getData(page),
    });
}