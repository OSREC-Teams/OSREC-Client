import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 30px;
  padding-right: 30px;
`;

const Header = () => (
  <Wrapper>
    <Button>Login</Button>
  </Wrapper>
);

export default Header;
