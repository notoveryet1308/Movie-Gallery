import React, {lazy, Suspense} from 'react';
import {AppContainer} from './GlobalStyle';
import {Switch, Route, Redirect} from 'react-router-dom';
import Homepage from './pages/Home/Homepage';
import Moviedetail from './pages/Moviedetail/Moviedetail';
import {useSelector} from 'react-redux';

// import Popular from './pages/Popular/Popular';
// import TopRated from './pages/TopRated/TopRated';
// import Upcoming from './pages/Upcoming/Upcoming';
// import Discover from './pages/Discover/Discover';
// import Search from './pages/Search/Search';

const Popular = lazy(() => import('./pages/Popular/Popular'));
const TopRated = lazy(() => import('./pages/TopRated/TopRated'))
const Upcoming = lazy(() => import('./pages/Upcoming/Upcoming'))
const Discover = lazy(() => import('./pages/Discover/Discover'))
const Search = lazy(() => import('./pages/Search/Search'))

function App() {
  const currMovieDetail = useSelector(state=> state.moviedetail.movie)
  return (
    <AppContainer>
      <Switch>
        <Suspense fallback={<Loading />}>
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
        </Suspense>
        

      </Switch>
    </AppContainer>

  );
}

export default App;


const Loading = ()=>{
  return(
    <div>
      Loading....
    </div>
  )
}