import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionForPreview } from '../../redux/shop/shop-selectors';
import PreviewCollection from '../preview-collection';
import './styles.scss';

const CollectionOverview = ({ collections }) => (
  <div className="checkout-overview">
    {collections.map(({ id, ...other }) => (
      <PreviewCollection key={id} {...other} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
