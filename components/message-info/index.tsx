import { Text, Flex, Box } from '@chakra-ui/react'
import React from 'react'

const MessageInfo = () => {
  return (
    <Flex justify='center'>
      <Box width='100%' boxShadow='0 0 0.5em #383838'>
        <Text textAlign='center'>Sample Page using NextJs</Text>
      </Box>
    </Flex>
  )
}

export default MessageInfo