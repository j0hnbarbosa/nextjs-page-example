import React from 'react'
import { Flex, SimpleGrid  } from '@chakra-ui/react'
import _ from 'lodash';
import CardItem from '../../components/card-item'

const path = "/assets";

const imgs = [
  `${path}/tenis1.webp`,
  `${path}/tenis2.jpg`,
  `${path}/tenis3.webp`,
  `${path}/tenis4.webp`,
  `${path}/tenis5.webp`,
  `${path}/tenis6.webp`,
  `${path}/tenis7.webp`,
  `${path}/tenis8.webp`,
  `${path}/tenis9.webp`,
  `${path}/tenis10.webp`,
];

const mockData = _.times(21, (index) => {
  const chooseImg = Math.floor(Math.random() * imgs.length);

  return (
      <CardItem key={index} img={imgs[chooseImg]} />
  )
});


function Main() {
  return (
    <>
      <Flex justify='center' direction={['column', 'column', 'row']}>
        <SimpleGrid columns={[1, 2, 3]}>
          {mockData}
        </SimpleGrid>
      </Flex>
    </>
  )
}

export default Main