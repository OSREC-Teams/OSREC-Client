import React from 'react';
import styled from 'styled-components';

import Title from 'components/Title';
import ChatroomsList from './chatroomsListPage/ChatroomsList';

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

const ChatroomsListPage = () => (
  <Page>
    <ListContainer>
      <Title marginBottom="20px">Discover chatrooms</Title>
      <ChatroomsList />
    </ListContainer>
  </Page>
);

export default ChatroomsListPage;
