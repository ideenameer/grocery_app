import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProductBO } from "../../BO's/ProductBo";
import { CategoryBO } from "../../BO's/CategoryBo";



const HomeScreenVM = () => {

  const [products, setProducts] = useState<ProductBO[]>([]);
  const [category, setCategory] = useState<CategoryBO[]>([]);
  const testGetProducts = async () => {
    try {
      const response = await axios.get("http://10.0.2.2:3000/products");
      if (response.data) {
        setProducts(response.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  
  const getCategory=async()=>{
    try{
       const response = await axios.get("http://10.0.2.2:3000/category");
       if(response.data){
         setCategory(response.data);
       }
    }
    catch(error){
      console.log(error)
    }
  }
  const onSearch=(searchText:string)=>{
      if(searchText.length>=3){
        //connect to api of search
      }
  }
  const handleAddToCart=(product:ProductBO)=>{
      //connect to api of  add to cart
  }

  const onPressSeeAll=()=>{
    //navigation
  }

  return {
    testGetProducts,
    products,
    onSearch,
    handleAddToCart,
    onPressSeeAll,
    getCategory,
    category,
  };
};

export default HomeScreenVM;
