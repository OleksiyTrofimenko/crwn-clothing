import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCartItem } from '../../redux/cart/cart-actions';
import Button from '../button';
import './styles.scss';

const CollectionItem = ({ item, onAddCartItem }) => {
  const { id, name, price, imageUrl } = item;

  return (
    <div key={id} className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})`}}
      />
        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <Button
          inverted
          onClick={() => onAddCartItem(item)}
        >
          Add to cart 
        </Button>
      </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onAddCartItem: (item) => dispatch(addCartItem(item)),
});

export default connect(null, mapDispatchToProps)(withRouter(CollectionItem));
