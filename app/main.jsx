'use strict'
import React from 'react';
import {render} from 'react-dom';

import Home from './components/Home';

// import { Provider } from 'react-redux'

// import store from './store'
// import Root from './components/Root'

render (
  // <Provider store={store}>
  // </Provider>,
  <Home />,
  document.getElementById('main')
);
