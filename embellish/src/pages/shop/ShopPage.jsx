import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collections-overview/CollectionOverview';
import CollectionPage from '../collection/CollectionPage';
import WithSpinner from '../../components/with-spinner/WithSpinner';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shopActions';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../components/firebase/firebaseUtility';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    isLoading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        /** snapshot return array of doc*/
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        console.log(collectionsMap);
        updateCollections(collectionsMap);

        this.setState({ isLoading: false });
      }
    );
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionsPageWithSpinner isLoading={isLoading} {...props} />
          )}
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
