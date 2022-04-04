import React from "react";
import { useRouter } from "next/router";
import {
  Flex,
  Spacer,
  Box,
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

import { BiShowAlt } from "react-icons/bi";
import { ImBin2 } from "react-icons/im";
import CartButton from "./CartButton";

function HomePageNav() {
  const router = useRouter();

  const handleOpenCart = (e) => {
    e.preventDefault();
    router.push("/cart");
  };

  return (
    <>
      <Flex bg="black" px={[2, 10]} py={2} alignItems="center">
        <Box>
          <Heading size="md" color="white">
            Retorex
          </Heading>
        </Box>
        <Spacer />
        <Flex>
          <Button mr={[2, 4]} colorScheme="blue">
            Start Selling
          </Button>
          <Menu>
            <MenuButton as="div" cursor={"pointer"}>
              <CartButton />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={handleOpenCart} icon={<BiShowAlt />}>
                Show Cart Items
              </MenuItem>
              <MenuItem icon={<ImBin2 />}>Clear Items</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </>
  );
}

export default HomePageNav;
