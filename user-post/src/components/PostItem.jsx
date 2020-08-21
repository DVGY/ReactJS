import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

//To do
//1. Format the card
//2. Make sidebar sticky
//3. Add padding to search bar
//4. Add Random Images to diff users
//5. Make the post description visible

const PostItem = ({ index, key, style, post }) => {
  return (
    <Card className="grid container" key={key} style={style}>
      <Card.Content>
        <div className="header">
          {' '}
          <Image
            floated="left"
            size="tiny"
            src="https://api.adorable.io/avatars/80/dejavu.png"
            circular
          />
        </div>

        <Card.Header>User ID: {post.userId}</Card.Header>
        <Card.Description>{post.title}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="">
          <Icon link name="heart" size="big"></Icon>
          <Icon link name="heartbeat" size="big"></Icon>
        </div>
      </Card.Content>
    </Card>
  );
};

export default PostItem;
