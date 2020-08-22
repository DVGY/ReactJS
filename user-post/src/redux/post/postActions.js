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
export const createPostsStart = () => ({
  type: postTypes.CREATE_POSTS_START,
});

export const createPostsSuccess = (postData) => ({
  type: postTypes.CREATE_POSTS_SUCCESS,
  payload: postData,
});

export const createPostsFail = (error) => ({
  type: postTypes.CREATE_POSTS_FAIL,
  payload: error,
});

export const likePost = (postIndex) => {
  console.log('Indise Like Action');
  return {
    type: postTypes.LIKE_POST,
    payload: postIndex,
  };
};
export const dislikePost = (postIndex) => ({
  type: postTypes.DISLIKE_POST,
  payload: postIndex,
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
// Create Post API call
export const createPost = (title, post) => async (dispatch) => {
  const body = { title, post };
  try {
    dispatch(createPostsStart());
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      body
    );
    console.log(response);
    dispatch(createPostsSuccess(response.data));
  } catch (error) {
    dispatch(createPostsFail(error.response));
  }
};
