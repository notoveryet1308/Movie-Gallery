import styled, {
  css
} from 'styled-components';
import {NavLink} from 'react-router-dom';
export const NavContainer = styled.div `
  width: 90%;
  height: 7rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LogoTextBox = styled.div `
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  cursor: pointer;
`
export const LogoText = styled.h1 `
  font-family: 'roboto';
  text-transform: uppercase;
  line-height: 27px;
  ${props => props.movie && css`
     font-size: 2.1rem;
     font-weight: bold;
     &::after{
         content: '';
         width:80%;
         height: .9rem;
         display: block;
         margin-top: -1.2rem;
         background-color:rgba(247, 128, 128, 0.3);
     }
  `}
  ${props => props.gallery && css`
  font-family: 'roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 2rem;
  &::after{
         content: '';
         width:100%;
         height: 1rem;
         display: block;
         margin-top: -1.2rem;
         background-color:rgba(243, 178, 10, 0.3);
     }
  `}
`

export const SandwichIconBox = styled.div `
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`

export const Bar = styled.div `
  width: 4rem;
  height: .2rem;
  background: #000;
  margin: .3rem 0

  ${props => props.times1 && css`
   height:0;
   border:3px solid #F3B20A;;
   transform: rotate(0);
   margin: 0;
   visibility: hidden;
  `}
  ${props => props.times2 && css`
   height:0;
   border: 3px solid #F78080;
   transform: rotate(0deg) translateY(-4px) translateX(-3px);
   margin: 0;
   visibility:hidden;
   

  `}
`
export const MiddleBar = styled.div `
  width: 4rem;
  height: .2rem;
  background: #F3B20A;
  margin: .3rem 0 .3rem .5rem;

`
export const NavigationMenuWrapper = styled.div `
  position: fixed;
  top: 0;
  left:0;
  width: 0;
  height: 0;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 22;
`
export const BackBtnCross = styled.div `
  position: absolute;
  width: 3.3rem;
  height: 3rem;
  right: 10%;
  top: 3.5rem;
  cursor:pointer;
`
export const MenuWrapper = styled.div `
  position: relative;
  width: 70%;
  height: 60vh;
  /* background: #333; */
  display: flex;
  padding-left: 2rem;
  flex-direction: column;
  justify-content: flex-start;
`

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  text-transform: capitalize;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 2.1rem;
  line-height: 3.1rem;
  margin: .5rem 0;
  visibility: hidden;
  .fas{
    margin: 0 1rem;
    margin-left: 0;
  }
`