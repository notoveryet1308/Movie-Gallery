import styled, {
    createGlobalStyle
} from 'styled-components';

export const GlobalStyle = createGlobalStyle `
 *{ 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-size: 0.625rem;
  }
`

export const AppContainer = styled.div`
   width: 100%;
   position: relative;
   overflow: hidden;
`