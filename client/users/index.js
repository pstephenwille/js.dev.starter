import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';/* wires up store to React components */
import configureStore from './store/configure.store';
import {loadUsers} from './actions/user.actions';
import App from './user.app';

const userStore = configureStore();
userStore.dispatch(loadUsers());

render(
    <Provider store={userStore}>
        <App />
    </Provider>,
    document.getElementById('users')

);

