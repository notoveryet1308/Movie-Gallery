/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import { HomepageContainer } from './style';
import Navigation from '../../components/Mobile/Navigation/Navigation';
import Hero from '../../components/Hero/Hero';
import NowPlaying from '../../components/NowPlaying/NowPlaying';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {getMovies} from '../../redux/NowPlayingReducer/action';
import Pagination from '../../components/Pagination/Pagination';

const NOWPLAYING_API = 'https://api.themoviedb.org/3/movie/now_playing?api_key=ba714c8ff1283f8aad22d462218768f2&language=en-US&page=';
function Homepage() {
    const page = useSelector(state => state.nowplaying.page);
    const dispatch = useDispatch();
    useEffect(()=>{
     let  getData = async function (){

        let res = await axios.get(`${NOWPLAYING_API}${page}`);
        dispatch(getMovies(res.data.results));
      }

     getData();
      
    },[page])
    return (
        <HomepageContainer>
            <Navigation />
            <Hero/>
            <NowPlaying/>
            <Pagination/>
        </HomepageContainer>
    )
}

export default Homepage
