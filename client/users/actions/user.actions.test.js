import expect, {createSpy, spyOn, isSpy} from 'expect'
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import * as td from 'testdouble';
import * as Rx from 'rxjs';
import {TestScheduler, next, complete} from '@kwonoj/rxjs-testscheduler-compat';
import sinon from 'sinon';

/* custom */
import {ua} from './index';
import * as api from '../../api/userApi.rx';
// import {loadUsers} from './user.action.load.users';
// import {deleteUser} from './user.action.delete.user';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('User Actions', () => {
    const scheduler = new TestScheduler();
    const observer = scheduler.createObserver();
    const expectedActions = {};
    let subject;

    beforeEach(() => {});
    afterEach(() => { nock.cleanAll(); });

    it('deleteUser exists, and calls dispatch(loadUser)', (done) => {
        /* expect.spy */
        let delU_spy = spyOn(api, 'deleteUser').andCall(() => {
            return Rx.Observable.interval(0);
        });
        let loadU_spy = spyOn(ua, 'loadUsers').andCall(() => {
            expect(delU_spy.calls.length).toEqual(1);
            expect(loadU_spy.calls.length).toEqual(1);
            done();
        });

        let store = mockStore({users: []}, expectedActions, done);
        store.dispatch(ua.deleteUser('x'));
    });

});
