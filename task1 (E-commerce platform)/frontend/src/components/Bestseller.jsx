import React, { useContext, useState,useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const Bestseller =()=>{

    const{products}= useContext(ShopContext);
    const[bestseller,setBestseller]= useState([]);
    useEffect(() => {
      const bestProduct = products.filter((item)=>(item.bestseller));
      setBestseller(bestProduct.slice(0,15))
    
    }, [])
    
     
    
    return(
        <div className="my-10">
            <div className="text-center text-3xl py-8">
                <Title text1={"BEST"} text2={" SELLERS"}/>
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-[#8B7355]">
                From regal lehengas to statement ensembles, explore the designs cherished by our most discerning customers.
                </p>
            </div>
             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 gap-x-4">
                {bestseller.map((item, index) => (
                    <ProductItem
                        key={index}
                        id={item._id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                    />
                ))}
            </div>
            </div>
           
    )
}
export default Bestseller