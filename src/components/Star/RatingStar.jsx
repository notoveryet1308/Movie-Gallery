import React from 'react';
import { RatingContainer, FullStar } from './style';

function RatingStar({rating}) {
    return (
        <RatingContainer>
           <FullStar/>
           <FullStar/>
           <FullStar/>
           <FullStar/>
        </RatingContainer>
    )
}

export default RatingStar
