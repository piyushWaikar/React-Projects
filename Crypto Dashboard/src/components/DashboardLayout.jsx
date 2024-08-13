import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import TopNav from "./TopNav";
import SideDrawer from "./SideDrawer";
import Sidenav from "./Sidenav";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex>
      <Box
        display={{
          base: "none",
          lg: "flex",
        }}
      >
        <Sidenav />
      </Box>
      <SideDrawer isOpen={isOpen} onClose={onClose} />
      <Box flexGrow={1}>
        <TopNav title={title} onOpen={onOpen} />
        <Container
          overflowX="hidden"
          overflowY="auto"
          h="calc(100vh - 88px)"
          mt="6"
          maxW="85%"
        >
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;