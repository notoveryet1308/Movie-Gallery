import styled, {
    keyframes
} from 'styled-components';

const spin = keyframes `
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg);}
  `
export const LoadingContainer = styled.div `
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .load{
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      border: 5px solid #eee;
      border-top: 5px solid #F78080;
      animation: ${spin} 2s linear infinite; 
  }
`
