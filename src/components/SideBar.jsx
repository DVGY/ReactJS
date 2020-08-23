import React from 'react';
import HomePage from './HomePage';
import Posts from './Posts';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Icon, Menu, Segment, Sidebar, Container } from 'semantic-ui-react';

import CreatePost from './CreatePost';
import DeletePost from './DeletePost';
import UpdatePost from './UpdatePost';
import LikedPost from './LikedPost';
import './sidebar-style.css';
import Disliked from './Disliked';

const SideBar = () => {
  return (
    <React.Fragment>
      <Router>
        <Sidebar.Pushable as={Segment} className="sidebar__custom">
          <Sidebar
            as={Menu}
            animation="overlay"
            direction="left"
            icon="labeled"
            inverted
            vertical
            visible
            width="thin"
            className="sidebar__custom-vl"
          >
            <Menu.Item as={Link} to="/" className="rm-p mr-sm size-menu">
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item as={Link} to="/posts" className="rm-p mr-sm size-menu">
              <Icon name="address card" />
              Posts
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/create-post"
              className="rm-p mr-sm size-menu"
            >
              <Icon name="plus square" />
              Create Post
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/liked-post"
              className="rm-p mr-sm size-menu"
            >
              <Icon name="heart" />
              Liked
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/disliked-post"
              className="rm-p mr-sm size-menu"
            >
              <Icon name="heartbeat" />
              Disliked
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Container>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/posts" component={Posts} />
                <Route path="/create-post" component={CreatePost} />
                <Route path="/delete-post" component={DeletePost} />
                <Route path="/update-post" component={UpdatePost} />
                <Route path="/liked-post" component={LikedPost} />
                <Route path="/disliked-post" component={Disliked} />
              </Switch>
            </Container>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Router>
    </React.Fragment>
  );
};

export default SideBar;
