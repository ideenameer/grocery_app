import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProductBO } from "../../BO's/ProductBo";

const HomeScreenVM = () => {

  const [products, setProducts] = useState<ProductBO[]>([]);
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
  return {
    testGetProducts,
    products,
  };
};

export default HomeScreenVM;
