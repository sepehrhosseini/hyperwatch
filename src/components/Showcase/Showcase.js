import React from 'react';

import { Link } from 'react-router-dom';

import { Wrapper, Slider, Slide, Card, CardBg } from './styled';
import Container from '../../utils/Container';

import styles from './Showcase.module.css';

const items = [
  {
    title: 'Put on a happy face',
    img: '/assets/images/joker.jpg',
    size: 45,
    type: 'movies',
    id: 'tt7286456',
  },
  {
    title: 'I drink and I know things',
    img: '/assets/images/got.jpg',
    size: 30,
    type: 'shows',
    id: 'tt0944947',
  },
  {
    title: 'Fooking Blinders',
    img: '/assets/images/peaky.jpg',
    size: 25,
    type: 'shows',
    id: 'tt2442560',
  },
];

const sliderOptions = {
  slidesToShow: 3,
  variableWidth: true,
  touchThreshold: 17,
  infinite: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function Showcase() {
  return (
    <Container style={{ marginTop: 100 }}>
      <Slider {...sliderOptions}>
        {items.map((item) => {
          return (
            <Slide
              size={item.size}
              as={Link}
              to={`/${item.type}/${item.id}`}
            >
              <Card>
                <CardBg>
                  <img
                    className={styles.bgImg}
                    src={item.img}
                    alt={item.title}
                  />
                </CardBg>
                <div className={styles.content}>
                  <div className={styles.title}>{item.title}</div>
                </div>
              </Card>
            </Slide>
          );
        })}
      </Slider>
    </Container>
  );
}
