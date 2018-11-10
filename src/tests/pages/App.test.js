import React from 'react';
import { App } from 'pages/App';
import { shallow } from 'enzyme';

test('App renders GuestRouter if props loggedIn is false', () => {
  const app = shallow(<App loggedIn={false} />);
  expect(app.find('GuestRouter').length).toBe(1);
  expect(app.find('ProtectedRouter').length).toBe(0);
});

test('App renders ProtectedRouter if props loggedIn is true', () => {
  const app = shallow(<App loggedIn />);
  expect(app.find('GuestRouter').length).toBe(0);
  expect(app.find('ProtectedRouter').length).toBe(1);
});
