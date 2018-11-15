import React from 'react';
import PropTypes from 'prop-types';
import { withFormik, Form } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';
import { connect } from 'react-redux';

import { createUser } from 'modules/users/thunks';

import ErrorField from '../../components/formComponents/Error';
import FormField from '../../components/formComponents/Field';
import Button from '../../components/Button';

const FieldContainer = styled.div`
  display: flex;
  align-items: center;
`;

const FormContainer = styled.div`
  border-radius: 0.25rem;
  padding: 20px;
  background-color: #666666;
  display: flex;
  align-items: center;
  justify-content: evenly;
  flex-direction: column;
`;

const errorDisplay = (touched, errors) => {
  const displayedError = Object.keys(touched).map(touchedKey =>
    Object.keys(errors).map(errorKey => {
      if (touchedKey === errorKey) {
        return <ErrorField key={errorKey}>{errors[errorKey]}</ErrorField>;
      }
      return null;
    }),
  );
  return displayedError;
};

const RegisterForm = ({ errors, touched, isSubmitting }) => (
  <Form>
    <FormContainer>
      {errorDisplay(touched, errors)}
      <FieldContainer>
        <FormField
          type="email"
          name="email"
          placeholder="Email"
          error={touched.email && errors.email}
        />
      </FieldContainer>
      <FieldContainer>
        <FormField
          type="username"
          name="username"
          placeholder="Username"
          error={touched.username && errors.username}
        />
      </FieldContainer>
      <FieldContainer>
        <FormField
          type="password"
          name="password"
          placeholder="Password"
          error={touched.password && errors.password}
        />
      </FieldContainer>
      <Button
        disabled={isSubmitting}
        type="submit"
        fontSize="1.5rem"
        padding="0.375rem 4rem"
      >
        Submit
      </Button>
    </FormContainer>
  </Form>
);

RegisterForm.propTypes = {
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

const mapDispatchToProps = dispatch => ({
  registerUser: user => dispatch(createUser(user)),
});

const RegisterFormik = withFormik({
  mapPropsToValues({ email, password, username }) {
    return {
      email: email || '',
      password: password || '',
      username: username || '',
    };
  },

  validationSchema: yup.object().shape({
    email: yup
      .string()
      .email('Email not valid')
      .required('Email is required'),
    password: yup
      .string()
      .min(9, 'Password must be 9 characters or longer')
      .required('Password is required'),
    username: yup
      .string()
      .min(3, 'Username must be 3 characters or longer')
      .required('Username is required'),
  }),

  handleSubmit(values, { props, resetForm }) {
    props.registerUser({
      email: values.email,
      username: values.username,
      password: values.password,
    });
    resetForm();
  },
})(RegisterForm);

export default connect(
  null,
  mapDispatchToProps,
)(RegisterFormik);
