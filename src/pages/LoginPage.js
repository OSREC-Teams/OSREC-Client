import React from 'react';
import styled from 'styled-components';

import Title from 'components/Title';
import LoginForm from './loginPage/LoginForm';

const Page = styled.div`
  height: 100%;
`;

const Container = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const LoginPage = () => (
  <Page>
    <Container>
      <Title marginBottom="20px">Login</Title>
      <LoginForm />
    </Container>
  </Page>
);

export default LoginPage;
