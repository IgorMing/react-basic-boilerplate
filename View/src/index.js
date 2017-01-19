import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import App from './containers/app';
import reducers from './reducers';

import './styles/style.scss';

const store = createStore(reducers, applyMiddleware(thunk));

render(<Provider store={store}>
    <App />
</Provider>, document.querySelector('#app'));
