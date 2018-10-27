import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ children }) => <div>{children}</div>;

Header.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Header;
