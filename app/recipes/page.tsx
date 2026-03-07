"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { Recipestype, ResponceRecipes } from "./_types/recipes.types";
import { useRecipes } from "./_hooks/recipes.hooks";
import Navbar from "./_components/Navbar";
import RecipesCard from "./_components/RecipesCard";
import { ThreeDots } from "react-loader-spinner";

const Recipes = () => {
 const [page,setPage]=useState(0);
  const [search, setSearch] = useState("");
  const { data, isLoading, isError, error } = useRecipes(search,page);
  const limit =30;
  const totalPage=data?Math.ceil(data.total/limit)-1:0;
  console.log("Total Page:",totalPage);
  
  function nextPage(){
    if(data&&page<totalPage){
      setPage(page+1)
    }
  }
  function prevPage(){
    if(page>0){
      setPage(page-1)
    }
  }

  return (
    <div>
      <Navbar search={search} setSearch={setSearch} />
      {isLoading ? (
        <div className="flex justify-center items-center h-[calc(100vh-140px)]">
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
        <div>{error + ""}</div>
      ) : (
        <div className="p-6 bg-gray-100 min-h-screen">
          <h1 className="text-3xl font-bold mb-6">Recipes</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data &&
              data.recipes.map((element: Recipestype, index) => {
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col p-4"
                  >
                    {/* الصورة */}
                    <div className="w-full h-48 mb-3 overflow-hidden rounded-lg">
                      <img
                        src={element.image}
                        alt={element.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* الاسم */}
                    <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                      {element.name}
                    </h2>

                    {/* المكونات */}
                    <div className="mb-2">
                      <h3 className="font-medium text-sm mb-1">Ingredients:</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 max-h-20 overflow-y-auto">
                        {element.ingredients.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {/* التعليمات */}
                    <div className="mb-2">
                      <h3 className="font-medium text-sm mb-1">
                        Instructions:
                      </h3>
                      <ul className="list-decimal list-inside text-sm text-gray-700 max-h-24 overflow-y-auto">
                        {element.instructions.map((step, idx) => (
                          <li key={idx}>{step}</li>
                        ))}
                      </ul>
                    </div>

                    {/* التقييم */}
                    <p className="mt-auto font-semibold text-yellow-600">
                      Rating: {element.rating}/5
                    </p>
                  </div>
                );
              })}
          </div>
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

export default Recipes;
