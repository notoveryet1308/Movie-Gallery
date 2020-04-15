import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSimilarMovie } from '../../redux/MovieDeatilReducer/action';
import axios from 'axios';
import Navigation from '../../components/Mobile/Navigation/Navigation';
import { withRouter } from 'react-router-dom';
import { MoviedeatilContainer, MainPoster, MovieInfo, MovieTitle, Plot, Info, SimilarMovieText, SimilarMovieTextBox, SimilarMovies, Movies, NoneFound } from './style';
import RatingStar from '../../components/Star/RatingStar';
import MoviePoster from '../../components/MoviePoster/MoviePoster';
import Footer from '../../components/Footer/Footer';
import Loading from '../../components/Loading/Loading';

function Moviedetail({ history }) {
    const detail = useSelector(state => state.moviedetail);
    const dispatch = useDispatch();
    const currMovie = detail.movie;
    const simMovies = detail.similarmovie;
    const loadingMovie = detail.similarmovieloading;
    useEffect(() => {
        let getmovie = async () => {
            let movieId = currMovie.id;
            let res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=ba714c8ff1283f8aad22d462218768f2&language=en-US&page=1`)
            dispatch(getSimilarMovie(res.data.results));
        }
        getmovie();
    }, [currMovie, dispatch])
    return (
        <MoviedeatilContainer>

            <Navigation />
            <MainPoster src={`https://image.tmdb.org/t/p/original${currMovie.poster_path}`} />
            <MovieInfo>
                <MovieTitle>
                    {currMovie.title}
                </MovieTitle>
                <RatingStar rating={currMovie.rating} />
                <Plot>
                    {currMovie.overview}
                </Plot>
                <Info>
                    <p className='label'>Release Date:</p>
                    <p className='data'>{currMovie.release_date}</p>
                </Info>
                {currMovie.original_language && <Info>
                    <p className='label'>Language:</p>
                    <p className='data'>{currMovie.original_language}</p>
                </Info>}
                {currMovie.popularity && <Info>
                    <p className='label'>Polularity:</p>
                    <p className='data'>{currMovie.popularity}</p>
                </Info>}
                {currMovie.vote_count && <Info>
                    <p className='label'>Total Vote:</p>
                    <p className='data'>{currMovie.vote_count}</p>
                </Info>}
            </MovieInfo>
            <SimilarMovies>
                <SimilarMovieTextBox>
                    <SimilarMovieText>Similar Movies</SimilarMovieText>
                </SimilarMovieTextBox>
                {!loadingMovie ? <Movies>
                    {simMovies.map((movie, index) =>
                        <MoviePoster
                            key={index}
                            poster={movie.poster_path}
                            rating={movie.vote_average}
                            name={movie.title}
                            movie={movie} />)}
                </Movies> : <Loading />}
                {(!loadingMovie && simMovies.length === 0) && <NoneFound>
                    <h1>No Similar movies found</h1>
                </NoneFound>}
            </SimilarMovies>
            <Footer />
        </MoviedeatilContainer>
    )
}

export default withRouter(Moviedetail);
