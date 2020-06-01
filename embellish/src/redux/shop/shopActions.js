import shopTypes from './shopTypes';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../components/firebase/firebaseUtility';

export const fetchCollectionsStart = () => ({
  type: shopTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: shopTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFails = (errorMsg) => ({
  type: shopTypes.FETCH_COLLECTIONS_FAILS,
  payload: errorMsg,
});
export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    /** This is oberserable / observer pattern Lets change it into async await */
    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
    /** snapshot return array of doc*/
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFails(error.message)));
  };
};
