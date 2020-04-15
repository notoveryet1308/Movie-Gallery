import React from 'react';
import { FooterContainer, FooterWrapper, Section, TMDBLogo, TextAPI, FooterLink, SocialHandle } from './style';
import TMDB from '../../img/tmdb-logo.svg';
function Footer() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Section>
                    <TMDBLogo src={TMDB} alt='TMDB_LOGO' />
                    <TextAPI>THE MOVIE DATABASE API</TextAPI>
                </Section>
                <Section>
                    <FooterLink to='/about-me'>About me</FooterLink>
                    <FooterLink to='/contact-me'>Contact me</FooterLink>
                    <FooterLink to='/social'>Social handle</FooterLink>
                    <Section socilaBox='true'>
                        <SocialHandle>
                            <i className="fab fa-facebook-f"></i>
                        </SocialHandle>
                        <SocialHandle>
                            <i className="fab fa-youtube"></i>
                        </SocialHandle>
                        <SocialHandle>
                            <i className="fab fa-instagram"></i>
                        </SocialHandle>
                    </Section>
                </Section>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
