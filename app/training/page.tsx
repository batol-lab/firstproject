"use client";
import { useState } from "react";
import Navbar from "./_components/Navbar";
import ProductCard from "./_components/productCard";
import { useGetProducts } from "./_hooks/product.hook";
import { ProductType } from "./_type/product.responce.type";
import { ThreeDots } from "react-loader-spinner";
import { useGetCategories } from "./_hooks/categories.hook";
import CategoryBar from "./_components/CategoryBar";
const Training = () => {
  const [search, setSearch] = useState("");
  const[page,setPage]=useState(0);
  const[selectedCategory,setselectedCategory]=useState("")
  const { data, isLoading, error, isError } = useGetProducts(search,page ,selectedCategory);
  const {data:CategoriesData,isLoading:isCategoriesLoading,isError:isCategoriesError,error:CategoriesError} = useGetCategories();
  const totalPages=data?Math.ceil(data.total/data.limit)-1:0;
  function nextPage(){

    if(data && page<totalPages){
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
      <div className="flex gap-4 overflow-auto ">
        {CategoriesData &&
          ["all", ...CategoriesData].map((element: string, index) => {
            return (
              <CategoryBar
                key={index}
                element={element}
                setselectedCategory={setselectedCategory}
              />
            );
          })}
      </div>
      <div>
        {isLoading || isCategoriesLoading ? (
          <div className="flex justify-center h-[calc(100vh-65px)] items-center">
            <ThreeDots
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="audio-loading"
              wrapperStyle={{}}
              wrapperClass="wrapper-class"
              visible={true}
            />
          </div>
        ) : isError || isCategoriesError ? (
          <div>
            products error{error + ""} categorieserror{CategoriesError + ""}
          </div>
        ) : (
          <div className="products-grid">
            {data &&
              data.products.map((element: ProductType, index) => {
                return (
                  <ProductCard
                    key={index}
                    title={element.title}
                    description={element.description}
                    rating={element.rating}
                    price={element.price}
                    thumbnail={element.thumbnail}
                  />
                );
              })}
          </div>
        )}
      </div>
      <div className="flex justify-center  items-center">
        <div onClick={prevPage} className="mx-20 bg-amber-200 rounded-sm px-2 my-20 w-30  text-center hover:bg-amber-300 cursor-pointer">
          Prv
        </div>
        <div className="bg-gray-500 rounded-full px-2 text-white py-2 text-center h-10  my-20  w-10">
          {page+1}
        </div>
        <div onClick={nextPage}className="mx-20 bg-amber-200 rounded-sm px-2 my-20 w-30 text-center  hover:bg-amber-300 cursor-pointer">
          Nex
        </div>
      </div>
    </div>
  );
}

export default Training;
