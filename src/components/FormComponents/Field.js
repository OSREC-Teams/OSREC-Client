import styled from 'styled-components'

import { Field } from 'formik'

export default styled(Field)`
  font-size: 1em;
  margin-bottom: 10px;
  border-color: ${props => props.border};
  border-radius: 5px;
  height: 2em;
  padding: 0.5em;
`;
