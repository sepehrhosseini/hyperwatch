import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';

import TitleDetail from '../../components/TitleDetail';
import { get } from 'lodash';

import List from '../../components/List';
import { Card, Wrapper } from '../Home/styled';
import { searchTitles } from './actions';
import { updateSearchQuery as updateQueryAction } from '../Header/actions';
import { getSingle as getSingleAction } from '../Titles/actions';

const SearchPage = ({ match, updateQuery, query, getSingle, movies, shows, isLoading, single }) => {
  useEffect(() => {
    const queryInURL = get(match, 'params.query');
    if (queryInURL && queryInURL !== query) {
      updateQuery(queryInURL);
    }
  });

  const handleItemClick = ({ title, type }) => {
    getSingle({
      id: get(title, [title.type, 'ids', 'imdb']),
      type,
    });
  };

  return (
    <Wrapper>
      <Grid container>
        <Grid item md={4}>
          <Card isLoading={isLoading}>
            <List data={{ movies, shows }} onItemClick={handleItemClick} />
          </Card>
        </Grid>
        <Grid item md={8}>
          <TitleDetail title={single.title} isLoading={single.isLoading} />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default connect(
  (state) => ({
    movies: state.search.movies,
    shows: state.search.shows,
    query: state.header.searchQuery,
    isLoading: state.search.isLoading,
    single: state.titles.single,
  }),
  {
    searchTitlesConnect: searchTitles,
    updateQuery: updateQueryAction,
    getSingle: getSingleAction,
  }
)(SearchPage);
