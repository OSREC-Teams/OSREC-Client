import React from 'react'
import PropTypes from 'prop-types';
import { withFormik, Form } from 'formik'
import styled from 'styled-components'
import * as Yup from 'yup';

import ErrorField from '../../components/FormComponents/Error';
import FormField from '../../components/FormComponents/Field';
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

const FormComponent = styled(Form)`
  width: 80%;
  text-align: center;
`;

const FieldContainer = styled.div`
  display: flex;
  align-items: center;
`;

const errorDisplay = (touched, errors) => {
  let counter = 0;

  const displayedError = Object.keys(touched).map(touchedKey =>
    Object.keys(errors).map(errorKey => {
      counter += 1;
      if (touchedKey === errorKey) {
        return <ErrorField key={counter}>{errors[errorKey]}<br/></ErrorField>
      }
      return undefined;
    }));
    return displayedError
}

const RegisterForm = ({
  errors,
  touched,
  isSubmitting
}) => (
  <FormComponent>
    <FormTitle>Register</FormTitle>
    <div>{errorDisplay(touched, errors)}</div>
    <FieldContainer>
      <FormField type="email" name="email" placeholder="Email" border={touched.email && errors.email ? '#FF0000' : '#6c3b91'}/>
    </FieldContainer>
    <FieldContainer>
      <FormField type="username" name="username" placeholder="Username" border={touched.username && errors.username ? '#FF0000' : '#6c3b91'}/>
    </FieldContainer>
    <FieldContainer>
        <FormField type="password" name="password" placeholder="Password" border={touched.password && errors.password ? '#FF0000' : '#6c3b91'}/>
    </FieldContainer>
    <Button disabled={isSubmitting} type="submit" fontSize="1.5rem" padding="0.375rem 4rem">
      Submit
    </Button>
  </FormComponent>
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
