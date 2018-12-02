import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import changeLang from 'modules/lang/thunks';

import { translate } from 'utils/translate';

import LanguageSelect from 'components/LanguageSelect';
import Button from 'components/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 30px;
  padding-right: 30px;
`;

const Header = ({ lang }) => {
  const langChange = event => {
    lang(event.target.value);
  };

  return (
    <Wrapper>
      <LanguageSelect langChange={langChange} />
      <Link to="/login">
        <Button>{translate('LOGIN')}</Button>
      </Link>
    </Wrapper>
  );
};

const mapDispatchToProps = dispatch => ({
  lang: lang => dispatch(changeLang(lang)),
});

Header.propTypes = {
  lang: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(Header);
