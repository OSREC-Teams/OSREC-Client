import React from 'react';
import styled from 'styled-components';

import Button from 'components/Button';

const Wrapper = styled.div`
  position: absolute;
  top: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
`;

const Title = styled.h1`
  font-family: 'Exo 2', sans-serif;
  color: white;
  padding: 0.5em 0;
  border-top: 2px solid #6c3b91;
  border-bottom: 2px solid #6c3b91;
  width: 100%;
  text-align: center;
  font-weight: normal;
  margin-bottom: 1.5em;
`;

const Body = () => (
  <Wrapper>
    <Title>Application Name</Title>
    <Button padding="0.375rem 4rem">Chat Now !</Button>
  </Wrapper>
);

export default Body;
