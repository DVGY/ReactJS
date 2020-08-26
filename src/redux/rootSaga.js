import { all, call } from 'redux-saga/effects';
import { fetchCollectionsStart } from './shop/shopSaga';

export default function* rootSaga() {
  //Call any number of saga and initialize.run them concurrently
  yield all([call(fetchCollectionsStart)]);
}
