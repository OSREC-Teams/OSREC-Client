import React from 'react';
import styled from 'styled-components';

import Button from 'components/Button';
import Card from 'components/Card';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  overflow-x: hidden;
`;

const Title = styled.h1`
  color: #6c3b91;
  padding: 0.5em;
  border: 2px solid #6c3b91;
  border-radius: 4px;
  width: 100%;
  text-align: center;
`;

const PurposeCard = styled.div`
  margin-top: 20px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const cardImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAUGVYIeZbJ0Rv6-LnW9BPc79tRaqqpMBUqIHDWjIR270C47cMbg';

const purposeCardText = {
  login: 'Log in and dive into multiples awesome chats',
  create: 'Create and lead rooms around a subject',
  chat: 'Talk and share about your favourite topics'
}

const Body = () => (
  <Wrapper>
    <Title>Application Name</Title>
    <Button padding="0.375rem 4rem">Chat Now !</Button>
    <PurposeCard>
      <Card text={purposeCardText.login} image={cardImage}/>
      <Card text={purposeCardText.create} image={cardImage}/>
      <Card text={purposeCardText.chat} image={cardImage}/>
    </PurposeCard>
  </Wrapper>
);

export default Body;
