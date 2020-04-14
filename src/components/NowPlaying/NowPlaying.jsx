import React, { } from 'react'
import { NowPlayingContainer, NowPlayigTextBox, NowPlayingText, Posters } from './style'
import MoviePoster from '../MoviePoster/MoviePoster'
import Loading from '../Loading/Loading';
import { useSelector } from 'react-redux';


function NowPlaying() {
    const Movies = useSelector(state => state.nowplaying.allMovies);
    const isLoading = useSelector(state => state.nowplaying.isLoading);

    return (
        <NowPlayingContainer>
            <NowPlayigTextBox>
                <NowPlayingText>Now Playing</NowPlayingText>
            </NowPlayigTextBox>
            {!isLoading ? <Posters>
                {Movies.map((movie, index) => <MoviePoster
                    key={index}
                    poster={movie.poster_path}
                    rating={movie.vote_average}
                    movie = {movie}
                    name={movie.title}
                />)}
            </Posters> : <Loading />}
        </NowPlayingContainer>
    )
}

export default NowPlaying;
