/**This is under Shop page: When user clicks on a Shop button (Navbar). It Contains collections of all items under the menuitem category.*/
import React from 'react';
import './preview-collections.scss';
import CollectionItems from '../collection-item/CollectionItems';
const PreviewCollections = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="Title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItems key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollections;
