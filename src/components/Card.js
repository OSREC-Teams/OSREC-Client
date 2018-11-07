import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const ImageAndTextCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: ${props => props.width};
  height: ${props => props.height};
  &:hover {
    box-shadow: 0 12px 20px 0 rgba(0, 0, 0, 0.2);
  }
  border: 1px solid black;
  border-radius: 0.25rem;
`;

const TextContainer = styled.div`
  text-align: center;
  padding: 2px 16px;
  background-color: #6b6b6b;
  color: white;
  font-size: 1.5rem;
  padding: 10px;
  border: 1px solid black;
  border-radius: 0.25rem;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 0.25rem;
`;

const Card = ({ width, height, image, text }) => (
  <ImageAndTextCard width={width} height={height}>
    <Img src={image} alt="" />
    <TextContainer>{text}</TextContainer>
  </ImageAndTextCard>
);

Card.defaultProps = {
  width: '30%',
  height: '40%',
};

Card.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
