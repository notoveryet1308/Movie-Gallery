import React, { useEffect } from 'react';
import { TopRatedContainer, TopRatedWrapper, TopRatedTextBox, TopRatedText, TopRatedmovies } from './style';
import Navigation from '../../components/Mobile/Navigation/Navigation';
import { setPage, setTopRatedMovies } from '../../redux/TopRatedReducer/action';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';
import Loading from '../../components/Loading/Loading';
import MoviePoster from '../../components/MoviePoster/MoviePoster';
import Pagination from '../../components/Pagination/Pagination';
import Footer from '../../components/Footer/Footer';
const TOP_RATED_MOVIE_API = `https://api.themoviedb.org/3/movie/top_rated?api_key=ba714c8ff1283f8aad22d462218768f2&language=en-US&page=`;
function TopRated() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.toprated);
    const page = data.page;
    useEffect(() => {
        const getToprated = async () => {
            let res = await Axios.get(`${TOP_RATED_MOVIE_API}${page}`);
            dispatch(setTopRatedMovies(res.data.results));
        }
        getToprated();

    }, [page, dispatch])
    return (
        <TopRatedContainer>
            <Navigation />
            <TopRatedWrapper>
                <TopRatedTextBox>
                    <TopRatedText>Top Rated</TopRatedText>
                </TopRatedTextBox>
                {data.topRatedMovieLoading ? <Loading /> : <TopRatedmovies>
                    {
                        data.movies.map((movie, index) =>
                            <MoviePoster
                                rating={movie.vote_average}
                                name={movie.title}
                                poster={movie.poster_path}
                                movie={movie}
                            />)
                    }
                </TopRatedmovies>}

            </TopRatedWrapper>
            <Pagination page={page} setPage={setPage} />
            <Footer/>
        </TopRatedContainer>
    )
}

export default TopRated;
