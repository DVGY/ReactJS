import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { selectPosts } from '../redux/post/postSelector';
import { createStructuredSelector } from 'reselect';

import { Search, Label } from 'semantic-ui-react';

const resultRenderer = ({ title }) => <Label content={title} />;

const SearchBar = ({ posts }) => {
  React.useEffect(() => {
    return () => {};
  }, []);

  const [searchResult, setSearchReuslt] = React.useState([]);
  const [searchValue, setsearchValue] = React.useState('');
  const timeoutRef = React.useRef();
  const handleSearchChange = (event) => {
    clearTimeout(timeoutRef.current);
    setsearchValue(([event.target.name] = event.target.value));

    timeoutRef.current = setTimeout(() => {
      const re = new RegExp(_.escapeRegExp(searchValue), 'i');
      setSearchReuslt(
        _.filter(posts, function (post) {
          return re.test(post.title);
        })
      );
    }, 500);
  };

  return (
    <React.Fragment>
      <Search
        onSearchChange={handleSearchChange}
        resultRenderer={resultRenderer}
        value={searchValue}
        results={searchResult}
        resultRenderer={resultRenderer}
        name="search"
      />
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  posts: selectPosts,
});
export default connect(mapStateToProps)(SearchBar);
