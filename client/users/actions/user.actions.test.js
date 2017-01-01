import expect from 'expect';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import {ColdObservable} from 'rxjs/testing/ColdObservable'
import {TestScheduler} from 'rxjs/testing/TestScheduler'
import * as td from 'testdouble';

import * as ua from './user.action.load.users';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('User Actions', () => {
    let store = mockStore();
    let loadUsers, dispatch, thunkmock, deleteUserAction, load, api;
    beforeEach(() => {
        api = {
            deleteUser:td.function('deleteUser'),
            loadUsers: td.function('loadUsers')
        };
        loadUsers = td.function(ua.loadUsers);
    });
    afterEach(() => {
        nock.cleanAll();
    });

    it('deleteUse exists, and calls dispatch(loadUser)', (done) => {
// console.log('......ColdObservable ', ColdObservable);
// console.log('......TestScheduler ', TestScheduler);
        let observable = new ColdObservable(null, null);
        td.when(api.deleteUser()).thenReturn(()=>observable);
        td.when(api.loadUsers()).thenReturn('xxxxx loadusers xxxxx');

        ua.deleteUser('xxx');
    });

    it('runs twice', () => {
        expect(true);
    });
});
