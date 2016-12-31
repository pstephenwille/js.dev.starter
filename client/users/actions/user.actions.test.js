import expect from 'expect';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import * as td from 'testdouble';

import * as act from './user.actions';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('User Actions', () => {
    let store = mockStore();
    let loadUsers, dispatch;

    beforeEach(() => {
        loadUsers = td.function(act.loadUsers);
        dispatch = td.function(store.dispatch);
    });

    it('deleteUse exists, and calls dispatch(loadUser)', () => {
        act.deleteUser('x');
        console.log('...it ');
        td.verify(dispatch());
        expect(true);
    });

    it('runs twice', ()=> {
        expect(true);
    });
});
