import React from 'react';
import {AppContainer} from './GlobalStyle';
import {Switch, Route} from 'react-router-dom';
import Homepage from './pages/Home/Homepage';

function App() {
  return (
    <AppContainer>
      <Switch>
         <Route exact path='/' component={Homepage}/>
      </Switch>
    </AppContainer>

  );
}

export default App;
