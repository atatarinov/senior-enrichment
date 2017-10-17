'use strict'
import React from 'react';
import {render} from 'react-dom';

import Root from './components/Root';

// import { Provider } from 'react-redux'

// import store from './store'
// import Root from './components/Root'

render (
  // <Provider store={store}>
  // </Provider>,
  <Root />,
  document.getElementById('main')
);
