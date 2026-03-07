 "use client";
import { useQuery } from "@tanstack/react-query";
 import axios from "axios";
import React, { useState } from "react";

import { getData } from "./_services/newnews.services";
import { useNewNews } from "./_hooks/newnews.hooks";
import NewNewsComponents from "./_components/NewNewsComponents";
import { ArticleType } from "./_types/newnews.type";



const NewNews = () => {
  const [page, setPage] = useState(0);
  const { data, isLoading, isError, error } = useNewNews(page);
 
   const totalPages = data ? Math.ceil(100 / 10)  : 0;
     function nextPage() {
       if (data && page < totalPages) {
         setPage(page + 1);
       }
     }
     function prevPage() {
       if (page > 0) {
         setPage(page - 1);
       }
     }

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error + ""}</div>
      ) : (
        <div className="news-cards-container">
          {data &&
            data.articles.map((element: ArticleType, index: number) => (
              <div className="news-card" key={index}>
                <img
                  src={
                    element.urlToImage || "https://via.placeholder.com/300x180"
                  }
                  alt={element.title}
                />
                <div className="news-card-content">
                  <h3>{element.title}</h3>
                  <p className="description">{element.description}</p>
                  <p className="author">
                    ✍️ {element.author || "Unknown Author"}
                  </p>
                  <button>Read More</button>
                </div>
              </div>
            ))}
        </div>
      )}
      <div className="flex justify-center  items-center">
        <div
          onClick={prevPage}
          className="mx-20 bg-amber-200 rounded-sm px-2 my-20 w-30  text-center hover:bg-amber-300 cursor-pointer"
        >
          Prv
        </div>
        <div className="bg-gray-500 rounded-full px-2 text-white py-2 text-center h-10  my-20  w-10">
          {page + 1}
        </div>
        <div
          onClick={nextPage}
          className="mx-20 bg-amber-200 rounded-sm px-2 my-20 w-30 text-center  hover:bg-amber-300 cursor-pointer"
        >
          Nex
        </div>
      </div>
    </div>
  );   
};


export default NewNews;
