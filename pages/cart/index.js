import { Box } from "@chakra-ui/react";
import React, {useContext} from "react";

import { CartContext } from "../../context/cartContext";

function CartPage() {
  const {cartItems, setCartItems} = useContext(CartContext)

  return (
    <Box>
      {cartItems.map(item => (
        <Box key={item.id}>
          {item.title}
        </Box>
      ))}
    </Box>
  );
}

export default CartPage;
