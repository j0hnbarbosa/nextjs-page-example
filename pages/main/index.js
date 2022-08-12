import React from 'react';
import _ from 'lodash';

import {
  Grid
} from 'semantic-ui-react';

import CardItem from '../../components/card-item';
import {
  Container
} from './styles';

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
    <Grid.Column key={index}>
      <CardItem img={imgs[chooseImg]} />
    </Grid.Column>
  )
});

function Main() {
  return (
    <Container>
      <Grid container columns={3} divided stackable>
        {mockData}
      </Grid>
    </Container>
  );
}

export default Main;
