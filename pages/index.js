import React from "react";
import HomePageNav from "../components/navigation/HomePageNav";
import ProductList from "../components/products/ProductList";

const HomePage = () => {
  return (
    <div>
      <ProductList />
      <ul>
        <li>List the currently added items</li>
        <li>
          People should be able to add them to their carts by clicking on buy
        </li>
      </ul>
      <p>Footer</p>
    </div>
  );
};

export default HomePage;
