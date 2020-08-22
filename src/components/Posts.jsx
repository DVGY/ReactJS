import React, { useEffect, useState } from 'react';
import PostItem from './PostItem';

import { connect } from 'react-redux';
import { getPosts } from '../redux/post/postActions';
import {
  selectPosts,
  selectLoading,
  selectLikedAndDislikedPost,
} from '../redux/post/postSelector';
import { createStructuredSelector } from 'reselect';

import { Icon, Grid } from 'semantic-ui-react';
import Pagination from './Pagination';

const Posts = ({ getPosts, posts, isLoading, likedAndDislikedPost }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    /** Call API */
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <React.Fragment>
      {isLoading && <Icon loading name="spinner" size="huge" />}
      <Grid divided="vertically">
        <Grid.Row>
          {!isLoading &&
            currentPosts.map((post, index) => (
              <PostItem
                post={post}
                key={post.id}
                index={index}
                likedAndDislikedPost={
                  likedAndDislikedPost ? likedAndDislikedPost[index] : null
                }
              />
            ))}
        </Grid.Row>
      </Grid>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(getPosts()),
});

const mapStateToProps = createStructuredSelector({
  posts: selectPosts,
  isLoading: selectLoading,
  likedAndDislikedPost: selectLikedAndDislikedPost,
});
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
