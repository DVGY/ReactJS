import postTypes from './postTypes';

const INITIAL_STATE = {
  posts: [],
  createdPost: null,
  deletedPost: null,
  updatedPost: null,
  loading: true,
  error: null,
  likedAndDisLikedPost: null,
};

export const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case postTypes.GET_POSTS_START:
    case postTypes.CREATE_POSTS_START:
    case postTypes.DELETE_POST_START:
    case postTypes.UPDATE_POST_START:
      return {
        ...state,
      };
    case postTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case postTypes.CREATE_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        createdPost: action.payload,
      };
    case postTypes.DELETE_POST_SUCCESS:
      return {
        ...state,
        deletedPost: true,
      };
    case postTypes.UPDATE_POST_SUCCESS:
      return {
        ...state,
        updatedPost: action.payload,
      };
    case postTypes.GET_POSTS_FAIL:
    case postTypes.CREATE_POSTS_FAIL:
    case postTypes.DELETE_POST_FAIL:
    case postTypes.UPDATE_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case postTypes.LIKE_POST:
      return {
        ...state,
        likedAndDisLikedPost: {
          ...state.likedAndDisLikedPost,
          [action.payload]: { like: true, dislike: false },
        },
      };
    case postTypes.DISLIKE_POST:
      return {
        ...state,
        likedAndDisLikedPost: {
          ...state.likedAndDisLikedPost,
          [action.payload]: { like: false, dislike: true },
        },
      };

    default:
      return state;
  }
};
export default postReducer;
