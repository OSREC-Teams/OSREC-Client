import styled from 'styled-components';

export default styled.h1`
  font-family: 'Exo 2', sans-serif;
  color: white;
  padding: 0.5em 0;
  border-top: 2px solid #6c3b91;
  border-bottom: 2px solid #6c3b91;
  width: 100%;
  text-align: center;
  font-weight: normal;
  margin-bottom: ${props => `${props.marginBottom};`};
`;
