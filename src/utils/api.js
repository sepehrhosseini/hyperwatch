import axios from 'axios';
import queryString from 'query-string';

const {
  REACT_APP_TRAKT_API_URL,
  REACT_APP_TRAKT_CLIENT_ID: client_id,
  REACT_APP_TRAKT_CLIENT_SECRET: client_secret,
  REACT_APP_TRAKT_API_VERSION: api_version,
  REACT_APP_TRAKT_LOGIN_HOSTNAME,
} = process.env;

const authToken = () => `Bearer ${localStorage.getItem('jwt')}`;

const traktAPI = axios.create({
  baseURL: REACT_APP_TRAKT_API_URL || 'https://api.trakt.tv',
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/json',
    'trakt-api-key': client_id,
    'trakt-api-version': api_version,
    Authorization: authToken(),
  },
});

export default traktAPI;

export const authorize = ({ redirectUrl } = {}) => {
  const params = new URLSearchParams({
    redirect_uri: `http://localhost:3000${redirectUrl}` || 'http://localhost:3000',
    response_type: 'code',
    client_id,
  }).toString();
  return `${REACT_APP_TRAKT_LOGIN_HOSTNAME || 'https://trakt.tv'}/oauth/authorize?${params}`;
};

export const getToken = ({ code } = {}) =>
  traktAPI.post(`/oauth/token`, {
    code,
    client_id,
    client_secret,
    redirect_uri: 'http://localhost:3000/auth/token',
    grant_type: 'authorization_code',
  });

export const getWatchlist = ({ type = '', sort = '' } = {}) =>
  traktAPI.get(`/sync/watchlist/${type}${!!type ? `/${sort}` : ''}`);

export const addToWatchlist = ({ movies, shows, seasons, episodes }) =>
  traktAPI.post(`/sync/watchlist`, { movies, shows, seasons, episodes });

export const removeFromWatchlist = ({ movies, shows, seasons, episodes }) =>
  traktAPI.post(`/sync/watchlist/remove`, { movies, shows, seasons, episodes });

export const popularMovies = ({ limit = 30, genres } = {}) =>
  traktAPI.get(`/movies/popular?${queryString.stringify({ limit, genres })}`);

export const popularShows = ({ limit = 30, genres } = {}) =>
  traktAPI.get(`/shows/popular?${queryString.stringify({ limit, genres })}`);

export const searchMovies = ({ query }) => traktAPI.get(`/search/movie?query=${query}`);

export const searchShows = ({ query }) => traktAPI.get(`/search/show?query=${query}`);

export const singleTitle = ({ type, id, extended = 'full' }) => traktAPI.get(`/${type}/${id}?extended=${extended}`);

export const singleTitleOMDB = ({ type, id }) => axios.get(`http://www.omdbapi.com/?i=${id}&apikey=caa77635`);

export const getGenres = ({ type }) => traktAPI.get(`/genres/${type}`);
