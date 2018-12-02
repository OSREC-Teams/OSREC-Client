import styled from 'styled-components';

export const ListWrapper = styled.table`
  border-radius: 0.25rem;
  padding: 20px;
  background-color: #666666;
  width: 25%;
  min-width: 215px;
  height: 80%;
  scroll-y: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const ListBody = styled.tbody`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  overflow-y: auto;
`;
