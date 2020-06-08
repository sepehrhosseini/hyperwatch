import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import { get } from 'lodash';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, useLocation } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';

import List from '../List';
import { useQueryParams } from '../../utils/router';

import { getSingle as fetchSingleTitleAction } from '../../containers/Titles/actions';
import {
  addToWatchlist,
  removeFromWatchlist,
} from '../../containers/Home/actions';

const getUrl = ({ title, type, params }) => {
  if (params.query)
    return `/search/${params.query}?titleType=${type}&titleId=${title.ids.imdb}`;

  return `/${type}/${title.ids.imdb}`;
};

const selectors = (state) => ({
  watchlist: state.home.watchlist,
});

const TitlesList = ({ data, onItemClick, onIconClick }) => {
  const { pathname } = useLocation();
  const params = useQueryParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    watchlist: { data: watchlist, loadingIds: watchlistLoadingIds },
  } = useSelector(selectors);

  const loadingIds = [...watchlistLoadingIds];

  const fetchSingleTitle = useCallback(
    ({ type, id }) => dispatch(fetchSingleTitleAction({ type, id })),
    [dispatch],
  );

  useEffect(() => {
    if (!params.titleType || !params.titleId) return;

    fetchSingleTitle({
      type: params.titleType,
      id: params.titleId,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchSingleTitle, pathname]);

  const handleItemClick = ({ title, type }) => {
    fetchSingleTitle({
      type,
      id: title.ids.imdb,
    });

    const url = getUrl({ title, type, params });

    history.push(url);

    onItemClick({ title, type });
  };

  const handleIconClick = async ({ title, type }) => {
    const alreadyInWatchlist = watchlistIds.includes(title.ids.trakt);
    const payload = { [type]: [title] };

    if (alreadyInWatchlist)
      return dispatch(removeFromWatchlist(payload));

    dispatch(addToWatchlist(payload));

    onIconClick();
  };

  const watchlistIds = watchlist.map((title) =>
    get(title, [title.type, 'ids', 'trakt']),
  );

  const Icon = ({ title, type, keyAs }) => (
    <IconButton
      edge="end"
      onClick={() => handleIconClick({ title, type })}
    >
      {watchlistIds.find((id) => id === get(title, keyAs)) ? (
        <StarIcon />
      ) : (
        <StarBorderIcon />
      )}
    </IconButton>
  );

  return (
    <div>
      <List
        data={data}
        onItemClick={handleItemClick}
        Icon={Icon}
        loadingIds={loadingIds}
      />
    </div>
  );
};

TitlesList.defaultProps = {
  onItemClick: () => {},
  onIconClick: () => {},
};

TitlesList.propTypes = {
  onItemClick: PropTypes.func,
  onIconClick: PropTypes.func,

  data: PropTypes.object.isRequired,
};

export default TitlesList;
