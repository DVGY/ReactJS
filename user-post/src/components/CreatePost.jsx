import React, { useState } from 'react';
import { Container, Form, Grid, GridRow, Card, Image } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { createPost } from '../redux/post/postActions';

import './create-post.css';

const CreatePost = ({ createdPost, createPost }) => {
  const [formData, setFromData] = useState({
    title: '',
    post: '',
  });

  const { title, post } = formData;

  const handleChange = (event) => {
    setFromData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    //call Create Post Redux Async
    createPost(title, post);

    setFromData({ title: '', post: '' });
  };

  return (
    <Container style={{ paddingTop: '2rem' }}>
      {console.log(createdPost)}
      <Grid.Row>
        <Form onSubmit={handleSubmit}>
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
            name="post"
            value={post}
          />
          <Form.Button className="mt-1 mb-1">Post</Form.Button>
        </Form>
      </Grid.Row>
      {createdPost && (
        <GridRow>
          <Card className="align-center-m-auto ">
            <Image
              src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>{createdPost.title}</Card.Header>

              <Card.Description>{createdPost.post}</Card.Description>
            </Card.Content>
          </Card>
        </GridRow>
      )}
    </Container>
  );
};
const mapDispatchToProps = (dispatch) => ({
  createPost: (title, post) => dispatch(createPost(title, post)),
});

const mapStateToProps = (state) => ({
  createdPost: state.post.createdPost,
});
export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
