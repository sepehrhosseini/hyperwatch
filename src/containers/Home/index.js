import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

import Grid from '@material-ui/core/Grid';

import TitleDetail from '../../components/TitleDetail';
import List from '../../components/List';

import { Wrapper, Card } from './styled';
import * as Actions from './actions';
import { getSingle as fetchSingleTitleAction } from '../Titles/actions';

import { addToWatchlist } from '../../utils/api';

const Home = ({ match }) => {
  const query = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { movies, shows, isLoading, singleState } = useSelector((state) => ({
    movies: state.home.movies,
    shows: state.home.shows,
    isLoading: state.home.isLoading,
    singleState: state.titles.single,
  }));

  const [alertText, setAlertText] = useState(null);

  const fetchPopularMovies = useCallback(() => dispatch(Actions.getPopularMovies()), [dispatch]);
  const fetchPopularShows = useCallback(() => dispatch(Actions.getPopularShows()), [dispatch]);
  const fetchSingleTitle = useCallback(({ type, id }) => dispatch(fetchSingleTitleAction({ type, id })), [dispatch]);

  useEffect(() => {
    fetchPopularMovies();
    fetchPopularShows();
  }, [fetchPopularMovies, fetchPopularShows]);

  useEffect(() => {
    if (!query.title_type || !query.title_id) return;

    fetchSingleTitle({
      type: query.title_type,
      id: query.title_id,
    });
  }, [fetchSingleTitle, query]);

  const changeAlertText = (text = null) => setAlertText(typeof text === 'string' ? text : null);

  const onTitleClick = ({ title, type }) => {
    fetchSingleTitle({
      type,
      id: title.ids.imdb,
    });

    history.push(`/${type}/${title.ids.imdb}`);
  };

  const onSecActionClick = async ({ title, type }) => {
    await addToWatchlist({ [type]: [title] });

    changeAlertText('Successfully add to watchlist');
  };

  return (
    <Wrapper>
      <Snackbar open={!!alertText} autoHideDuration={6000} onClose={changeAlertText}>
        <Alert onClose={changeAlertText} severity="success" variant="filled">
          {alertText}
        </Alert>
      </Snackbar>
      <Grid container>
        <Grid md={4} item>
          <Card isLoading={isLoading}>
            <List data={{ movies, shows }} onSecActionClick={onSecActionClick} onItemClick={onTitleClick} />
          </Card>
        </Grid>
        <Grid md={8} item>
          <TitleDetail title={singleState.title} isLoading={singleState.isLoading} />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Home;
