import { createSelector } from 'reselect';

const selectPost = (state) => state.post;

export const selectPosts = createSelector([selectPost], (post) => post.posts);

export const selectLoading = createSelector(
  [selectPost],
  (post) => post.loading
);
export const selectLikedAndDislikedPost = createSelector(
  [selectPost],
  (post) => post.likedAndDislikedPost
);
export const selectDeletedPost = createSelector(
  [selectPost],
  (post) => post.deletedPost
);
export const selectUpdatedPost = createSelector(
  [selectPost],
  (post) => post.updatedPost
);

// export const selectCreatedPost =
//   (createSelector[selectPost], (post) => post.createdPost);
