"use client"

import axios from "axios";

export async function fetchCategories(){
    const responce = await axios.get<string[]>(
      "https://dummyjson.com/products/category-list",
    );
    return responce.data;
}