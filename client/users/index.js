import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';/* wires up store to React components */
import configureStore from './store/configure.store';
import {ua} from './actions';
import App from './user.app';

const userStore = configureStore();
userStore.dispatch(ua.loadUsers());

render(
    <Provider store={userStore}>
        <App />
    </Provider>,
    document.getElementById('users')

);

