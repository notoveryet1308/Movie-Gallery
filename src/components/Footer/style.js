import styled, {
    css
} from 'styled-components';
import {
    Link
} from 'react-router-dom';
export const FooterContainer = styled.div `
  width: 100%;
  height: 20vh;
  background-color:rgba(241, 190, 8, 0.76);
  padding-top: 2rem;
`

export const FooterWrapper = styled.div `
  width: 90%;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

`
export const Section = styled.div `
width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: .5rem;
  ${props => props.socilaBox && css`
     width: 100%;
     display: flex;
     justify-content: flex-start;
     flex-direction: row;
  `}
`

export const TMDBLogo = styled.img `
  width: 10rem;
  height: auto;
  margin-bottom: 1rem;
`
export const TextAPI = styled.p `
  font-size: 1.1rem;
  font-family:'roboto';
  font-weight: bold;
`
export const FooterLink = styled(Link)
`
  text-decoration: none;
  font-size: 1.2rem;
  font-family: 'roboto';
  color: #000;
  &:hover{
     transition: all 300ms ease;
      font-weight: bold;
  }

`
export const SocialHandle = styled.div `
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: .5rem;
  cursor:pointer;
  .fab{
      color: #fff;
      font-size: 1.7rem;
  }
  &:hover{
      transition: all 300ms ease;
      background: #fff;
      .fab{
          color: #000;
      }
  }

`