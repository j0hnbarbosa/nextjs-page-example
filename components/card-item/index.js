import React, { useState } from 'react';
import Image from 'next/image';

import {
  Button,
} from 'semantic-ui-react';

import {
  Container,
  ContainerButtonSee,
  Content,
  Text,
} from './styles';

function CardItem(props) {
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
    <>
      <Container onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>
        <Container>
          <Content>
            <Image src={img} alt={img} width={350} height={350} />
          </Content>

          <ContainerButtonSee showButton={showButton}>
            <Button basic color='blue'>
              Conferir
            </Button>
          </ContainerButtonSee>
        </Container>

        <Text>Ténis</Text>
        <Text>⭐⭐⭐⭐★</Text>
        <Text>Frete Grátis</Text>
        <Text>R̶$̶2̶0̶0̶</Text>
        <Text>R$149,99</Text>
        <Text>ou 3 x R$49,99</Text>
        <Text>Coleção</Text>
      </Container>
    </>
  );
}

export default CardItem;
