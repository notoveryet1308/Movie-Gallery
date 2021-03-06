import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyle} from './GlobalStyle';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './redux/store';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <GlobalStyle/>
      </BrowserRouter>
    </Provider>
     
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();


