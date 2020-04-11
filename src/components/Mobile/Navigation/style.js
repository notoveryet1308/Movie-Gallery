import styled, {
    css
} from 'styled-components';

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

`
export const MiddleBar = styled.div`
  width: 4rem;
  height: .2rem;
  background: #F3B20A;
  margin: .3rem 0 .3rem .5rem;

`
export const NavigationMenuWrapper = styled.div`
  width: 0;
  height: 0;
  background: #000;
`