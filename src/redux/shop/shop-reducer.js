import collections from '../../data/shop';

const initialState = {
  collections,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case '':
      return {
        ...state,
        isHidden: !state.isHidden,
      };

    default:
      return state;
  };
};

export default shopReducer;
