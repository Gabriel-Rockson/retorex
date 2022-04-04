import { useState } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { CartContext } from "../context/cartContext";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  const [cartItems, setCartItems] = useState([]);

  return (
    <ChakraProvider theme={theme}>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <Component {...pageProps} />
      </CartContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
