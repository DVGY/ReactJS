import React from 'react';
import { Card, Button, Message, Modal, Form, Grid } from 'semantic-ui-react';

import { updatePost } from '../redux/post/postActions';
import { selectUpdatedPost } from '../redux/post/postSelector';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';

const UpdatePost = ({ location, updatedPost, updatePost }) => {
  const [open, setOpen] = React.useState(false);
  const { post } = location;
  const [formData, setFromData] = React.useState({
    title: '',
    feed: post.title,
  });

  const { title, feed } = formData;

  const handleChange = (event) => {
    setFromData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleUpdate = () => {
    setOpen(false);

    updatePost(post.userId, title, feed);
  };

  return (
    <React.Fragment>
      {console.log(updatedPost)}
      <Card className="align-center-m-auto">
        <Card.Content>
          <div className="card-overlay">
            <h1 className="card-overlay__title">POST</h1>
          </div>
          <Card.Header className="card-overlay__id">{post.userId}</Card.Header>
          {updatedPost && <h2>{updatedPost.title}</h2>}
          <Card.Description className="card-overlay__content-title">
            Feed
          </Card.Description>
          <Card.Header className="card-overlay__content">
            {updatedPost ? updatedPost.feed : post.title}
          </Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button color="red">Update</Button>}
          >
            <Modal.Header>Update Profile</Modal.Header>
            <Grid.Row>
              <Form>
                <Form.Group className="create-post">
                  <Form.Input
                    fluid
                    label="Title"
                    placeholder="Post Title...."
                    width={8}
                    onChange={handleChange}
                    name="title"
                    value={title}
                  />
                </Form.Group>

                <Form.TextArea
                  label="Post"
                  placeholder="Tell us what do you feel....."
                  width={8}
                  className="align-center-m-auto"
                  onChange={handleChange}
                  name="feed"
                  value={feed}
                />
              </Form>
            </Grid.Row>
            <Modal.Actions>
              <Button color="black" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button
                content="Update"
                labelPosition="right"
                icon="checkmark"
                onClick={() => handleUpdate()}
                positive
              />
            </Modal.Actions>
          </Modal>
        </Card.Content>
      </Card>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updatePost: (index, title, feed) => dispatch(updatePost(index, title, feed)),
});
const mapStateToProps = createStructuredSelector({
  updatedPost: selectUpdatedPost,
});
export default connect(mapStateToProps, mapDispatchToProps)(UpdatePost);
