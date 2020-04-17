import styled from 'styled-components';

export const DiscoverContainer = styled.div `
 width: 100%;
 height: auto;
 position: relative;
`
export const DiscoverWrapper = styled.div `
 width: 90%;
 margin:3rem auto;
 display: flex;
 flex-direction: column;
 justify-content: center;

`
export const InputBox = styled.div `
 margin: 1rem 0;
 width: 100%;
 height: auto;
 display: flex;
 flex-direction: column;
 justify-content: center;

`
export const YearInput = styled.input `
  
  height: 3rem;
  padding: .3rem .9rem;
  background: #eee;
  border-radius: 5px;
  border: none;
  outline: none;
  font-family:'roboto';
  margin-bottom: 1.5rem;

`
export const RegionInput = styled.input `
  
  margin-bottom: 1rem;
  height: 3rem;
  padding: .3rem .9rem;
  background: #eee;
  border-radius: 5px;
  border: none;
  outline: none;
  font-family:'roboto';
`
export const DataList = styled.datalist`

`
export const DiscoverBtn = styled.button`
  width: 70%;
  margin: 1rem auto;
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
export const Showcase = styled.div`
  width: 100%;
  display: flex;
  margin: 2rem 0%;
  flex-direction:column;


`

export const DiscoverTextBox = styled.div`
  width: 47%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: .1rem .6rem; */
  border: 1px solid #F68080;
  border-radius: 5px;
`
export const DiscoverText = styled.h3`
  font-size: 17px;
  color: #544F4F;
  font-family:'roboto';
  line-height: 3.1rem;
`
export const Discovermovies = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`