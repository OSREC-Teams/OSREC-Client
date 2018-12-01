import React from 'react';
import styled from 'styled-components';

import Title from 'components/Title';
import ChatroomsCreateForm from './chatroomsCreatePage/ChatroomsCreateForm';

const Page = styled.div`
  height: 100%;
`;

const FormContainer = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const ChatroomsCreatePage = () => (
  <Page>
    <FormContainer>
      <Title marginBottom="20px">Create your own chatroom</Title>
      <ChatroomsCreateForm />
    </FormContainer>
  </Page>
);

export default ChatroomsCreatePage;
