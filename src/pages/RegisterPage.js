import React from 'react';
import styled from 'styled-components';

import Title from 'components/Title';
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

const Register = () => (
  <Page>
    <Header />
    <FormContainer>
      <Title marginBottom="20px">Register</Title>
      <RegisterForm />
    </FormContainer>
  </Page>
);

Register.defaultProps = {};

Register.propTypes = {};

export default Register;
