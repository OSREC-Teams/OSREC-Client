import React from 'react';
import styled from 'styled-components';

import Header from 'pages/landingPage/Header';
import Body from 'pages/landingPage/Body';

const Page = styled.div`
  height: 100%;
  background-color: #313131;
`;

const LandingPage = () => (
  <Page>
    <Header />
    <Body />
  </Page>
);

LandingPage.defaultProps = {};

LandingPage.propTypes = {};

export default LandingPage;
