// move fetchCollectionsAsync Redux thunk into saga

import { takeLatest, call, put } from 'redux-saga/effects';

import shopTypes from './shopTypes';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../components/firebase/firebaseUtility';

import { fetchCollectionsFails, fetchCollectionsSuccess } from './shopActions';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');

    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );

    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFails(error.message));
  }
}

export function* fetchCollectionsStart() {
  //takeEvery creates a non blocking call ,
  yield takeLatest(shopTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
