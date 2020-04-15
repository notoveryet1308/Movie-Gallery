import React, { useState } from 'react';
import { NavContainer, LogoTextBox, LogoText, SandwichIconBox, Bar, MiddleBar } from './style';
import NavigationMenu from './NavigationMenu';
import { withRouter } from 'react-router-dom';

function Navigation({history}) {
    const [barClicked, setBarClicked] = useState(false);
    const handleClick = ()=>{
        setBarClicked(!barClicked);
    }
    return (
        <>
            {!barClicked ?
                <NavContainer>
                    <LogoTextBox onClick={()=> history.push('/')}>
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

export default withRouter(Navigation)
