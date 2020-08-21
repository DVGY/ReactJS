import React, { useEffect } from 'react';
import PostItem from './PostItem';

import { connect } from 'react-redux';
import { getPosts } from '../redux/post/postActions';
import { selectPosts, selectLoading } from '../redux/post/postSelector';
import { createStructuredSelector } from 'reselect';

import { Icon } from 'semantic-ui-react';

import { List, AutoSizer } from 'react-virtualized';

const Posts = ({ getPosts, posts, isLoading }) => {
  useEffect(() => {
    /** Call API */
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      {isLoading && <Icon loading name="spinner" size="huge" />}

      <div style={{ width: '100%', height: '100vh' }}>
        <AutoSizer>
          {(width, height) => (
            <List
              width={width}
              height={height}
              rowHeight={50}
              rowCount={posts.length}
              rowRenderer={({ index, key, style, parent }) => {
                const post = posts[index];
                return (
                  <PostItem post={post} index={index} key={key} style={style} />
                );
              }}
            >
              {console.log(width, height)}
            </List>
          )}
        </AutoSizer>
      </div>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(getPosts()),
});

const mapStateToProps = createStructuredSelector({
  posts: selectPosts,
  isLoading: selectLoading,
});
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
