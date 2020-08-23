import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../redux/post/postActions';
import { Link } from 'react-router-dom';

import { Icon, Grid, Card } from 'semantic-ui-react';

import {
  selectPosts,
  selectLoading,
  selectLikedAndDislikedPost,
} from '../redux/post/postSelector';
import { createStructuredSelector } from 'reselect';
const Disliked = ({ getPosts, isLoading, likedAndDislikedPost, posts }) => {
  useEffect(() => {
    if (posts.length === 0) {
      getPosts();
    }
  });

  return (
    <React.Fragment>
      {isLoading && <Icon loading name="spinner" size="huge" />}
      <Grid divided="vertically">
        <Grid.Row>
          {posts
            .filter(function (post, index) {
              console.log(likedAndDislikedPost[index]);
              return likedAndDislikedPost
                ? likedAndDislikedPost[index]
                  ? likedAndDislikedPost[index]['dislike']
                    ? post
                    : null
                  : null
                : null;
            })
            .map(function (post, index, array) {
              return (
                <Card className="align-center-m-auto ">
                  <Card.Content>
                    <div className="card-overlay">
                      <h1 className="card-overlay__title">POST</h1>
                    </div>
                    <Card.Header className="card-overlay__id">
                      {post.userId}
                    </Card.Header>
                    <Card.Description className="card-overlay__content-title">
                      Feed
                    </Card.Description>
                    <Card.Header className="card-overlay__content">
                      {post.title}
                    </Card.Header>
                  </Card.Content>
                  <Card.Content extra>
                    <Icon
                      circular
                      name="heart"
                      className="mr-1 fs-icon-md"
                      color="grey"
                    ></Icon>

                    <Icon
                      circular
                      name="heartbeat"
                      className="mr-1 fs-icon-md"
                      color="red"
                    />
                    <Link to={{ pathname: '/delete-post' }}>
                      <Icon
                        circular
                        link
                        name="delete"
                        className="mr-1  fs-icon-md"
                      />
                    </Link>
                    <Link to={{ pathname: '/update-post' }}>
                      <Icon
                        circular
                        link
                        name="upload"
                        className="fs-icon-md"
                      />
                    </Link>
                  </Card.Content>
                </Card>
              );
            })}
        </Grid.Row>
      </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(Disliked);
