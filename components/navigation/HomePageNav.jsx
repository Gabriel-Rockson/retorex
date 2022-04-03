import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Text,
  Button,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { BsCart3 } from "react-icons/bs";
import { BiShowAlt } from "react-icons/bi";
import { ImBin2 } from "react-icons/im";

function HomePageNav() {
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
            <MenuButton as="div">
              <Button colorScheme="whiteAlpha" variant="ghost">
                <Text mr="2">Cart</Text>
                <Icon as={BsCart3} fontSize={"2xl"} color="white" />
                <Text as='sup' fontSize="16px">3</Text>
              </Button>
            </MenuButton>
            <MenuList>
              <MenuItem icon={<BiShowAlt />}>Show Items</MenuItem>
              <MenuItem icon={<ImBin2 />}>Clear Items</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </>
  );
}

export default HomePageNav;
