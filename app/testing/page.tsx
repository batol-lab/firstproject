"use client"
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react'
import { useGetProducts } from './_hooks/products.hooks';
import { Productstype } from './_types/products.type';
import Products from './_components/products';
import { useGetCategories } from './_hooks/categories.hook';
import NavbarComponent from './_components/Navbar.component';
import CategoryComponent from './_components/Category';



const Testing = () => {
  const[page,setPage]=useState(0);
    const[search,setSearch]=useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const { data, isLoading, isError, error } = useGetProducts(search ,page,selectedCategory);
    const {
      data: categories,
      isLoading: isLoadingCategories,
      isError: isErrorCategories,
      error: errorCategories,
    } = useGetCategories();
    const totalPage=data?Math.ceil(data.total/data.limit)-1:0; 
    function NexPage(){
      if(page<totalPage){
        setPage(page+1)}
      }
      
  return (
   <div>
    <NavbarComponent search={search} setSearch={setSearch} />
    <div>
      {
        categories&&["all",...categories].map((element:string,index:number)=>{
return <CategoryComponent key={index} element={element} setSelectedCategory={setSelectedCategory}/>
        })
      }
    </div>

    { isLoading||isLoadingCategories?<div>isLoading...</div>:
    isError||isErrorCategories?<div>{error+""}</div>:
    <div>{
        data&&data.products.map((element:Productstype,index:number)=>{
            return <Products key={index}
            title={element.title}
            description={element.description}
            price={element.price}
            rating={element.rating} thumbnail={element.thumbnail}            />

        })}

    
   </div>
}
<div>
  <div onClick={NexPage}>Nex</div>
  <div>0</div>
  <div onClic={PrevPage}>Prev</div>
</div>
</div>
  )
}

export default Testing;