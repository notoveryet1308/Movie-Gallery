import React, { useState, useRef, useEffect } from 'react';
import { UpcomingContainer, Tag, UpcomingTextBox, UpcomingText, RegionWrapper, CountryCodeBox, Code, UpcomingWrapper, Upcomingmovies } from './style';
import Navigation from '../../components/Mobile/Navigation/Navigation';
import { gsap } from 'gsap';
import { useSelector, useDispatch } from 'react-redux';
import { setRegion, setPage, setUpcommingMovies } from '../../redux/UpcomingMovieReducer/action';
import Axios from 'axios';
import Loading from '../../components/Loading/Loading';
import MoviePoster from '../../components/MoviePoster/MoviePoster';
import Footer from '../../components/Footer/Footer';
import Pagination from '../../components/Pagination/Pagination';
const UPCOMING_API = 'https://api.themoviedb.org/3/movie/upcoming?api_key=ba714c8ff1283f8aad22d462218768f2&language=en-US&page=';
function Upcoming() {
    const [isVisible, setVisble] = useState(false);
    const [maxPage, setMaxPage] = useState(0);
    const data = useSelector(state => state.upcomingmovie);
    const page = data.page;
    const region = data.region;
    const dispatch = useDispatch();
    let countryBox = useRef(null);
    useEffect(() => {
        if (isVisible) {
            gsap.fromTo(countryBox, .8,
                { y: -5, opacity: 1 },
                { y: 0, opacity: 1, visibility: 'visible', ease: "elastic", delay: .2 });
        }
    }, [isVisible])

    const handleClick = e => {
        if ((e.target.className).includes('india')) dispatch(setRegion('in'));
        if ((e.target.className).includes('usa')) dispatch(setRegion('us'));
        if ((e.target.className).includes('japan')) dispatch(setRegion('jp'));
        if ((e.target.className).includes('china')) dispatch(setRegion('cn'));
        if ((e.target.className).includes('korea')) dispatch(setRegion('kr'));
        if ((e.target.className).includes('french')) dispatch(setRegion('fr'));

        setVisble(!isVisible);
    }

    useEffect(() => {
        const getUpcoming = async () => {
            let res = await Axios.get(`${UPCOMING_API}${page}&region=${region}`);
            console.log(res.data.page);
            setMaxPage(res.data.page);
            dispatch(setUpcommingMovies(res.data.results));
        }
        getUpcoming();
    }, [page, region, dispatch])
    return (
        <UpcomingContainer>
            <Navigation />
            <UpcomingWrapper>
                <Tag>
                    <UpcomingTextBox>
                        <UpcomingText>Upcoming movies</UpcomingText>
                    </UpcomingTextBox>
                    <RegionWrapper>
                        <p
                            className='text'
                            onClick={(e) => setVisble(!isVisible)}>By Region</p>
                        {isVisible && <CountryCodeBox
                            onClick={handleClick}
                            ref={el => countryBox = el}>
                            <Code className='india'>India</Code>
                            <Code className='usa'>USA</Code>
                            <Code className='japan'>Japan</Code>
                            <Code className='china'>China</Code>
                            <Code className='korea'>Korea</Code>
                            <Code className='french'>French</Code>
                        </CountryCodeBox>}
                    </RegionWrapper>
                </Tag>
                {data.movieLoading ? <Loading /> :
                    <Upcomingmovies>
                        {data.movies.map((movie, index)=>
                          <MoviePoster
                            key={index}
                            name={movie.title}
                            poster={movie.poster_path}
                            movie={movie}
                          />)}
                    </Upcomingmovies>}
            </UpcomingWrapper>
          { page < maxPage &&  <Pagination page={page} setPage={setPage}/>}
            <Footer/>
        </UpcomingContainer>
    )
}

export default Upcoming
