import React, { useState } from 'react'
import { Box, Button, Text, Flex } from '@chakra-ui/react'
import Image from 'next/image'

type PropsValues = {
  img: string,
}

const CardItem = (props: PropsValues) => {
  const [showButton, setShowButton] = useState(false);

  const {
    img
  } = props;

  const handleHoverIn = () => {
    setShowButton(true);
  }

  const handleHoverOut = () => {
    setShowButton(false);
  }

  return (
    <Box >
      <Box
        padding={2}
        borderRight='1px solid #C8C8C8'
        borderBottom='1px solid #C8C8C8'
        onMouseEnter={handleHoverIn}
        onMouseLeave={handleHoverOut}
        _hover={{ cursor: 'pointer' }}
      >
        <Box
          width={300}
        >
          <Image
            src={img}
            width={298}
            height={280}
            alt={img}
          />

          <Flex
            justify='center'
            opacity={showButton ? 1 : 0}
            transition='opacity 0.2s ease-in-out'
          >
            <Button color='blue'>
              Conferir
            </Button>
          </Flex>
        </Box>

        <Text>Ténis</Text>
        <Text>⭐⭐⭐⭐★</Text>
        <Text>Frete Grátis</Text>
        <Text>R̶$̶2̶0̶0̶</Text>
        <Text>R$149,99</Text>
        <Text>ou 3 x R$49,99</Text>
        <Text>Coleção</Text>
      </Box>
    </Box>
  )
}

export default CardItem