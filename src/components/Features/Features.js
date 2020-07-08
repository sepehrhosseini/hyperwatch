import React from 'react';

import { Wrapper, Card, Desc, Title, Subtitle } from './styled';

import Container from '../../utils/Container';

const features = [
  {
    title: 'Discover',
    subtitle: 'Subtitle',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quam.',
  },
  {
    title: 'Watchlist',
    subtitle: 'Subtitle',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quam.',
  },
  {
    title: 'Review',
    subtitle: 'Subtitle',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quam.',
  },
];

const Features = () => {
  return (
    <Container>
      <Wrapper>
        {features.map((feature) => (
          <Card>
            <Desc>{feature.desc}</Desc>
            <Subtitle>{feature.subtitle}</Subtitle>
            <Title>{feature.title}</Title>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Features;
