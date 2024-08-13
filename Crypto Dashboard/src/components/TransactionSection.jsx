import React from 'react'
import { CustomCard } from '../chakra/CustomCard'
import { Box, Button, Divider, HStack, Icon, Stack, Tag, Text } from '@chakra-ui/react'
import { HiCurrencyDollar } from "react-icons/hi2";
import { RiBitCoinFill } from "react-icons/ri";

function TransactionSection() {

    const transactionDetils = [
        {icon:HiCurrencyDollar, currency:'INR Deposit',date:'2022-06-09',time:'7:06 PM', amount:'81,123.10'},
        {icon:RiBitCoinFill, currency:'BTC Sell',date:'2022-05-27',time:'12:32 PM', amount:'60,84,225'},
        {icon:HiCurrencyDollar, currency:'INR Deposit',date:'2022-06-09',time:'7:06 PM', amount:'81,123.10'},
    ]

  return (
    <CustomCard h='full' >
        <Text color='#535D66' fontWeight='500' > Recent Transaction </Text>
        <Stack gap={4} mt={5} >
            {transactionDetils?.map((data, i) => (
            <React.Fragment key={i}>
                <TransactionLayout data={data} />
                {i !== -1 &&
                <Divider />}
            </React.Fragment>
            ))}
        </Stack>
        <Button bg='#EEEEF4' borderRadius='0.8rem' mt={5} >View All</Button>

    </CustomCard>
  )
}

function TransactionLayout({data}) {
    return (
        <HStack justifyContent='space-between' alignItems='center' >
            <HStack spacing={4} >

            <Tag borderRadius='50%' h='2.2rem' bg='#F3F3F7'> <Icon as={data.icon} fontSize='1.4rem' /> </Tag>

            <Stack lineHeight={1} >
            <Text fontWeight='500' >{data.currency}</Text>
            <Box display='flex' gap={2} color='#797E82'>
                <Text>{data.date}</Text>
                <Text>{data.time}</Text>
            </Box>
            </Stack>

            </HStack>

            <Text fontWeight='bold' fontSize='1.5rem' >
                 + &#8377; {data.amount}
            </Text>

        </HStack>
    )
}

export default TransactionSection