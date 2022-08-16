import { useRouter } from 'next/router'
import { Flex } from '@chakra-ui/react';
import React from 'react'
import { images, ImageType } from '../../mock-data';
import _ from 'lodash';
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
  const resu = _.find(images, (img: ImageType) => img.id === productId);
  
  let image: ImageType = { src: '', id: ''};

  if (resu) {
    image = {...resu}
  }
  

  return (
    <div>
      ProductInfo
      <Flex justify='center'>
        {!image && (<div>Image Product Not found</div>) }
        {<CardItem img={image} />}
      </Flex>
    </div>

  )
}

export default ProductInfo