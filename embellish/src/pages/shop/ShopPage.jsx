import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collections-overview/CollectionOverview';
import CollectionPage from '../collection/CollectionPage';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shopActions';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../components/firebase/firebaseUtility';

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        /** snapshot return array of doc*/
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
      }
    );
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
