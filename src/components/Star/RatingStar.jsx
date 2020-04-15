import React from 'react';
import { RatingContainer } from './style';

function RatingStar({rating}) {
    return (
        <RatingContainer>
            <span >{rating}</span>/10
        </RatingContainer>
    )
}

export default RatingStar
