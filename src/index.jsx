import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import App from './containers/app';
import todoApp from './reducers';

import style from './styles/style.scss';

const store = createStore(todoApp, applyMiddleware(thunk));

render(<Provider store={store}>
    <App />
</Provider>, document.querySelector('#app'));
