import styled from 'styled-components';

export const MoviePosterContainer = styled.div `
   position: relative;
   width: 47%;
   height: 20rem;
   background: #eee;
   margin-bottom: 2rem;
   border-radius: 5px;
   cursor:pointer;  
`
export const PosterImage = styled.div`
  width: 100%;
  height: 20rem;
`
export const Image = styled.img`
 width: 100%;
 height: 100%;
 border-radius: 5px;
`
export const RatingBox = styled.div`
 position: absolute;
 top: .5rem;
 left: .5rem;
 width: 3rem;
 height: 3rem;
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: #F1BE08;
 border-radius: 2px;
 span{
     font-size: 1.7rem;
     font-family: 'roboto';

 }
`