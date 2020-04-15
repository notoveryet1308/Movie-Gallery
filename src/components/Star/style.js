import styled from 'styled-components';
export const RatingContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: flex-start;
  align-items:center;
  font-size: 1.3rem;
  span{
    font-family: 'roboto';
    font-weight: bold;
    color: #39BE27;
    font-size: 2.5rem;
  }

`
export const FullStar = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  background: #F1BE08;

`