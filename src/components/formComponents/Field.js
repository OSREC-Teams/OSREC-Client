import styled from 'styled-components';

import { Field } from 'formik';

export default styled(Field)`
  font-size: 1em;
  margin-bottom: 10px;
  ${props => (props.error ? 'border-color: #FF0000' : '')};
  border-radius: 0.3rem;
  height: 2em;
  padding: 0.5em;
  width: 70%;
  text-align: center;

  &:focus {
    outline: #6c3b91;
  }
`;
