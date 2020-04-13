import React from 'react'
import { HeroContainer, CoverInfo, TextInfo, TextH1, MiniGallery, View } from './style';


function Hero() {
    return (
        <HeroContainer>
            <CoverInfo>
                <TextInfo>
                    <TextH1 italic='true  '>Everything.</TextH1>
                    <TextH1 yellowish='true  '>ABOUT.</TextH1>
                    <TextH1>MOVIES.</TextH1>
                </TextInfo>
                <MiniGallery>
                    <View  img1='true'/>
                    <View  img2='true'/>
                    <View  img3='true'/>
                    <View  img4='true'/>

                </MiniGallery>
            </CoverInfo>

        </HeroContainer>
    )
}

export default Hero;
