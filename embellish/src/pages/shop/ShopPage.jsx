import React, { Component } from 'react';
import SHOP_DATA from './shop-data.js';
import PreviewCollections from '../../components/preview-collections/PreviewCollections';
export default class ShopPage extends Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherProps }) => (
          <PreviewCollections key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}
