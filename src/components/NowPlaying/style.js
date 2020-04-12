import styled from 'styled-components';

export const NowPlayingContainer = styled.div`
  width: 90%;
  margin: 1rem auto;
`

export const NowPlayigTextBox = styled.div`
  display: inline-block;
  padding: .1rem .6rem;
  border: 1px solid #F68080;
  border-radius: 5px;
`
export const NowPlayingText = styled.h3`
  font-size: 17px;
  color: #544F4F;
  font-family:'roboto';
  line-height: 3.1rem;
`
export const Posters = styled.div`
  width: 100%;
  height: auto;
  margin: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  /* display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template: auto;
  grid-gap: 2rem; */
`