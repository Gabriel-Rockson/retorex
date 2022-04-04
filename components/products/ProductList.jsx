import { useState, useContext } from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import ProductItem from "./ProductItem";

import { products } from "../../data/products";

import { CartContext } from "../../context/cartContext";

function ProductList() {
  const [allProducts, setAllProducts] = useState(products);
  const { cartItems, setCartItems } = useContext(CartContext);

  return (
    <Box>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          null,
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
        ]}
        templateRows={["repeat(1, 1fr)"]}
        gap={[5, 6]}
      >
        {allProducts.map((product) => (
          <GridItem key={product.id}>
            <ProductItem
              id={product.id}
              imageUrl={product.image}
              title={product.title}
              seller={product.seller}
              price={product.price}
              category={product.category}
              inCart={cartItems.some((item) => item.id === product.id)}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
