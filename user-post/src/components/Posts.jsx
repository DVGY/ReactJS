import React, { useEffect, useRef } from 'react';
import PostItem from './PostItem';

import { connect } from 'react-redux';
import { getPosts } from '../redux/post/postActions';
import {
  selectPosts,
  selectLoading,
  selectLikedAndDislikedPost,
} from '../redux/post/postSelector';
import { createStructuredSelector } from 'reselect';

import { Icon } from 'semantic-ui-react';

import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from 'react-virtualized';

const Posts = ({ getPosts, posts, isLoading, likedAndDislikedPost }) => {
  const cache = useRef(
    new CellMeasurerCache({ fixedWidth: true, defaultHeight: 400 })
  );

  useEffect(() => {
    /** Call API */
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      {console.log('Posts Rendering')}

      {isLoading && <Icon loading name="spinner" size="huge" />}
      {!isLoading && (
        <div style={{ width: '320px', height: '90vh', margin: '0 auto' }}>
          <AutoSizer>
            {(size) => (
              <List
                width={size.width}
                height={size.height}
                rowHeight={cache.current.defaultHeight}
                deferredMeasurementCache={cache.current}
                rowCount={posts.length}
                rowRenderer={({ index, key, style, parent }) => {
                  const post = posts[index];
                  return (
                    <CellMeasurer
                      key={key}
                      cache={cache.current}
                      parent={parent}
                      columnIndex={0}
                      rowIndex={index}
                    >
                      <PostItem
                        post={post}
                        index={index}
                        style={style}
                        likedAndDislikedPost={
                          likedAndDislikedPost
                            ? likedAndDislikedPost[index]
                            : null
                        }
                      />
                    </CellMeasurer>
                  );
                }}
              ></List>
            )}
          </AutoSizer>
        </div>
      )}
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
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
