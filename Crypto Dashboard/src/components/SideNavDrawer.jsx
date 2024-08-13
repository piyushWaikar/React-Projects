import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    StackItem
  } from '@chakra-ui/react'
  import { Box, Stack, HStack, Icon, Text, Heading, Center } from '@chakra-ui/react';
  import { RxDashboard } from "react-icons/rx";
  import { GrTransaction } from "react-icons/gr";
  import { BiSupport } from "react-icons/bi";
  import { LuMenu } from "react-icons/lu";

const SideNavDrawer = () => {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const btnRef = React.useRef()

        const navLinks = [
            {
              icons: <RxDashboard />,
              text: "Dashboard",
              links: "/"
            },
            {
              icons: <GrTransaction />,
              text: "Transactions",
              links: "/transactions"
            }
          ];

          const techSupport = {icons:<BiSupport />,text:"support", link:"/support"};

      
        return (
          <StackItem display={{base:'block', md:'block', lg:'none'}} >
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
             <Icon as={LuMenu}/>
            </Button>
            <Drawer
              isOpen={isOpen}
              placement='left'
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Crypto Dashboard</DrawerHeader>
      
                <DrawerBody>
                  <Input placeholder='Type here...' />
                  <Box p="4" display="flex" flexDirection="column" gap={1} fontSize="1rem" >
                    {navLinks.map((obj, i) => <HoverEffects key={i} obj={obj} />)}
                    </Box>
                </DrawerBody>
      
                <DrawerFooter>
                <HoverEffects obj={techSupport}/>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </StackItem>
        )
      }


      function HoverEffects({ obj }) {
        return (
          <HStack
            as='a'
            href={obj.links}
            color='#797E82'
            _hover={{ bg: '#F3F3F7', color:'#171717', cursor: 'pointer'  }}
            spacing={3}
            p={2}
            borderRadius={3}
          >
            <Icon as={() => obj.icons} />
            <Text>{obj.text}</Text>
          </HStack>
        );
      }

export default SideNavDrawer