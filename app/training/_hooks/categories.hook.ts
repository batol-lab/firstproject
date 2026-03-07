import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../_services/categories.service";

 export function useGetCategories(){
    return useQuery({
        queryKey:["categories"],
        queryFn:getCategories,
    })
 }