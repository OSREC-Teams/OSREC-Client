import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

import ErrorField from 'components/formComponents/Error';
import SuccessField from 'components/formComponents/Success';

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

const Form = ({ submitStatus, touched, errors, children }) => (
  <SForm>
    {submitStatus.failed && (
      <ErrorField>{submitStatus.failedError.message}</ErrorField>
    )}
    {submitStatus.succeeded && <SuccessField>Success !</SuccessField>}
    {errorDisplay(touched, errors)}
    {children}
  </SForm>
);

Form.propTypes = {
  submitStatus: PropTypes.shape({
    succeeded: PropTypes.bool,
    failed: PropTypes.bool,
    failedError: PropTypes.shape({ message: PropTypes.string }).isRequired,
  }).isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default Form;
