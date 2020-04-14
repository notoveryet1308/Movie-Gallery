import React from 'react'
import {MoviePosterContainer, PosterImage, Image, RatingBox} from './style';
import {useDispatch} from 'react-redux';
import {setMoviedetail} from '../../redux/MovieDeatilReducer/action';
import {withRouter} from 'react-router-dom';
function MoviePoster({poster,name, rating, movie, history}) {
    const dispatch = useDispatch();
    const handleClick = ()=>{
         dispatch(setMoviedetail(movie));
         name = (name.split(' ').join('-')).toLowerCase();
         history.push(`/detail/:${name}`);
    }
    return (
        <MoviePosterContainer onClick = {handleClick}>
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

export default withRouter(MoviePoster)
