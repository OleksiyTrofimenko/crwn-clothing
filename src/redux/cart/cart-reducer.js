import { TOGGLE_CART_HIDDEN } from './cart-types';

const initialState = {
  isHidden: true,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        isHidden: !state.isHidden,
      };

    default:
      return state;
  };
};

export default cartReducer;
