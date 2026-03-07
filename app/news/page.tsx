"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useNewa } from "./_hooks/news.hooks";
import { ArticleType } from "./_types/news.types";
import NewsComponents from "./_components/NewsComponents";
import { ThreeDots } from "react-loader-spinner";
 
const NewsPage = () => {

const [page ,setPage]=useState(1);

  const { data, isLoading, isError, error } = useNewa(page);

 const changePage = () => {
   if (page < 10) {
     setPage((prev) => prev + 1);
   }
 };

  return (
    <div className="w-full px-6 py-6">
      {isLoading ? (
        <div className="text-center text-lg font-semibold flex justify-center items-center h-screen">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{ margin: "20px" }}
            wrapperClass="custom-loader"
            visible={true}
          />
        </div>
      ) : isError ? (
        <div className="text-red-500 text-center">{error + ""}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data &&
            data.articles.map((element: ArticleType, index: number) => {
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer overflow-hidden flex flex-col"
                >
                  {/* صورة */}
                  <img
                    src={element.urlToImage}
                    alt={element.title}
                    className="h-48 w-full object-cover"
                  />

                  {/* المحتوى */}
                  <div className="p-4 flex flex-col gap-2 flex-grow">
                    <h2 className="font-semibold text-lg line-clamp-2">
                      {element.title}
                    </h2>

                    <p className="text-sm text-gray-500 line-clamp-3">
                      {element.description}
                    </p>

                    <p className="text-xs text-gray-400 mt-auto">
                      {element.author}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      )}
      <div className="flex gap-4 justify-center m-4">
        <p className="rounded-full  bg-amber-950 w-10 text-center text-amber-500">{page}</p>
        <button onClick={changePage} className="rounded-lg text-amber-500 bg-amber-950 w-30 hover:text-blue-50 hover:bg-amber-500 ">Nest</button>
      </div>
    </div>
  );
}

export default NewsPage;
 