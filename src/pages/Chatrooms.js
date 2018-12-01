import React from 'react';
import styled from 'styled-components';

import Title from 'components/Title';
import ChatroomsList from './chatrooms/ChatroomsList';

const Page = styled.div`
  height: 100%;
`;

const ListContainer = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Chatrooms = () => (
  <Page>
    <ListContainer>
      <Title marginBottom="20px">Discover chatrooms</Title>
      <ChatroomsList />
    </ListContainer>
  </Page>
);

export default Chatrooms;
