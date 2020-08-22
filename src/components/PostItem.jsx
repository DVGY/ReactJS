import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

import './post-item-style.css';

import { likePost, dislikePost } from '../redux/post/postActions';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

const PostItem = ({
  index,
  style,
  post,
  likedAndDislikedPost,
  likePost,
  dislikePost,
}) => {
  const handleLike = (index) => {
    console.log('Inside Like');
    likePost(index);
  };
  const handleDislike = (index) => {
    dislikePost(index);
  };

  return (
    <Card style={style}>
      <Card.Content>
        <div className="card-overlay">
          <h1 className="card-overlay__title">POST</h1>
        </div>
        <Card.Header className="card-overlay__id">{post.userId}</Card.Header>
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
          link
          onClick={() => handleLike(index)}
          name="heart"
          className="mr-1 fs-icon-md"
          color={
            likedAndDislikedPost
              ? likedAndDislikedPost.like
                ? 'red'
                : 'grey'
              : 'grey'
          }
        ></Icon>

        <Icon
          circular
          link
          name="heartbeat"
          onClick={() => handleDislike(index)}
          color={
            likedAndDislikedPost
              ? likedAndDislikedPost.dislike
                ? 'red'
                : 'grey'
              : 'grey'
          }
          className="mr-1 fs-icon-md"
        />
        <Link to={{ pathname: '/delete-post', post: post }}>
          <Icon circular link name="delete" className="mr-1  fs-icon-md" />
        </Link>
        <Link to={{ pathname: '/update-post', post: post }}>
          <Icon circular link name="upload" className="fs-icon-md" />
        </Link>
      </Card.Content>
    </Card>
  );
};
const mapDispatchToProps = (dispatch) => ({
  likePost: (index) => dispatch(likePost(index)),
  dislikePost: (index) => dispatch(dislikePost(index)),
});

export default connect(null, mapDispatchToProps)(PostItem);
