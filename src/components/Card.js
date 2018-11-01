import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components'

const ImageAndTextCard = styled.div`
     box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
     transition: 0.3s;
     width: 30%;
     height: 40%;
     &:hover {
       box-shadow: 0 12px 20px 0 rgba(0,0,0,0.2);
     }
`
const TextContainer = styled.div`
    text-align: center;
    padding: 2px 16px;
`

const Card = ({image, text}) => (
  <ImageAndTextCard>
    <img src={image} alt="" style={{ width : "100%"}} />
    <TextContainer>
      <h4><b>{text}</b></h4>
    </TextContainer>
  </ImageAndTextCard>
);

Card.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Card;
