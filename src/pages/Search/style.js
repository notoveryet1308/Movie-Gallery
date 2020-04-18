import styled from 'styled-components';

export const SearchContainer = styled.div `
  width: 100%;
  position: relative;
`
export const SearchWrapper = styled.div `
 width: 90%;
 margin: 2rem auto;
 display: flex;
 flex-direction: column;
 justify-content: center;
`
export const MovieInput = styled.input `
 width: 100%;
 height: 3.5rem;
 padding: .3rem .7rem;
 border:none;
 background:#eee;
 border-radius: 5px;
 outline: none;
 font-family: 'roboto';
`
export const SearchBtn = styled.button`
  width: 70%;
  margin: 2rem auto;
  height: 3.5rem;
  text-align: center;
  border: none;
  background: rgba(241, 190, 8, 0.71);
  color: #000;
  padding: .4rem 1rem;
  border-radius: 12rem;
  font-size: 1.7rem;
  font-family: 'roboto';
  cursor:pointer;
  &:hover{
    background: rgba(241, 190, 8, 0.5);
  }
`
export const SearchMovies = styled.div`
  width: 100%;
  margin: 2rem 0;
  display:flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const Space = styled.div`
  width: 100%;
  height: 40vh;
`
export const NothingFound = styled.div`
 width: 100%;
 height: 40vh;
 display: flex;
 justify-content: center;
 align-items: center;
 .none{
     color: #E74816;
     font-size: 2rem;
     font-family: 'roboto';
     font-weight: bold;
 }
` 