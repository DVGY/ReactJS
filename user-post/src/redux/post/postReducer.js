import postTypes from './postTypes';

const INITIAL_STATE = {
  posts: [],
  loading: true,
  error: null,
};

export const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case postTypes.GET_POSTS_START:
      return {
        ...state,
      };
    case postTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case postTypes.GET_POSTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default postReducer;
