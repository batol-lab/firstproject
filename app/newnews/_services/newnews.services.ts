"use client";
import axios from "axios";
import { ResponceArticles } from "../_types/newnews.type";


 export async function getData(page: number) {
   const responce = await axios.get<ResponceArticles>(
     `https://newsapi.org/v2/top-headlines?country=us&apiKey=3c882e1e5134417faccd9847b1cd90c9&page=${page}`,
   );
   return responce.data;
 }
