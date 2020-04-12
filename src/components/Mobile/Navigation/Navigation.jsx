import React, { useState } from 'react';
import { NavContainer, LogoTextBox, LogoText, SandwichIconBox, Bar, MiddleBar } from './style';
import NavigationMenu from './NavigationMenu';

function Navigation() {
    const [barClicked, setBarClicked] = useState(false);
    const handleClick = ()=>{
        setBarClicked(!barClicked);
    }
    return (
        <>
            {!barClicked ?
                <NavContainer>
                    <LogoTextBox>
                        <LogoText movie='true'>Movie</LogoText>
                        <LogoText gallery='true'>Gallery</LogoText>
                    </LogoTextBox>
                    <SandwichIconBox onClick={handleClick}>
                        <Bar />
                        <MiddleBar />
                        <Bar />
                    </SandwichIconBox></NavContainer> :
                <NavigationMenu handleClick={handleClick}/>
            }
        </>
    )
}

export default Navigation
