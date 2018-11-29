import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: #6c3b91;
  display: flex;
  justify-content: space-between;
`;

const MenuElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
  color: white;
  background-color: #6c3b91;

  &:hover {
    background-color: #8449b2;
    cursor: pointer;
  }
`;

const MenuLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
  color: white;
  background-color: #6c3b91;
  text-decoration: none;

  &:hover {
    background-color: #8449b2;
    cursor: pointer;
  }
`;

const Menu = () => (
  <Wrapper>
    <MenuLink to="/chatrooms/create">Create your own personal space</MenuLink>
    <MenuElement>Hello</MenuElement>
  </Wrapper>
);

Menu.propTypes = {};

export default Menu;
