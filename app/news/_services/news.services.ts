"use client";

import axios from "axios";
import { ResponceArticles } from "../_types/news.types";

export async function getData(page: number) {
  const responce = await axios.get<ResponceArticles>(
    `https://newsapi.org/v2/everything?apiKey=3c882e1e5134417faccd9847b1cd90c9&q=information&page=${page}`,
  );
  return responce.data;
}