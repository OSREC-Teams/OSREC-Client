import React from 'react'
import PropTypes from 'prop-types';
import { withFormik, Form, Field } from 'formik'
import styled from 'styled-components'
import * as Yup from 'yup';

import Button from '../../components/Button';

const FormTitle = styled.h1`
  font-family: 'Exo 2', sans-serif;
  padding: 0.5em 0;
  border-top: 2px solid #6c3b91;
  border-bottom: 2px solid #6c3b91;
  color: white;
  text-align: center;
  font-weight: normal;
  margin-bottom: 20px;
`;

// TODO: Focus violet
const FormField = styled(Field)`
  font-size: 1em;
  margin-bottom: 10px;
`;

const FormFieldAndError = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const FieldError = styled.p`
  color: white;
  font-family: 'Exo 2', sans-serif;
`;

const RegisterForm = ({
  errors,
  touched,
  isSubmitting
}) => (
  <Form>
    <FormTitle>Register</FormTitle>
    <FormFieldAndError>
      { touched.email && errors.email && <FieldError>{errors.email}</FieldError> }
      <FormField type="email" name="email" placeholder="Email"/>
    </FormFieldAndError>
    <FormFieldAndError>
      { touched.username && errors.username && <FieldError>{errors.username}</FieldError> }
      <FormField type="username" name="username" placeholder="Username"/>
    </FormFieldAndError>
    <FormFieldAndError>
        { touched.password && errors.password && <FieldError>{errors.password}</FieldError> }
        <FormField type="password" name="password" placeholder="Password"/>
    </FormFieldAndError>
    <Button disabled={isSubmitting} type="submit" fontSize="1.5rem" padding="0.375rem 4rem">
      Submit
    </Button>
  </Form>
)

 RegisterForm.propTypes = {
   errors: PropTypes.object.isRequired,
   touched: PropTypes.object.isRequired,
   isSubmitting: PropTypes.bool.isRequired,
 }

const RegisterFormik = withFormik({
  mapPropsToValues({ email, password, username }) {
    return {
      email: email || '',
      password: password || '',
      username: username || ''
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Email not valid').required('Email is required'),
    password: Yup.string().min(9, 'Password must be 9 characters or longer').required('Password is required')
    // Find a validation for username
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    // TODO: Call the redux once it's done
    setTimeout(() => {
      if(values.email === 'andrew@test.io') {
        setErrors({ email: 'That email is already taken' })
      } else {
        resetForm()
      }
      setSubmitting(false)
    }, 2000)
  }
})(RegisterForm)

export default RegisterFormik;
