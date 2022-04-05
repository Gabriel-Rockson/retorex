import {
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  TableCaption,
} from "@chakra-ui/react";
import React, { useContext } from "react";

import { CartContext } from "../../context/cartContext";
import ProductList from "../../components/products/ProductList";
import ProductItem from "../../components/products/ProductItem";

function CartPage() {
  const { cartItems, setCartItems } = useContext(CartContext);

  return (
    <Box>
      <Box mb={5} width={["100%", null, null, "60%"]}>
        <Box>
          <TableContainer>
            <Table size={"md"} variant={"striped"} colorScheme={"linkedin"}>
              <TableCaption>Cart Summary</TableCaption>
              <Thead>
                <Tr>
                  <Th>Item</Th>
                  <Th>Quantity</Th>
                  <Th>Price</Th>
                </Tr>
              </Thead>
              <Tbody>
                {cartItems?.map((item) => (
                  <Tr>
                    <Td>{item.title}</Td>
                    <Td isNumeric>1</Td>
                    <Td isNumeric>{item.price}</Td>
                  </Tr>
                ))}
              </Tbody>
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th>Amount Payable</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>All Items</Td>
                  <Td>
                    {cartItems
                      ?.map((item) => Number(item.price))
                      .reduce((a, b) => a + b, 0)}
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>

      <ProductList products={cartItems} />

      <Box>Checkout</Box>
    </Box>
  );
}

export default CartPage;
