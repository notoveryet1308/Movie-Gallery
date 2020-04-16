import styled from 'styled-components';

export const UpcomingContainer = styled.div `
 width: 100%;
 position: relative;


`
export const UpcomingWrapper = styled.div `
  width: 90%;
  margin: 0 auto;
  margin-top: 2rem;
`
export const UpcomingTextBox = styled.div `
  display: inline-block;
  padding: .1rem .6rem;
  border: 1px solid #F68080;
  border-radius: 5px;
  height: 4rem;
`
export const UpcomingText = styled.h3 `
  font-size: 17px;
  color: #544F4F;
  font-family:'roboto';
  line-height: 3.1rem;
`
export const Tag = styled.div `
  display: flex;
  justify-content: space-between;
  
`
export const RegionWrapper = styled.div `
position: relative;
   display: flex;
   justify-content: flex-start;
   flex-direction: column;
   .text{
       font-size: 1.6rem;
       font-family: 'roboto';
       color: #fff;
       background-color: #0057FF;
       padding: .3rem .7rem;
       border-radius: .5rem;
       margin-bottom: .5rem;
       cursor:pointer;
   }
`
export const CountryCodeBox = styled.div `
  position: absolute;
  width: 100%;
  top: 3rem;
  z-index: 22;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background:rgba(246, 128, 128, .9);
  border-radius: 5px;
  padding: .5rem 0;
  visibility: hidden;
 
`
export const Code = styled.p `
 font-size: 1.4rem;
 font-family: 'roboto';
 color:#fff;
 padding: .3rem .4rem;
 cursor: pointer;
 text-align: center;
 &:hover{
     background-color: rgba(241, 190, 8, 0.5);
 }
`
export const Upcomingmovies = styled.div `
 width: 100%;
 margin: 3rem 0;
 display: flex;
 justify-content: space-between;
 flex-wrap: wrap;
`