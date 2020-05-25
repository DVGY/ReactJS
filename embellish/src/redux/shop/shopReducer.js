import SHOP_DATA from './shop-data';
const initialState = {
  collections: SHOP_DATA,
};

const shopReducer = (state = initialState, action) => {
  switch (action.types) {
    default:
      return state;
  }
};

export default shopReducer;
