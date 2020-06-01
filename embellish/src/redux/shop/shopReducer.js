import shopTypes from './shopTypes';
const initialState = {
  collections: null,
  isFetching: false,
  errorMsg: undefined,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case shopTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case shopTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case shopTypes.FETCH_COLLECTIONS_FAILS:
      return {
        ...state,
        isFetching: false,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
