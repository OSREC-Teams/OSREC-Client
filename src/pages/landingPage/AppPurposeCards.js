import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from 'components/Card';

const PurposeCard = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const cardImage =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAUGVYIeZbJ0Rv6-LnW9BPc79tRaqqpMBUqIHDWjIR270C47cMbg';

const purposeCardText = {
  login: 'Log in and dive into multiples awesome chats',
  create: 'Create and lead rooms around a subject',
  chat: 'Talk and share about your favourite topics',
};

const AppPurposeCards = ({ className }) => (
  <PurposeCard className={className}>
    {Object.values(purposeCardText).map(text => (
      <Card text={text} image={cardImage} />
    ))}
  </PurposeCard>
);

AppPurposeCards.defaultProps = {
  className: '',
};

AppPurposeCards.propTypes = {
  className: PropTypes.string,
};

export default AppPurposeCards;
