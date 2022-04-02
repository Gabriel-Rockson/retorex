import React from "react";
import Image from "next/image";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

import itemImage from "../../static/images/journaling-template.jpg";

function ProductItem() {
  return (
    <Box border={'gray 1px solid'} >
      <Image 
      src={itemImage} 
      alt="Image of Item"/>
      <Box p={2}>
        <Heading size={'md'}>A Journaling Template</Heading>
        <Box>
          <Text fontSize="3xl" fontWeight={'bold'} fontFamily={'consolas'}>$ 42.59</Text>
          <Button my={2} colorScheme={'green'}>Add To Cart</Button>
        </Box>
      </Box>

    </Box>
  );
}

export default ProductItem;
