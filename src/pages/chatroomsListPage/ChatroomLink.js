import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ChatroomLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: white;
  font-size: 1.5em;
  text-transform: capitalize;
  text-align: center;
  padding: 20px;
  width: 80%;

  &:hover {
    background-color: #7c7c7c;
    cursor: pointer;
  }
`;

export default ChatroomLink;
