"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useNewa } from "./_hooks/news.hooks";
import { ArticleType } from "./_types/news.types";
import NewsComponents from "./_components/NewsComponents";
import { ThreeDots } from "react-loader-spinner";
import Navbar from "./_components/Navbar";

const NewsPage = () => {
   const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = useNewa(search,page);

  const changePage = () => {
    if (page < 10) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className="w-full px-6 py-6">
      <Navbar search={search} setSearch={setSearch} />
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
            data?.articles?.map((element: ArticleType, index: number) => {
              return (
                <div
                  key={index}
                  onClick={() => window.open(element.url, "_blank")}
                  className="group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  {/* Background Image */}
                  <img
                    src={element.urlToImage || "/fallback.jpg"}
                    alt={element.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

                  {/* Content container */}
                  <div className="relative h-full flex flex-col justify-end p-5">
                    {/* Floating glass panel */}
                    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 flex flex-col gap-3 shadow-lg">
                      {/* Source + Date */}
                      <div className="flex justify-between items-center text-xs text-gray-200">
                        <span className="font-medium tracking-wide">
                          {element.source?.name}
                        </span>
                        <span>
                          {new Date(element.publishedAt).toLocaleDateString()}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-white text-lg font-semibold leading-snug line-clamp-2 group-hover:text-blue-300 transition">
                        {element.title}
                      </h2>

                      {/* Description */}
                      <p className="text-sm text-gray-300 line-clamp-3">
                        {element.description}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-2 border-t border-white/20">
                        <span className="text-xs text-gray-300">
                          {element.author || "Unknown author"}
                        </span>

                        {/* Read more indicator */}
                        <span className="text-xs text-blue-300 group-hover:translate-x-1 transition">
                          Read →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}

      <div className="flex gap-4 justify-center m-4">
        <p className="rounded-full  bg-amber-950 w-10 text-center text-amber-500">
          {page}
        </p>
        <button
          onClick={changePage}
          className="rounded-lg text-amber-500 bg-amber-950 w-30 hover:text-blue-50 hover:bg-amber-500 "
        >
          Nest
        </button>
      </div>
    </div>
  );
};

export default NewsPage;
