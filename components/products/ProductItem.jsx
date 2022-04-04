import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

import { CartContext } from "../../context/cartContext";

import itemImage from "../../static/images/journaling-template.jpg";

function ProductItem({ id, imageUrl, title, seller, price, category, inCart }) {
  const product = { id, image: imageUrl, title, seller, price, category };
  const { cartItems, setCartItems } = useContext(CartContext);

  const [showAddButton, setShowAddButton] = useState(true);

  useEffect(() => {
    if (inCart) {
      setShowAddButton(!showAddButton);
    }

    return () => {};
  }, []);

  const handleAddItem = (e) => {
    setCartItems(cartItems.concat(product));
    setShowAddButton(!showAddButton);
  };

  const handleRemoveItem = (e) => {
    setCartItems(cartItems.filter((item) => item.id != id));
    setShowAddButton(!showAddButton);
  };

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
          {showAddButton && (
            <Button my={2} colorScheme={"green"} onClick={handleAddItem}>
              Add To Cart
            </Button>
          )}
          {!showAddButton && (
            <Button my={2} colorScheme={"red"} onClick={handleRemoveItem}>
              Remove From Cart
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default ProductItem;
