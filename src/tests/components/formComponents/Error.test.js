import React from 'react';
import Error from 'components/formComponents/Error';
import { shallow } from 'enzyme';

test('Button renders a form error div', () => {
  const error = shallow(<Error>Error</Error>);
  expect(error).toMatchSnapshot();
});
