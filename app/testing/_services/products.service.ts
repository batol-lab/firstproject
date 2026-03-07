import axios from "axios";
import { ResponceProducts } from "../_types/products.type";

 export async function fetchData(search: string, page: number, selectedCategory?: string) {
  const responce = await axios.get<ResponceProducts>(
    search
      ? `https://dummyjson.com/products/search?q=${search}&&skip=${page * 10}`
      : selectedCategory && selectedCategory != "all"
        ? `https://dummyjson.com/products/category/${selectedCategory}`
        : `https://dummyjson.com/products?skip=${page * 10}`,
  );
  return responce.data;
}
