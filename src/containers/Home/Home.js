import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TitlesGrid from '../../components/TitlesGrid';
import GenresSlider from '../../components/GenresSlider';
import Showcase from '../../components/Showcase';
import Quote from '../../components/Quote';

import { getWatchlist, getGenres, getPopular } from './actions';

const selectors = (state) => ({
  movies: state.home.movies,
  shows: state.home.shows,
  isLoading: state.home.isLoading,
  singleState: state.titles.single,
  watchlist: state.home.watchlist,
  genres: state.home.genres,
});

const Home = () => {
  const dispatch = useDispatch();
  const {
    movies,
    shows,
    isLoading,
    singleState,
    genres: {
      isLoading: genresIsLoading,
      data: genres,
      selectedSlug: selectedGenre,
    },
    watchlist: { data: watchlist, loadingIds: watchlistLoadingIds },
  } = useSelector(selectors);

  const loadingIds = [...watchlistLoadingIds];

  const fetchPopular = useCallback(() => dispatch(getPopular()), [
    dispatch,
  ]);
  const fetchWatchlist = useCallback(() => dispatch(getWatchlist()), [
    dispatch,
  ]);
  const fetchGenres = useCallback(() => dispatch(getGenres()), [
    dispatch,
  ]);

  useEffect(() => {
    fetchPopular();
    fetchWatchlist();
    fetchGenres();
  }, [fetchPopular, fetchWatchlist, fetchGenres]);

  return (
    <div>
      <GenresSlider
        selectedGenre={selectedGenre}
        isLoading={genresIsLoading}
        genres={genres}
      />
      <TitlesGrid
        data={{ movies, shows }}
        listIsLoading={isLoading}
        loadingIds={loadingIds}
        singleState={singleState}
      />
      <Showcase />
      <Quote />
    </div>
  );
};

export default Home;
