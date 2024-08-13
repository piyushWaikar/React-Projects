import React from 'react'
import { CustomCard } from '../chakra/CustomCard'
import { Box, Button, HStack, Icon, Image, Stack, Tag, Text } from '@chakra-ui/react'
import { GoArrowUpRight } from "react-icons/go";
import { BiSolidPlusCircle } from "react-icons/bi";
import { PiMinusCircleFill } from "react-icons/pi";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


function PriceSection() {

    const timeArr = [{time:'7:15 pm'},{time:'12:55 am'},{time:'6:35 am'},{time:'12:15 pm'},{time:'5:55 pm'}];

return (
<CustomCard display='flex' flexDirection='column' justifyContent='space-between'>
    <HStack justifyContent='space-between'>

    <Stack lineHeight={1.3}>
        <Text fontSize='' fontWeight='' color='#535D66'>Current Price</Text>
        <Text fontSize='1.5rem' fontWeight='500' color='' display='flex' alignItems='center'><Icon as={MdOutlineCurrencyRupee} />26,670.40<Tag color='green' bg='transparent' borderRadius={24} > <Icon as={GoArrowUpRight}/> 0.04% </Tag></Text>
    </Stack>
    <Box display='flex' gap='4'>
          <Button bg='#5F00D9' color='white'>
            <Icon as={BiSolidPlusCircle } /> Buy</Button>
          <Button bg='#5F00D9' color='white'>
            <Icon as={PiMinusCircleFill } /> Sell</Button>
    </Box>
    </HStack>

<Box mt={7}>
    <Box>
        <Tabs variant='soft-rounded' colorScheme='green'>
            <TabList display='flex' justifyContent='flex-end' >
                <Box display='flex' bg='#F7F7F8' borderRadius='sm' > {['1Hr','1D','1W','1M'].map((arr,i)=><Tab _selected={{bg:'white'}} fontSize='1rem' p={1} m={1} borderRadius='md' key={i}>{arr}</Tab>)} </Box>
            </TabList>
            <TabPanels>
                <TabPanel mt={5} >
                <Image src='/Graph.png' w='100%' h='116px' />
                </TabPanel>
                <TabPanel h='167px'>
                    <p>two!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </Box>

    <Box display='flex' justifyContent='space-evenly' color='#797E82'> {timeArr.map((time,i)=><Text
            key={i}>{time.time}</Text>)}</Box>
</Box>
</CustomCard>
)
}

export default PriceSection