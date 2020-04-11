import React, { useState } from 'react';
import { NavContainer, LogoTextBox, LogoText, SandwichIconBox, Bar, MiddleBar } from './style';
import NavigationMenu from './NavigationMenu';

function Navigation() {
    const [barClicked, setBarClicked] = useState(false);
    return (
        <>
            {!barClicked ?
                <NavContainer>
                    <LogoTextBox>
                        <LogoText movie='true'>Movie</LogoText>
                        <LogoText gallery='true'>Gallery</LogoText>
                    </LogoTextBox>
                    <SandwichIconBox onClick={() => setBarClicked(true)}>
                        <Bar />
                        <MiddleBar />
                        <Bar />
                    </SandwichIconBox></NavContainer> :
                <NavigationMenu />
            }
        </>
    )
}

export default Navigation
