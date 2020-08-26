/**This page is rendered when a user click on a category on the shop home page, it render all items particular to that category*/
import React from 'react';
import './collection-page.scss';
import { connect } from 'react-redux';
import { selectShopCollectionID } from '../../redux/shop/shopSelector';
import CollectionItems from '../../components/collection-item/CollectionItems';

const CollectionPage = ({ collectionCategory, match }) => {
  /** match.params.categoryId = hats or sneakers or etx */

  const { title, items } = collectionCategory;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItems key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collectionCategory: selectShopCollectionID(
    ownProps.match.params.collectionId
  )(state),
});
export default connect(mapStateToProps)(CollectionPage);
