import React from 'react';

import Grid from '@material-ui/core/Grid';

import TitleDetail from '../TitleDetail';
import TitlesList from '../TitlesList';

import Container from '../../utils/Container';

import { Card } from './styled';

const TitlesGrid = ({
  data,
  loadingIds,
  singleState,
  listIsLoading,
  watchlist,
  wrapperStyles,
  children,
}) => {
  return (
    <div style={{ marginTop: '2rem', ...wrapperStyles }}>
      <Container>
        <Grid container spacing={4}>
          <Grid md={4} item xs={12}>
            <Card isLoading={listIsLoading}>
              <TitlesList
                data={data}
                loadingIds={loadingIds}
                watchlist={watchlist}
              />
            </Card>
          </Grid>
          <Grid md={8} item xs={12}>
            <TitleDetail
              title={singleState.title}
              isLoading={singleState.isLoading}
            />
          </Grid>
        </Grid>
        {children}
      </Container>
    </div>
  );
};

TitlesGrid.defaultProps = {
  wrapperStyles: {},
};

export default TitlesGrid;
