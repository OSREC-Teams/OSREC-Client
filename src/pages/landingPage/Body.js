import React from 'react';
import styled from 'styled-components';

import Button from 'components/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  overflow-x: hidden;
`;

const Title = styled.h1`
  color: #6c3b91;
  padding: 0.5em;
  border: 2px solid #6c3b91;
  border-radius: 4px;
  width: 100%;
  text-align: center;
`;

const Body = () => (
  <Wrapper>
    <Title>Application Name</Title>
    <Button padding="0.375rem 4rem">Chat Now !</Button>
  </Wrapper>
);

export default Body;
