import React, {useEffect} from 'react';
import { PopularContainer, PopularWrapper, PopularTextBox, PopularText, Popularmovies } from './style';
import Navigation from '../../components/Mobile/Navigation/Navigation';
import Axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import Pagination from '../../components/Pagination/Pagination';
import {setPage, setPopularMovie} from '../../redux/PopularMovieReducer/action';
import Loading from '../../components/Loading/Loading';
import MoviePoster  from '../../components/MoviePoster/MoviePoster';
import Footer from '../../components/Footer/Footer';
const POPULAR_MOVIE_API = `https://api.themoviedb.org/3/movie/popular?api_key=ba714c8ff1283f8aad22d462218768f2&language=en-US&page=`;

function Popular() {
    const dispatch = useDispatch();
   
    const data = useSelector(state=> state.popularmovie);
    const page = data.page;

    useEffect(()=>{
       const getPopular = async ()=>{
           let res = await Axios.get(`${POPULAR_MOVIE_API}${page}`);
           console.log(res.data.results)
           dispatch(setPopularMovie(res.data.results));
       }
       getPopular();
    }, [page, dispatch])
    return (
        <PopularContainer>
            <Navigation />
            <PopularWrapper>
                <PopularTextBox>
                    <PopularText>Popular movies</PopularText>
                </PopularTextBox>
               {data.popularMovieLoading? <Loading/>: <Popularmovies>
                {data.movies.map((movie, index)=> 
                  <MoviePoster
                    rating={movie.vote_average}
                    name={movie.title}
                    poster={movie.poster_path}
                    movie={movie}
                  />)}
                </Popularmovies>}
            </PopularWrapper>
            <Pagination page={page} setPage={setPage}/>
            <Footer/>
        </PopularContainer>
    )
}

export default Popular;
