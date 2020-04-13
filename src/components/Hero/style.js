import styled, {
  css
} from 'styled-components';
import hero from '../../img/heroposter.jpg';
import idiot from '../../img/idiot.jpg';
import inception from '../../img/inception.jpg';
import spidermanverse from '../../img/spidermanverse.jpg'
import avenger from '../../img/avenger.jpg'



export const HeroContainer = styled.div `
  position: relative;
  width: 100%;
  margin: 2rem 0;
  height: 35vh;
  background-image: linear-gradient(rgba(14, 13, 13, 0.64), rgba(14, 13, 13, 0.64)), url(${hero});
  background-size: cover;
  background-position: center;
`
export const Cover = styled.div `
  position: absolute;
  width: 100%;
  height: 100%;
  
`
export const CoverInfo = styled.div `
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
export const TextInfo = styled.div `
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 4.5rem;
`
export const TextH1 = styled.h1 `
  font-family: 'roboto';
  font-size: 2.5rem;
  margin: .2rem 0;
  font-weight: bold;
  line-height: 2.9rem;
  text-transform: uppercase;
  color: #fff;
  ${props=> props.italic && css`
    font-style: italic;
  `}
  ${props => props.yellowish && css`
    color:#F3B20A;
  `}
`

export const MiniGallery = styled.div `
  display:grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
`
export const View = styled.img `
 object-fit: cover;
 width: 100%;
 background-size: cover;
 background-position: top;
 ${props => props.img1 && css`
 width: 100%;
 height: 100%;
    grid-column: 1/5;
    grid-row: 5/9;
    background-image:linear-gradient(rgba(245, 248, 101, 0.3), rgba(245, 248, 101, 0.4)), url(${idiot});
    
 `}
 ${props => props.img2 && css`
 width: 100%;
 height: 100%;
    grid-column: 5/9;
    grid-row: 3/7;
    background-image:linear-gradient(rgba(255, 96, 96, 0.47), rgba(255, 96, 96, 0.47)), url(${inception});
    
 `}
 ${props => props.img3 && css`
 width: 100%;
 height: 100%;
    grid-column: 5/9;
    grid-row: 7/11;
    background-image:linear-gradient(rgba(37, 182, 191, 0.31), rgba(37, 182, 191, 0.31)), url(${spidermanverse});
    
 `}
 ${props => props.img4 && css`
 width: 100%;
 height: 100%;
    grid-column: 9/13;
    grid-row: 5/9;
    background-image:linear-gradient(rgba(37, 182, 191, 0.31), rgba(37, 182, 191, 0.31)), url(${avenger});
    
 `}

`