"use client";

import { useQuery } from "@tanstack/react-query";
import { getData } from "../_services/news.services";

export function useNewa(search:string,page:number) {
    return useQuery({
      queryKey: ["articles",search,page],
      queryFn: () => getData(search,page),
    });
}