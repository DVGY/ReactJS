import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { getPosts } from '../redux/post/postActions';
import { Link } from 'react-router-dom';

import { Icon, Grid, Card, Menu, Button } from 'semantic-ui-react';

import {
  selectPosts,
  selectLoading,
  selectLikedAndDislikedPost,
} from '../redux/post/postSelector';
import { createStructuredSelector } from 'reselect';

const LikedPost = ({ getPosts, isLoading, likedAndDislikedPost, posts }) => {
  useEffect(() => {
    if (posts.length === 0) {
      getPosts();
    }
  });

  return (
    <React.Fragment>
      {isLoading && <Icon loading name="spinner" size="huge" />}
      {!likedAndDislikedPost && (
        <div>
          <h3>Like some post and return back</h3>
          <Menu.Item as={Link} to="/posts" className="rm-p mr-sm size-menu">
            <Button color="teal">Posts</Button>
          </Menu.Item>
        </div>
      )}

      <Grid divided="vertically">
        {console.log('BREACH')}
        <Grid.Row>
          {posts
            .filter(function (post, index) {
              return likedAndDislikedPost
                ? likedAndDislikedPost[index]
                  ? likedAndDislikedPost[index]['like']
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
                      color="red"
                    ></Icon>

                    <Icon
                      circular
                      name="heartbeat"
                      className="mr-1 fs-icon-md"
                      color="grey"
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
export default connect(mapStateToProps, mapDispatchToProps)(LikedPost);
