import { useRouter } from 'next/router'
import Image from 'next/image';
import React from 'react'
import { images, ImageType } from '../../mock-data';
import _ from 'lodash';
import { Flex } from '@chakra-ui/react';
import CardItem from '../../components/card-item';


type QueryType = {
  productId: string
}

const ProductInfo = () => {
  const router = useRouter()
  const {
    productId
  } = router.query as QueryType;

  console.log(router.query)
  const image = _.find(images, (img) => img.id === productId) as ImageType;
  console.log(image);

  return (
    <div>
      ProductInfo
      <Flex justify='center'>
        <CardItem img={image.img} id={image.id} />
      </Flex>
    </div>

  )
}

export default ProductInfo