import React, { useRef, useEffect } from 'react';
import { NavigationMenuWrapper } from './style';
import { gsap, TimelineLite } from 'gsap';
let tl;
function NavigationMenu() {
    tl = new TimelineLite();
    let navMenuWrapper = useRef(null);
    useEffect(() => {
    tl.to(navMenuWrapper, 0.8, {visibility:'vivible', width: `${100}%`, height:`${100}vh`, ease: "power3.out", delay: .4})
    })
    return (
        <NavigationMenuWrapper ref={el => navMenuWrapper = el}>

        </NavigationMenuWrapper>
    )
}

export default NavigationMenu
