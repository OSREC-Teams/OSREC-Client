import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    <Link to="/login">
      <Button>Login</Button>
    </Link>
  </Wrapper>
);

export default Header;
