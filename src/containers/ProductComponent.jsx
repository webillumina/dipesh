import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div key={id}>
        <Link to={`/products/${id}`}>
          <div className="max-w-xs p-6 bg-slate-200 rounded-md">
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
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
