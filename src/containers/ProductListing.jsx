import React, { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const ProductListing = () => {

  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("FETCH PRODUCTS ERROR", err);
      });
    dispatch(setProducts(response.data));
  };
  
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
