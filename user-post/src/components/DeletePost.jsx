import React from 'react';

import { Card, Button, Message, Menu, Icon } from 'semantic-ui-react';

import { deletePost } from '../redux/post/postActions';
import { selectDeletedPost } from '../redux/post/postSelector';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

const DeletePost = ({ deletePost, location, deletedPost }) => {
  console.log(location);
  const { post } = location;

  return (
    <React.Fragment>
      {deletedPost && (
        <Message positive>
          <Message.Header>Post deleted Successfully</Message.Header>
        </Message>
      )}
      {(post && !deletedPost && (
        <Card className="align-center-m-auto">
          <Card.Content>
            <div className="card-overlay">
              <h1 className="card-overlay__title">POST</h1>
            </div>
            <Card.Header className="card-overlay__id">
              {post.userId}
            </Card.Header>
            <Card.Header className="card-overlay__content">
              {post.title}
            </Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Button color="red" onClick={() => deletePost(post.userId)}>
              Delete
            </Button>
          </Card.Content>
        </Card>
      )) || (
        <Menu.Item as={Link} to="/posts">
          <Icon name="address card" />
          Posts
        </Menu.Item>
      )}
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deletePost: (index) => dispatch(deletePost(index)),
});
const mapStateToProps = createStructuredSelector({
  deletedPost: selectDeletedPost,
});
export default connect(mapStateToProps, mapDispatchToProps)(DeletePost);
