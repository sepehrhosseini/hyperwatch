import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchData } from './reducer';

import List from '../../components/List';

const selectors = (state) => ({
  watchlist: state.watchlist,
});

const WatchlistPage = (props) => {
  const dispatch = useDispatch();
  const {
    watchlist: { data, isLoading },
  } = useSelector(selectors);
  const watchlist = data.map((title) => ({ ...title[title.type] }));

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <div>
        <List data={{ watchlist }} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default WatchlistPage;
