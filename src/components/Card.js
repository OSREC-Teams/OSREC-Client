import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components'

const ImageAndTextCard = styled.div`
     box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
     transition: 0.3s;
     width: ${props => props.width};
     height: ${props => props.height};
     &:hover {
       box-shadow: 0 12px 20px 0 rgba(0,0,0,0.2);
     }
`
const TextContainer = styled.div`
    text-align: center;
    padding: 2px 16px;
`

const Card = ({width, height, image, text}) => (
  <ImageAndTextCard width={width} height={height}>
    <img src={image} alt="" style={{ width : "100%"}} />
    <TextContainer>
      <h4><b>{text}</b></h4>
    </TextContainer>
  </ImageAndTextCard>
);

Card.defaultProps = {
 width: '30%',
 height: '40%',
}

Card.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Card;
