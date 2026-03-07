import axios from "axios";

export async function getCategories() {
    const responce = await axios.get<string[]>(
      "https://dummyjson.com/products/category-list",
    );
    return responce.data;
}
