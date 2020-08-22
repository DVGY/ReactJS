import React from 'react';
import HomePage from './HomePage';
import Posts from './Posts';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Icon, Menu, Segment, Sidebar, Container } from 'semantic-ui-react';

import CreatePost from './CreatePost';
import DeletePost from './DeletePost';
import UpdatePost from './UpdatePost';

import './sidebar-style.css';

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
          </Sidebar>

          <Sidebar.Pusher>
            <Container>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/posts" component={Posts} />
                <Route path="/create-post" component={CreatePost} />
                <Route path="/delete-post" component={DeletePost} />
                <Route path="/update-post" component={UpdatePost} />
              </Switch>
            </Container>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Router>
    </React.Fragment>
  );
};

export default SideBar;
