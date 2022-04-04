import HomePageNav from "../navigation/HomePageNav";
import { Box } from "@chakra-ui/react";

function MainLayout({ children }) {
  return (
    <Box>
      <HomePageNav />
      <Box px={[2, 10]} py={[4, 5]}>{children}</Box>
    </Box>
  );
}

export default MainLayout;
