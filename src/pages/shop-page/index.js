import React, { Component } from 'react';
import collections from '../../data/shop';
import PreviewCollection from '../../components/preview-collection';

class ShopPage extends Component {
  constructor() {
    super();

    this.state = { collections }
  }

  render() {
    const { collections } = this.state;
  
    return (
      <div className="shop-page">
        {collections.map(({ id, ...other }) => (
          <PreviewCollection key={id} {...other} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
