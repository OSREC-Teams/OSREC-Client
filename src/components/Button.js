import styled from 'styled-components';

export default styled.button`
  background-color: #6c3b91;
  border-radius: 0.25rem;
  border: 2px solid;
  border-color: #6c3b91;
  padding: ${props => (props.padding ? props.padding : '0.375rem 0.75rem')};
  font-size: 1.5rem;
  font-weight: 900;
  text-align: center;
  color: white;
  transition: 0.2s;

  &:hover {
    background-color: #8449b2;
    border-color: #8449b2;
    cursor: pointer;
  }

  &:active {
    background-color: #593177;
    border-color: #593177;
  }

  &:focus {
    outline: 0;
  }
`;
