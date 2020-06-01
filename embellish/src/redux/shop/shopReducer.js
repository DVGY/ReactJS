import shopTypes from './shopTypes';
const initialState = {
  collections: null,
};

const shopReducer = (state = initialState, action) => {
  console.log('Inside reducer');
  switch (action.type) {
    case shopTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
