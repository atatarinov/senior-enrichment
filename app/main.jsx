'use strict';
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

import Home from './components/Home';

// import { Provider } from 'react-redux'

// import store from './store'
// import Root from './components/Root'

render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>,
  document.getElementById('main')
);
