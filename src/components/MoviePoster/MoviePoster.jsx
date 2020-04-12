import React from 'react'
import {MoviePosterContainer, PosterImage, Image, RatingBox} from './style';
function MoviePoster({poster, rating}) {
    return (
        <MoviePosterContainer>
            <RatingBox>
                <span>{rating}</span>
            </RatingBox>
            <PosterImage >
                <Image 
                    src={`https://image.tmdb.org/t/p/original${poster}`}
                    alt='poster-img' />
            </PosterImage>
        </MoviePosterContainer>
    )
}

export default MoviePoster
