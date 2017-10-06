import { combineReducers } from 'redux';

import nav from './reducers/nav';

import anime from './reducers/anime/getAnime';
import morePopular from './reducers/anime/morePopular';
import animeById from './reducers/anime/animeById';
import favorite from './reducers/anime/favorite';

import lastNews from './reducers/article/lastNews';


export default combineReducers({
  nav,
  anime,
  morePopular,
  lastNews,
  animeById,
  favorite
});