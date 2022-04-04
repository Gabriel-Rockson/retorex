import React, { useContext } from "react";
import { Button, Text, Icon } from "@chakra-ui/react";
import { BsCart3 } from "react-icons/bs";

import { CartContext } from "../../context/cartContext";

function CartButton({}) {
  const { cartItems, setCarItems } = useContext(CartContext);

  return (
    <Button colorScheme="whiteAlpha" variant="ghost">
      <Text mr="2">Cart</Text>
      <Icon as={BsCart3} fontSize={"2xl"} color="white" />
      <Text as="sup" fontSize="16px">
        {cartItems.length}
      </Text>
    </Button>
  );
}

export default CartButton;
