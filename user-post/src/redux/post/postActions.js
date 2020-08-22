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

export const deletePostsStart = () => ({
  type: postTypes.DELETE_POST_START,
});
export const deletePostsSuccess = () => ({
  type: postTypes.DELETE_POST_SUCCESS,
});
export const deletePostsFail = (error) => ({
  type: postTypes.DELETE_POST_FAIL,
  payload: error,
});

export const updatePostsStart = () => ({
  type: postTypes.UPDATE_POST_START,
});
export const updatePostsSuccess = (index) => ({
  type: postTypes.UPDATE_POST_SUCCESS,
  payload: index,
});
export const updatePostsFail = (error) => ({
  type: postTypes.UPDATE_POST_FAIL,
  payload: error,
});

export const likePost = (index) => {
  console.log('Indise Like Action');
  return {
    type: postTypes.LIKE_POST,
    payload: index,
  };
};
export const dislikePost = (index) => ({
  type: postTypes.DISLIKE_POST,
  payload: index,
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
    dispatch(createPostsSuccess(response.data));
  } catch (error) {
    dispatch(createPostsFail(error.response));
  }
};

//Delete Post API call
export const deletePost = (index) => async (dispatch) => {
  try {
    dispatch(deletePostsStart());
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${index}`
    );
    console.log(response);
    dispatch(deletePostsSuccess());
  } catch (error) {
    dispatch(deletePostsFail(error.response));
  }
};

export const updatePost = (index, title, feed) => async (dispatch) => {
  const body = { index, title, feed };
  console.log('inside pdateu');
  try {
    dispatch(updatePostsStart());
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${index}`,
      body
    );
    console.log(response);
    dispatch(updatePostsSuccess(response.data));
  } catch (error) {
    dispatch(updatePostsFail(error.response));
  }
};
