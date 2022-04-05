import React from "react";
import ProductList from "../components/products/ProductList";

import { products } from "../data/products";

const HomePage = () => {
  return (
    <div>
      <ProductList products={products} />
      <p>Footer</p>
    </div>
  );
};

export default HomePage;
