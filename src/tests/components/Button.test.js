import React from 'react';
import Button from 'components/Button';
import { shallow } from 'enzyme';

test('Button renders an html button', () => {
  const button = shallow(<Button>Beautiful Button</Button>);
  expect(button).toMatchSnapshot();
});
