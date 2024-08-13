import React from 'react'
import { CustomCard } from '../chakra/CustomCard'
import { Tag, Text } from '@chakra-ui/react'

function Loan() {
  return (
    <CustomCard bgImage='/VisualYellowbg.png' bgColor='white' bgSize='cover' >
      <Text>
        <Tag bg='#5F00D9' color='white' borderRadius='xl' >Loans</Tag>
      </Text>
        <Text fontSize='1rem' mt={2}>Learn more about loans - Keep your Bitcoin, access it's value without selling it </Text>
    </CustomCard>
  )
}

function Contact() {
    return (
      <CustomCard bgImage='/VisualBluebg.png' bgColor='#5F00D9' bgSize='cover' >
          <Text>
          <Tag bg='white' color='#5F00D9' borderRadius='xl'>Contact</Tag>
          </Text>
          <Text mt={2} color='white' fontSize='1rem' >Learn more about our Real Estate, Mortgage, and corporate account services </Text>
      </CustomCard>
    )
  }

  function Chatbox() {
    return (
      <CustomCard bgImage='/VisualBluebg.png' bgColor='#5F00D9' bgSize='cover' maxW='30rem' letterSpacing={4} >
        <Text  >
          <Tag>Chatbox</Tag>
        </Text>
          <Text mt={3} color='white'>Chat with us now</Text>
      </CustomCard>
    )
  }



export { Loan,Contact,Chatbox}