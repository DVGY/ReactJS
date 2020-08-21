import { combineReducers } from 'redux';

import postReducer from './post/postReducer';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  post: postReducer,
});
export default rootReducer;
