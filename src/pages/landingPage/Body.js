import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Title from 'components/Title';
import Button from 'components/Button';
import AppPurposeCards from './AppPurposeCards';

const Wrapper = styled.div`
  position: absolute;
  top: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
`;

const AppPurposeCardsWithMargin = styled(AppPurposeCards)`
  margin: 50px 20px;
`;

const Body = () => (
  <Wrapper>
    <Title marginBottom="1.5em">Application Name</Title>
    <Link to="/register">
      <Button fontSize="1.5rem" padding="0.375rem 4rem">
        Register and Chat Now !
      </Button>
    </Link>
    <AppPurposeCardsWithMargin />
  </Wrapper>
);

export default Body;
