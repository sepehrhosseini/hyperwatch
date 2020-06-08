import React from 'react';
import Grid from '@material-ui/core/Grid';
import { get } from 'lodash';

import { Wrapper, LeftCol, Title, Subtitle } from './styled';
import { GlobalStyles, Card } from '../../containers/Home/styled';

export function LeftColComponent({ title, ...props }) {
  return (
    <LeftCol>
      <Grid
        container
        direction="column"
        justify="space-between"
        style={{ height: '100%' }}
      >
        <Grid item>
          <Title>{get(title, 'title')}</Title>
          <Subtitle>{get(title, 'year')}</Subtitle>
        </Grid>
        <Grid item>
          <div
            style={{
              color: '#6A6A6A',
              fontSize: 23,
              fontFamily: 'Roboto Condensed',
            }}
          >
            {get(title, 'Director')}
          </div>

          <div
            style={{
              color: '#6A6A6A',
              fontSize: 23,
              fontWeight: 100,
              fontFamily: 'Roboto Condensed',
              marginTop: 27,
            }}
          >
            {get(title, 'Actors')}
          </div>
        </Grid>
      </Grid>
    </LeftCol>
  );
}

export default function TitleDetail({
  title,
  isLoading = false,
  ...props
}) {
  return (
    <Wrapper>
      <GlobalStyles />
      <Card
        style={{ display: 'flex', flexDirection: 'column' }}
        isLoading={isLoading}
        fluid
        minHeight="410px"
        placeholder={!title && 'Choose a Title'}
      >
        <Grid container style={{ height: '100%', flex: 1 }}>
          <Grid xs={6} item>
            <LeftColComponent title={title} />
          </Grid>
          <Grid
            xs={6}
            item
            style={{
              backgroundImage: `url(${get(title, 'Poster')})`,
              backgroundSize: 'cover',
            }}
          />
        </Grid>
      </Card>
    </Wrapper>
  );
}
