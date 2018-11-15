import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createUser } from 'modules/users/thunks';

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

const FormTitle = styled.h1`
  font-family: 'Exo 2', sans-serif;
  padding: 0.5em 0;
  width: 80%;
  border-top: 2px solid #6c3b91;
  border-bottom: 2px solid #6c3b91;
  color: white;
  text-align: center;
  font-weight: normal;
  margin-bottom: 20px;
`;

const Register = ({ registerUser }) => (
  <Page>
    <Header />
    <FormContainer>
      <FormTitle>Register</FormTitle>
      <RegisterForm registerUser={registerUser} />
    </FormContainer>
  </Page>
);

Register.defaultProps = {};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  registerUser: createUser,
};

export default connect(
  undefined,
  mapDispatchToProps,
)(Register);
