"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import FormComponent from "@/components/FormComponent";
import { Button } from "reactstrap";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const[products, setProducts] = useState([]);
  const[filteredproducts, setFilteredProducts] = useState([]);

  const getAllProduct = async () =>{
    try{
    const response = await fetch("https://dummyjson.com/products");

    if(!response.ok) throw new Error("Failed")

    const allproduct = await response.json() 
    setProducts(allproduct.products);
    setFilteredProducts(allproduct.products);
    }catch(error){
      setProducts([]);
      setFilteredProducts([]);
      console.log("error",error)
    }
  };
  console.log("-products-",products)
  console.log("-filteredproduct-",filteredproducts)

  useEffect(()=>{
    getAllProduct();
  },[]);

  const handleSearch = (text)=>{
    const filterproduct = products.filter((p)=> p.title.toLowerCase().includes(text.toLowerCase()));
    
    setFilteredProducts(filterproduct);
  }
  return (
    <div>
      <Header />
      <FormComponent onSearch={handleSearch}/>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-10">
        {filteredproducts.map((item) =>(
          <div key = {item.title} className="flex flex-col items-center border border-gray-300 rounded-3xl hover:shadow-lg cursor-pointer"
          onClick={()=>router.push(`/products/${item.id}`)}>
            <img alt={item.title} src={item.thumbnail}/>
            <p className = "text-[16px] ">{item.title}</p>
            <p className = "text-[16px] ">{item.price}$</p>
            <div className="flex-row">
            </div>
        
          </div>
        ))}
      </div>
    </div>
  );
}
