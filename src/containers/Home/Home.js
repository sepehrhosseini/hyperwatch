import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TitlesGrid from '../../components/TitlesGrid';
import GenresSlider from '../../components/GenresSlider';

import * as Actions from './actions';

import { getWatchlist, getGenres, getPopular } from './actions';

const selectors = (state) => ({
  movies: state.home.movies,
  shows: state.home.shows,
  isLoading: state.home.isLoading,
  singleState: state.titles.single,
  watchlist: state.home.watchlist,
  genres: state.home.genres,
});

const Home = ({ match }) => {
  const dispatch = useDispatch();
  const {
    movies,
    shows,
    isLoading,
    singleState,
    genres: { isLoading: genresIsLoading, data: genres, selectedSlug: selectedGenre },
    watchlist: { data: watchlist, err: watchlistErr, loadingIds: watchlistLoadingIds },
  } = useSelector(selectors);

  // const [alertText, setAlertText] = useState(null);
  const loadingIds = [...watchlistLoadingIds];

  // const fetchPopularMovies = useCallback(() => dispatch(Actions.getPopularMovies()), [dispatch]);
  // const fetchPopularShows = useCallback(() => dispatch(Actions.getPopularShows()), [dispatch]);
  const fetchPopular = useCallback(() => dispatch(getPopular()), [dispatch]);
  const fetchWatchlist = useCallback(() => dispatch(getWatchlist()), [dispatch]);
  const fetchGenres = useCallback(() => dispatch(getGenres()), [dispatch]);

  useEffect(() => {
    fetchPopular();
    fetchWatchlist();
    fetchGenres();
  }, [fetchPopular, fetchWatchlist, fetchGenres]);

  // const changeAlertText = (text = null) => setAlertText(typeof text === 'string' ? text : null);

  return (
    <div>
      <GenresSlider selectedGenre={selectedGenre} isLoading={genresIsLoading} genres={genres} />
      <TitlesGrid
        data={{ movies, shows }}
        listIsLoading={isLoading}
        loadingIds={loadingIds}
        singleState={singleState}
      />
    </div>
  );
};

{
  /* <Snackbar open={!!alertText} autoHideDuration={6000} onClose={changeAlertText}> */
}
{
  /*   <Alert onClose={changeAlertText} severity="success" variant="filled"> */
}
{
  /*     {alertText} */
}
{
  /*   </Alert> */
}
{
  /* </Snackbar> */
}

export default Home;
