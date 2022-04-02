import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import ProductItem from "./ProductItem";

function ProductList() {
  return (
    <Box px={[2, 10]} py={[4, 5]}>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
        ]} templateRows={['repeat(1, 1fr)']}
        gap={5}
      >
        {
          [1, 2, 3, 4, 5, 7, 6, 10, 11, 23].map(number => (
            <GridItem key={number}>
              <ProductItem />
            </GridItem>
          ))
        }
      </Grid>
    </Box>
  );
}

export default ProductList;
