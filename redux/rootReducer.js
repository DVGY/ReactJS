import { combineReducers } from 'redux';

import postReducer from './post/postReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['post'],
};
const postPersistConfig = {
  key: 'post',
  storage,
  whitelist: ['likedAndDislikedPost'],
};
const rootReducer = combineReducers({
  post: persistReducer(postPersistConfig, postReducer),
});
export default persistReducer(rootPersistConfig, rootReducer);
