import sections from '../../data/sections';

const initialState = {
  sections,
};

const directoryReducer = (state = initialState, action) => {
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

export default directoryReducer;
