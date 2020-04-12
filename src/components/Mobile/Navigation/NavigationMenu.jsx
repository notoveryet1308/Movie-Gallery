import React, { useRef, useEffect } from 'react';
import { NavigationMenuWrapper, BackBtnCross, Bar, MenuWrapper, StyledNavLink } from './style';
import { gsap, TimelineLite } from 'gsap';
let tl;
function NavigationMenu({ handleClick }) {
    tl = new TimelineLite();
    let navMenuWrapper = useRef(null);
    let times1 = useRef(null);
    let times2 = useRef(null);
    let latest = useRef(null);
    let discover = useRef(null);
    let toprated = useRef(null);
    let popular = useRef(null);
    let upcoming = useRef(null);
    let search = useRef(null);


    useEffect(() => {
        tl.to(navMenuWrapper, .5, { visibility: 'vivible', width: `${100}%`, height: `${100}vh`, ease: "power3.out", delay: .2 })
        .staggerFromTo([latest, discover, toprated, popular, upcoming, search], .8, {
            x: 60, opacity:0
        }, {
            x: 0,
            opacity: 1,
            visibility: 'visible',
            ease: "power3.out"
        }, 0.3)
        gsap.to(times1, .9, {
            css: { "-webkit-transform": "rotate(-46.56deg) ", "visibility": "visible" }, ease: "power3.out", delay: .4
        })
        gsap.to(times2, .9, {
            css: { "-webkit-transform": "rotate(44.72deg) translateY(-4px) translateX(-3px)", "visibility": "visible" }, ease: "power3.out", delay: .4
        });


    })
    const handleBackClick = () => {
        handleClick();
    }
    return (
        <NavigationMenuWrapper ref={el => navMenuWrapper = el}>
            <BackBtnCross onClick={handleBackClick} >
                <Bar ref={el => times1 = el} times1='true' />
                <Bar ref={el => times2 = el} times2='true' />
            </BackBtnCross>
            <MenuWrapper>
                <StyledNavLink 
                   ref={el => latest = el} 
                   to='/latest'>Latest</StyledNavLink>
                <StyledNavLink 
                   ref={el => discover = el} 
                   to='/discover'>Discover</StyledNavLink>
                <StyledNavLink 
                   ref={el => toprated = el} 
                   to='/top-rated'>Top Rated</StyledNavLink>
                <StyledNavLink 
                   ref={el => popular= el}
                   to='/popular'>Popular</StyledNavLink>
                <StyledNavLink 
                   ref={el=> upcoming= el}
                   to='/upcoming'>Up-Coming</StyledNavLink>
                <StyledNavLink 
                    ref={el=> search = el}
                    to='/search'>
                    <i className="fas fa-search"></i>
                    Search
                </StyledNavLink>

            </MenuWrapper>
        </NavigationMenuWrapper>
    )
}

export default NavigationMenu
