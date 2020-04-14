import styled from 'styled-components';

export const MoviedeatilContainer = styled.div `
  position: relative;

`

export const MainPoster = styled.img `
  width: 100%;
  height: 50vh;
`
export const MovieInfo = styled.div `
  width:90%;
  margin: 1.5rem auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const MovieTitle = styled.h1 `
  font-family: 'roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 29px;
  letter-spacing: 0.04em;
  color: #242424;
  display: inline-block;
`

export const Plot= styled.p`
width: 80%;
height: auto;
margin: .5rem 0;
margin-bottom: 1.5rem;
 font-family: 'roboto';
font-style: normal;
font-weight: normal;
font-size: 15px;
color: #000000;
`
export const Info = styled.div`

display: flex;
justify-content: flex-start;
align-items: center;
 .label{
    font-family: 'roboto';
     font-size: 1.7rem;
    color: #3C3A3A;
 }
 .data{
     font-size: 1.5rem;
     font-weight: bold;
     font-family: 'roboto';
     margin-left: .5rem;
 }
`
export const SimilarMovieTextBox = styled.div`
  
  display: inline-block;
  padding: .1rem .6rem;
  border: 1px solid #F68080;
  border-radius: 5px;
`
export const SimilarMovieText = styled.h3`
  font-size: 17px;
  color: #544F4F;
  font-family:'roboto';
  line-height: 3.1rem;
`
export const SimilarMovies = styled.div`
  width: 90%;
  height: auto;
  margin: 1rem auto;
  position: relative;
`
export const Movies = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`