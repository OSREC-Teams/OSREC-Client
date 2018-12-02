import React from 'react';
import styled from 'styled-components';

import Title from 'components/Title';
import Polyglot from 'utils/translate';
import RegisterForm from './registerPage/RegisterForm';
import Header from './landingPage/Header';

const Page = styled.div`
  height: 100%;
`;

const FormContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const RegisterPage = () => (
  <Page>
    <Header />
    <FormContainer>
      <Title marginBottom="20px">{Polyglot.t('REGISTER')}</Title>
      <RegisterForm />
    </FormContainer>
  </Page>
);

export default RegisterPage;
