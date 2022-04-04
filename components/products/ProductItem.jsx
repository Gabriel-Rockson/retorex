import React, { useContext } from "react";
import Image from "next/image";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

import { CartContext } from "../../context/cartContext";

import itemImage from "../../static/images/journaling-template.jpg";

function ProductItem({ id, imageUrl, title, seller, price, category }) {
  const product = { id, image: imageUrl, title, seller, price, category };
  const { cartItems, setCartItems } = useContext(CartContext);

  return (
    <Box pb={2} boxShadow="md" fontFamily="sans-serif" position={"relative"}>
      <Image
        src={imageUrl}
        blurDataURL={itemImage}
        alt={title}
        width={500}
        height={400}
      />
      <Box p={2}>
        <Heading size={"sm"}>{title}</Heading>
        <Text pt={2}>Category: {category}</Text>
        <Text pt={2}>Sold By: {seller}</Text>
        <Box>
          <Text fontSize="xl" fontWeight={"bold"}>
            {price}
          </Text>
          <Text>Sold By: {seller}</Text>
          <Button
            my={2}
            colorScheme={"green"}
            onClick={() => setCartItems(cartItems.concat(product))}
          >
            Add To Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductItem;
