import React from 'react';
import {AppContainer} from './GlobalStyle';
import {Switch, Route, Redirect} from 'react-router-dom';
import Homepage from './pages/Home/Homepage';
import Moviedetail from './pages/Moviedetail/Moviedetail';
import {useSelector} from 'react-redux';
import Popular from './pages/Popular/Popular';
import TopRated from './pages/TopRated/TopRated';
import Upcoming from './pages/Upcoming/Upcoming';
import Discover from './pages/Discover/Discover';
import Search from './pages/Search/Search';


function App() {
  const currMovieDetail = useSelector(state=> state.moviedetail.movie)
  return (
    <AppContainer>
      <Switch>
         <Route exact path='/' component={Homepage}/>
         <Route 
            path='/detail/:moviename' 
            render={()=> 
              currMovieDetail===null ? <Redirect to='/'/>: <Moviedetail/>}/>
          <Route exact path='/popular' component={Popular}/>
          <Route exact path='/top-rated' component={TopRated}/>
          <Route exact path='/upcoming' component={Upcoming}/>
          <Route exact path='/discover' component={Discover}/>
          <Route exact path='/search' component={Search}/>

      </Switch>
    </AppContainer>

  );
}

export default App;
