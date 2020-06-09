import React from 'react';

// @slick
import Slider from 'react-slick';

import { Slide, Card, CardBg } from './styled';

import styles from './Showcase.module.css';

const items = [
  {
    title: 'Put on a happy face',
    img: '/assets/images/joker.jpg',
    size: 45,
  },
  {
    title: 'I drink and I know things',
    img: '/assets/images/got.jpg',
    size: 30,
  },
  {
    title: 'Fooking Blinders',
    img: '/assets/images/peaky.jpg',
    size: 25,
  },
];

const sliderOptions = {
  slidesToShow: 3,
  variableWidth: true,
  touchThreshold: 17,
  infinite: false,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function Showcase() {
  return (
    <div className={styles.wrapper}>
      <Slider {...sliderOptions}>
        {items.map((item) => {
          return (
            <Slide size={item.size}>
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
    </div>
  );
}
