import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

import ErrorField from 'components/formComponents/Error';

const SForm = styled(FormikForm)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
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

const Form = ({ touched, errors, children }) => (
  <SForm>
    {errorDisplay(touched, errors)}
    {children}
  </SForm>
);

Form.propTypes = {
  touched: PropTypes.array.isRequired,
  errors: PropTypes.array.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default Form;
