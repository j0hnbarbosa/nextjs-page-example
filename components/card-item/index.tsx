import React, { useState } from 'react'
import Router from 'next/router';
import { Box, Button, Text, Flex, Icon } from '@chakra-ui/react';
import Image from 'next/image'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { ImageType } from '../../mock-data';

type PropsValues = {
  img: ImageType,
}

const CardItem = (props: PropsValues) => {
  const [showButton, setShowButton] = useState(false);
  const [heart, setHeart] = useState(false);

  const {
    img
  } = props;

  const handleHoverIn = () => {
    setShowButton(true);
  }

  const handleHoverOut = () => {
    setShowButton(false);
  }

  const handleSetHeart = () => {
    setHeart((prev) => !prev)
  };

  const handleRedirect = () => {
    Router.push(`/product-info/${img.id}`)
  }

  return (
    <Box>
      <Box
        padding={2}
        borderRight='1px solid #C8C8C8'
        borderBottom='1px solid #C8C8C8'
        _hover={{ cursor: 'pointer' }}
        onMouseEnter={handleHoverIn}
        onMouseLeave={handleHoverOut}
        position='relative'
      >
        <Box onClick={handleSetHeart} position='absolute' top={4} right={6} padding='4px' zIndex={2}>
          <Icon as={heart ? AiFillHeart : AiOutlineHeart} boxSize='1.5em' />
        </Box>

        <Box onClick={handleRedirect}>
          <Box
            width={300}
          >
            <Image
              src={img.src}
              width={298}
              height={280}
              alt={img.src}
            />

            <Flex
              justify='center'
              opacity={showButton ? 1 : 0}
              transition='opacity 0.2s ease-in-out'
            >
              <Button color='blue' onClick={handleRedirect}>
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
    </Box>
  )
}

export default CardItem