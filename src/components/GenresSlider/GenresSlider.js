import React from 'react';
import { useDispatch } from 'react-redux';

// @material
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import LinearProgress from '@material-ui/core/LinearProgress';

// @slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Action
import { selectGenre } from '../../containers/Home/actions';

// utils
import Container from '../../utils/Container';

// styles
import styles from './GenresSlider.module.css';
import { Title } from './styled';

import settings from './SliderOptions';

const GenresSlider = ({ genres, isLoading, selectedGenre }) => {
  const dispatch = useDispatch();

  if (isLoading) return <LinearProgress />;

  const onClick = (genre) => {
    dispatch(selectGenre(genre.slug));
  };

  console.log('selectedGenre: ', selectedGenre);

  return (
    <div>
      <Container>
        <Slider {...settings} className={styles.slider}>
          {genres.map((genre, index) => {
            return (
              <div>
                <div className={styles.slide}>
                  <Card
                    className={[
                      styles.card,
                      {
                        [styles.card_active]:
                          selectedGenre === genre.slug,
                      },
                    ]}
                  >
                    <CardActionArea onClick={() => onClick(genre)}>
                      <Title>{genre.name}</Title>
                    </CardActionArea>
                  </Card>
                </div>
              </div>
            );
          })}
        </Slider>
      </Container>
    </div>
  );
};

export default GenresSlider;
