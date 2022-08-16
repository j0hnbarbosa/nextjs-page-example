import React from 'react'
import { Flex, SimpleGrid } from '@chakra-ui/react';
import _ from 'lodash';
import CardItem from '../../components/card-item'
import { images, ImageType } from '../../mock-data';

const mockData = _.map(images, (image: ImageType) => (
  <CardItem key={image.id} img={image} />
));

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