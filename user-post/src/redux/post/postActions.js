import postTypes from './postTypes';

import axios from 'axios';

export const getPostsStart = () => ({
  type: postTypes.GET_POSTS_START,
});

export const getPostsSuccess = (postData) => ({
  type: postTypes.GET_POSTS_SUCCESS,
  payload: postData,
});

export const getPostsFail = (error) => ({
  type: postTypes.GET_POSTS_FAIL,
  payload: error,
});

/**Redux thunk will hear this */
export const getPosts = () => async (dispatch) => {
  try {
    dispatch(getPostsStart());
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    dispatch(getPostsSuccess(response.data));
  } catch (error) {
    dispatch(getPostsFail(error.response));
  }
};
