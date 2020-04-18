import React, { useState } from 'react';
import { SearchContainer, SearchWrapper, MovieInput, SearchBtn, SearchMovies, Space, NothingFound } from './style';
import Navigation from '../../components/Mobile/Navigation/Navigation';
import MoviePoster from '../../components/MoviePoster/MoviePoster';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies, setLoading } from '../../redux/SearchmovieReducer/action';
import Loading from '../../components/Loading/Loading';
import Footer from '../../components/Footer/Footer';

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=ba714c8ff1283f8aad22d462218768f2&language=en-US&query='

// iron%20man&page=1&include_adult=false
function Search() {
    const [moviename, setMoviename] = useState(null);
    const data = useSelector(state => state.search);
    const dispatch = useDispatch();
    const search = async (e) => {
        e.preventDefault();
        let res = await axios.get(`${SEARCH_API}/${moviename}&page=1&include_adult=false`);
        dispatch(setLoading());
        dispatch(getMovies(res.data.results));
   
    }
    return (
        <SearchContainer>
            <Navigation />
            <SearchWrapper>
                <MovieInput
                    value={moviename}
                    placeholder='Enter movie name'
                    onChange={(e) => setMoviename(e.target.value)} />
                <SearchBtn onClick={search}>Search</SearchBtn>
                {(data.isLoading === null && data.movies.length === 0) && <Space />}
                {data.isLoading ? <Loading /> :
                    <SearchMovies>
                        {
                            data.movies.map((movie, index) =>
                                <MoviePoster
                                    key={index}
                                    rating={movie.vote_average}
                                    name={movie.title}
                                    poster={movie.poster_path}
                                    movie={movie}
                                />)

                        }
                    </SearchMovies>}
                    {(data.isLoading === false && data.movies.length === 0) && <NothingFound>
                        <p className='none'>No movie with such name found, Sorry !!</p>
                        </NothingFound>}
            </SearchWrapper>
            <Footer />
        </SearchContainer>
    )
}

export default Search
