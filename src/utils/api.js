import axios from 'axios';

const traktAPI = axios.create({
    baseURL: process.env.REACT_APP_TRAKT_API_URL || 'https://api.trakt.tv',
    headers: {
        'Content-Type': 'application/json',
        'trakt-api-key': process.env.REACT_APP_TRAKT_CLIENT_ID,
        'trakt-api-version': process.env.REACT_APP_TRAKT_API_VERSION
    }
});

export default traktAPI;

export const popularMovies = ({ limit = 30 } = {}) => traktAPI.get(`/movies/popular?limit=${limit}`);

export const popularShows = ({ limit = 30 } = {}) => traktAPI.get(`/shows/popular?limit=${limit}`);

export const searchMovies = ({ query }) => traktAPI.get(`/search/movie?query=${query}`);

export const searchShows = ({ query }) => traktAPI.get(`/search/show?query=${query}`);

export const singleTitle = ({ type, id, extended = 'full' }) => traktAPI.get(`/${type}/${id}?extended=${extended}`);

export const singleTitleOMDB = ({ type, id }) => axios.get(`http://www.omdbapi.com/?i=${id}&apikey=caa77635`)
