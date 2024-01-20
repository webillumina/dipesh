import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const {image , title  , category}  = product
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("FETCH PRODUCT DETAIL ERROR", err);
      });
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    // return () => {
    //     dispatch(removeSelectedProduct());
    // }
  }, [productId]);

  return (
    <div className="p-6 bg-slate-200 rounded-md">
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
      />
      <div className="my-4">
        <span className="block text-xs font-medium tracki uppercase dark:text-violet-400">
        {category}
        </span>
        <h2 className="text-xl font-semibold tracki">{title}</h2>
      </div>
    </div>
  );
};

export default ProductDetail;
