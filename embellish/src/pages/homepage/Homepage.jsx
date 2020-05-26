import React from 'react';
import './hompage-style.scss';
import Directory from '../../components/directory/Directory';
const Homepage = (props) => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default Homepage;
