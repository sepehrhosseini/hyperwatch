import React from 'react';

import {
  Wrapper,
  Heading,
  Slider,
  SliderWrapper,
  Card,
  Title,
  Avatar,
} from './styled';

import Container from '../../utils/Container';

const actors = [
  {
    name: 'Ed Norton',
    avatar: '/assets/images/actors/norton.png',
  },
  {
    name: 'Leo Dicaprio',
    avatar: '/assets/images/actors/dicaprio.png',
  },
  {
    name: 'Emily Blunt',
    avatar: '/assets/images/actors/blunt.png',
  },
  {
    name: 'Al Pacino',
    avatar: '/assets/images/actors/pacino.png',
  },
];

const sliderOptions = {
  slidesToShow: 3,
  variableWidth: true,
  touchThreshold: 17,
  infinite: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
      },
    },
  ],
};
const Actors = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Actors</Heading>
        <SliderWrapper>
          <Slider {...sliderOptions}>
            {actors.map((actor) => (
              <div>
                <Card>
                  <Avatar>
                    <img src={actor.avatar} alt={actor.name} />
                  </Avatar>
                  <Title>{actor.name}</Title>
                </Card>
              </div>
            ))}
          </Slider>
        </SliderWrapper>
      </Wrapper>
    </Container>
  );
};

export default Actors;
