import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Example from './example/view';
import reducers from './reducers';

const store = createStore(reducers);

render(
  <Provider store={store}>
    <Example />
  </Provider>,
  document.querySelector('#app')
);
