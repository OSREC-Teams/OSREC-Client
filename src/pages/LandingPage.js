import React from 'react';
import styled from 'styled-components';

import Body from 'pages/landingPage/Body';

const Page = styled.div`
  height: 100%;
  background-color: #313131;
`;

const LandingPage = () => (
  <Page>
    <Body />
  </Page>
);

LandingPage.defaultProps = {};

LandingPage.propTypes = {};

export default LandingPage;
