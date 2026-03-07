import axios from "axios";
import { ProductResponce } from "../_type/product.responce.type";

export async function getProducts(
  search: string,
  page: number,
  selectedCategory?: string,
) {
  const limit=10;
  const Newskip = page * limit;
  const responce = await axios.get<ProductResponce>(
    search
      ? `https://dummyjson.com/products/search?q=${search}&skip=${Newskip}`
      : selectedCategory && selectedCategory != "all"
        ? `https://dummyjson.com/products/category/${selectedCategory}`
        : `https://dummyjson.com/products?skip=${Newskip}`,
  );
  return responce.data;
}
//في بحث جيب منتجات البحث
//والا في صنف بحيث مايكون كل شي جيبو
//والا جيب كل المنتجات معناها لافي بحث ولاصنف
