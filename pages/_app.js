import { useState } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import MainLayout from "../components/layouts/MainLayout";

import { CartContext } from "../context/cartContext";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const fonts = {
  heading: "Open Sans, sans-serif",
  body: "Raleway, sans-serif",
};

const theme = extendTheme({ colors, fonts });

function MyApp({ Component, pageProps }) {
  const [cartItems, setCartItems] = useState([]);

  return (
    <ChakraProvider theme={theme}>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </CartContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
