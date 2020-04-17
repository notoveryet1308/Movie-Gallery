/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { DiscoverContainer, DiscoverWrapper, InputBox, YearInput, RegionInput, DataList, DiscoverBtn, Showcase, Discovermovies } from './style';
import Navigation from '../../components/Mobile/Navigation/Navigation';
import GnereContainer from '../../components/GenreContainer/GnereContainer';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getDiscoveredMovie, setLoading, setPage } from '../../redux/DiscoveredReducer/action';
import MoviePoster from '../../components/MoviePoster/MoviePoster';
import Loading from '../../components/Loading/Loading';
import Pagination from '../../components/Pagination/Pagination';
import Footer from '../../components/Footer/Footer';
function Discover() {
    const [year, setYear] = useState(null);
    const [region, setRegion] = useState(null);
    const [totalPage, setTotalPage] = useState(0);
    const data = useSelector(state => state.discoveredmovies);
    let genre = useSelector(state => state.genre.tags);
    const dispatch = useDispatch();
    let page = data.page;
    let DISCOVER_API;
    const getMovies = async () => {
        dispatch(setLoading());
        
        if (genre.length === 0) {
            DISCOVER_API = `https://api.themoviedb.org/3/discover/movie?api_key=ba714c8ff1283f8aad22d462218768f2&language=en-US&region=${region}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&year=${parseInt(year)}`

        }
        else if (genre.length === 1) {
            DISCOVER_API = `https://api.themoviedb.org/3/discover/movie?api_key=ba714c8ff1283f8aad22d462218768f2&language=en-US&region=${region}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&year=${parseInt(year)}&with_genres=${genre[0]}`
        }
        else if (genre.length === 2) {
            DISCOVER_API = `https://api.themoviedb.org/3/discover/movie?api_key=ba714c8ff1283f8aad22d462218768f2&language=en-US&region=${region}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&year=${parseInt(year)}&with_genres=${genre[0]},${genre[1]}`
        } else if (genre.length >= 3) {
            DISCOVER_API = `https://api.themoviedb.org/3/discover/movie?api_key=ba714c8ff1283f8aad22d462218768f2&language=en-US&region=${region}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&year=${parseInt(year)}&with_genres=${genre[0]},${genre[1]}, ${genre[2]}`
        }


        let res = await axios.get(DISCOVER_API);
        setTotalPage(res.data.total_pages);
        dispatch(getDiscoveredMovie(res.data.results));
    }
    const handleClick = (e) => {
        e.preventDefault();
        getMovies();
    }

    useEffect(()=>{
       if(page > 1){
           getMovies();
       }
    }, [page])

    const hanldeSelect = (e) => {
        if (e.target.name === 'years') {
            setYear(e.target.value)
        } else {
            setRegion(e.target.value)
        }
    }
    return (
        <DiscoverContainer>
            <Navigation />
            <DiscoverWrapper>
                <InputBox>
                    <YearInput
                        list='years'
                        placeholder='Year'
                        name='years'
                        onChange={hanldeSelect} />
                    <DataList id='years'>
                        <option value='2010' />
                        <option value='2011' />
                        <option value='2012' />
                        <option value='2013' />
                        <option value='2014' />
                        <option value='2015' />
                        <option value='2016' />
                        <option value='2017' />
                        <option value='2018' />
                        <option value='2019' />
                        <option value='2020' />
                    </DataList>
                    <RegionInput type='text' list='region' placeholder="Region" name='region'
                        onChange={hanldeSelect} />
                    <DataList id='region'>
                        <option value='in'>India</option>
                        <option value='us'>USA</option>
                        <option value='kr'>Korea</option>
                        <option value='cn'>China</option>
                        <option value='jp'>Japan</option>
                        <option value='fr'>French</option>
                    </DataList>
                    <GnereContainer />

                </InputBox>
                <DiscoverBtn onClick={handleClick}> Discover movie</DiscoverBtn>
                <Showcase>
                    {data.isLoading ? <Loading /> : <Discovermovies>
                        {data.movies.map((movie, index) =>
                            <MoviePoster
                                key={index}
                                rating={movie.vote_average}
                                name={movie.title}
                                poster={movie.poster_path}
                                movie={movie}
                            />)}
                    </Discovermovies>}

                </Showcase>
            </DiscoverWrapper>
           {totalPage > page &&  <Pagination page={page} setPage={setPage} />}
            <Footer/>
        </DiscoverContainer>
    )
}

export default Discover
