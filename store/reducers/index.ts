import { combineReducers } from 'redux';

import link from './link/link';
import links from './links/links';
import user from './user/user';
import navbar from './navbar/navbar';
import app from './app/app';

export default combineReducers({
  link,
  links,
  user,
  navbar,
  app
});
