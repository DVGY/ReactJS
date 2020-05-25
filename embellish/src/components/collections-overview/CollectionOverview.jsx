import React from 'react';
import PreviewCollections from '../preview-collections/PreviewCollections';

import { selectShopCollections } from '../../redux/shop/shopSelector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './collection-overview.scss';

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherProps }) => (
        <PreviewCollections key={id} {...otherProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});
export default connect(mapStateToProps)(CollectionOverview);
