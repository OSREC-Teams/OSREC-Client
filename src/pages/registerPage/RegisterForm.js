import React from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import * as yup from 'yup';

import Form from 'components/formComponents/Form';
import FormWrapper from 'components/formComponents/Wrapper';
import FormField from 'components/formComponents/Field';
import Button from 'components/Button';

const RegisterForm = ({ errors, touched, isSubmitting }) => (
  <FormWrapper>
    <Form errors={errors} touched={touched}>
      <FormField
        type="email"
        name="email"
        placeholder="Email"
        error={touched.email && errors.email}
      />
      <FormField
        type="username"
        name="username"
        placeholder="Username"
        error={touched.username && errors.username}
      />
      <FormField
        type="password"
        name="password"
        placeholder="Password"
        error={touched.password && errors.password}
      />
      <Button
        disabled={isSubmitting}
        type="submit"
        fontSize="1.5rem"
        padding="0.375rem 4rem"
      >
        Submit
      </Button>
    </Form>
  </FormWrapper>
);

RegisterForm.propTypes = {
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

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
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    // TODO: Call the redux once it's done
    setTimeout(() => {
      if (values.email === 'andrew@test.io') {
        setErrors({ email: 'That email is already taken' });
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 2000);
  },
})(RegisterForm);

export default RegisterFormik;
