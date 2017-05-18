import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import reducers from './reducers';
import NewExample from './newExample/view';

const store = createStore(reducers);

render(
  <Provider store={store}>
    <NewExample />
  </Provider>,
  document.querySelector('#app'),
);
