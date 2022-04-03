import { useState } from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import ProductItem from "./ProductItem";

import { products } from "../../data/products";

function ProductList() {
  const [allProducts, setAllProducts] = useState(products);
  console.log(allProducts)
  return (
    <Box px={[2, 10]} py={[4, 5]}>
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
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
