import React from 'react';
import HomePage from './HomePage';
import Posts from './Posts';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Icon, Menu, Segment, Sidebar, Container } from 'semantic-ui-react';

import './sidebar-style.css';
import CreatePost from './CreatePost';

const SideBar = () => {
  return (
    <React.Fragment>
      <Router>
        <Sidebar.Pushable as={Segment} className="sidebar__custom">
          <Sidebar
            as={Menu}
            animation="push"
            direction="left"
            icon="labeled"
            inverted
            vertical
            visible
            width="thin"
          >
            <Menu.Item as={Link} to="/">
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item as={Link} to="/posts">
              <Icon name="address card" />
              Posts
            </Menu.Item>
            <Menu.Item as={Link} to="/create-post">
              <Icon name="plus square" />
              Create Post
            </Menu.Item>
            <Menu.Item as={Link} to="/delete-post">
              <Icon name="delete" />
              Delete Post
            </Menu.Item>
            <Menu.Item as={Link} to="/update-post">
              <Icon name="upload" />
              Update Post
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Container>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/posts" component={Posts} />
                <Route path="/create-post" component={CreatePost} />
              </Switch>
            </Container>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Router>
    </React.Fragment>
  );
};

export default SideBar;
