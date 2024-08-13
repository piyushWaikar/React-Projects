import {
    Box,
    Button,
    Container,
    Flex,
    HStack,
    Heading,
    Icon,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
  } from "@chakra-ui/react";

  import { FaBars, FaUserTie } from "react-icons/fa";
  import { LuUserCircle2 } from "react-icons/lu";
  
  const TopNav = ({ title, onOpen }) => {
    return (
      <Box px="4" bg="white">
        <HStack maxW="70rem" h="16" justify="space-between" mx="auto">
          <Icon
            as={FaBars}
            onClick={onOpen}
            display={{
              base: "block",
              lg: "none",
            }}
          />
          <Heading fontWeight="medium" fontSize="28px">
            {title}
          </Heading>
  
          <Menu>
            <MenuButton>
              <Icon as={LuUserCircle2} fontSize="2.5rem" />
            </MenuButton>
            <MenuList>
              <MenuItem>Logout</MenuItem>
              <MenuItem>Support</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Box>
    );
  };
  
  export default TopNav;