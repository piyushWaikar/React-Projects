import React from 'react'
import { FaSortAmountDown } from "react-icons/fa";
import { FaSortAmountUp } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaCircleInfo } from "react-icons/fa6";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'

import {HStack, Box,Stack, Text, Icon, Button, Tag } from '@chakra-ui/react'

function PortfolioSection() {
  return (
    <HStack justifyContent='space-evenly' borderRadius='1rem' bg='white' p={4} flexDirection={{base:'column',md:'column',sm:'column',lg:'column', xl:'row'}} spacing={{md:'1rem',sm:'1rem'}}>
    <Box display='flex' spacing={{md:'1rem',sm:'1rem'}} gap={4} flexDirection={{base:'column',md:'row',xl:'row',lg:'row'}} >
    <Stack lineHeight={1.3}>
      <Text fontSize='' fontWeight='' color='#535D66'>Total portfolio value

        <Popover>
          <PopoverTrigger>
            <Button color='#797E82' m={0} p={0} h={0} w={0}>
              <Icon as={FaCircleInfo} /></Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Confirmation!</PopoverHeader>
            <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
          </PopoverContent>
        </Popover>

      </Text>
      <Text fontSize='1.5rem' fontWeight='500' color='' display='flex' alignItems='center'>
        <Icon as={MdOutlineCurrencyRupee} /> 112,312.00</Text>
    </Stack>

    <Box display='flex' gap={{base:"2rem"}}  >
    <Stack lineHeight={1.3} >
      <Text fontSize='' fontWeight='' color='#535D66'>Wallet Balance</Text>
      <Text fontSize='1.5rem' fontWeight='500' color='' display='flex' alignItems='center'>22.3940100<Tag borderRadius={24} ml={2}>BTC</Tag></Text>
    </Stack>

    <Stack lineHeight={1.3}>
      <Text fontSize='' fontWeight='' color='#535D66'>Wallet Balance</Text>
      <Text fontSize='1.5rem' fontWeight='500' color='' display='flex' alignItems='center'>
        <Icon as={MdOutlineCurrencyRupee} />1,300 <Tag borderRadius={24} ml={2} >INR</Tag> </Text>
    </Stack>
    </Box>
    </Box>

    <Box display='flex' gap={5} mt={{base:'1rem'}}>
      <Button bg='#5F00D9' color='white'>
        <Icon as={FaSortAmountDown } /> Deposit</Button>
      <Button bg='#5F00D9' color='white'>
        <Icon as={FaSortAmountUp } /> Withdraw</Button>
    </Box>
  </HStack>
  )
}

export default PortfolioSection