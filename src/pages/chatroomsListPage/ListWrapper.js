import styled from 'styled-components';

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 0.25rem;
  padding: 20px;
  background-color: #666666;
  width: 25%;
  min-width: 215px;
  height: 80%;
  max-height: 700px;
  overflow-y: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export default ListWrapper;
