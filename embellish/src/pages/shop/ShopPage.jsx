import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collections-overview/CollectionOverview';
import CollectionPage from '../collection/CollectionPage';
import WithSpinner from '../../components/with-spinner/WithSpinner';
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shopActions';
import { createStructuredSelector } from 'reselect';

import {
  selectIsCollectionFetching,
  selectIsCollectionLoaded,
} from '../../redux/shop/shopSelector';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    isLoading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isCollectionFetching, isCollectionLoaded } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionsPageWithSpinner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});
const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionLoaded,
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
