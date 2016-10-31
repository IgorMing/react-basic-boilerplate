import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';

import App from './containers/app';

const store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);
