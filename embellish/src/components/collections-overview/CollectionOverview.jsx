import React from 'react';
import PreviewCollections from '../preview-collections/PreviewCollections';

import { selectCollectionForPreview } from '../../redux/shop/shopSelector';
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
  collections: selectCollectionForPreview,
});
export default connect(mapStateToProps)(CollectionOverview);
