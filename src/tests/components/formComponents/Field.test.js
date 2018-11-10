import React from 'react';
import Field from 'components/formComponents/Field';
import { shallow } from 'enzyme';

test('Button renders a field with error', () => {
  const field = shallow(<Field type="password" name="password" placeholder="Password" error />);
  expect(field).toMatchSnapshot();
});

test('Button renders a field without error', () => {
  const field = shallow(<Field type="password" name="password" placeholder="Password" error={false} />);
  expect(field).toMatchSnapshot();
});
