import React from 'react';
import PropTypes from 'prop-types';

import { withFormik } from 'formik';
import * as yup from 'yup';

import Form from 'components/formComponents/Form';
import FormWrapper from 'components/formComponents/Wrapper';
import FormField from 'components/formComponents/Field';
import Button from 'components/Button';

const LoginForm = ({ errors, touched, isSubmitting }) => (
  <FormWrapper>
    <Form errors={errors} touched={touched}>
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

LoginForm.propTypes = {
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

export default withFormik({
  mapPropsToValues({ password, username }) {
    return {
      username: username || '',
      password: password || '',
    };
  },
  validationSchema: yup.object().shape({
    password: yup.string().required('Password is required'),
    username: yup.string().required('Username is required'),
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
})(LoginForm);
