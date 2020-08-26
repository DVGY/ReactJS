import React from 'react';
import Directory from '../../components/directory/Directory';
import { HomePageContainer } from './homepageStyle.js';

const Homepage = (props) => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default Homepage;
