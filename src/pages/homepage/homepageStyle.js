import styled from 'styled-components';

export const HomePageContainer = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;

  @media only screen and (max-width: 800px) {
    padding: 7.5px 5px;
  }

  @media only screen and (max-width: 500px) {
    padding: 5px 0px;
  }
`;
