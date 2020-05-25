/**This page is rendered when a user click on a category on the shop home page, it render all items particular to that category*/
import React from 'react';
import './collection-page.scss';
import { connect } from 'react-redux';
import { selectShopCollectionID } from '../../redux/shop/shopSelector';

const CollectionPage = ({ collectionCategory, match }) => {
  /** match.params.categoryId = hats or sneakers or etx */
  console.log('Inside Collections');
  console.log({ match });
  return (
    <div className="collection-page">
      <h2>Collection Page</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.match.params.collectionId);

  return {
    collectionCategory: selectShopCollectionID(
      ownProps.match.params.collectionId
    )(state),
  };
};
export default connect(mapStateToProps)(CollectionPage);
