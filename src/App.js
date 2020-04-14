import React from 'react';
import {AppContainer} from './GlobalStyle';
import {Switch, Route} from 'react-router-dom';
import Homepage from './pages/Home/Homepage';
import Moviedetail from './pages/Moviedetail/Moviedetail';

function App() {
  return (
    <AppContainer>
      <Switch>
         <Route exact path='/' component={Homepage}/>
         <Route path='/detail/:moviename' component={Moviedetail}/>
      </Switch>
    </AppContainer>

  );
}

export default App;
