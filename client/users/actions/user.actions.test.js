import expect, {createSpy, spyOn, isSpy} from 'expect'
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as Rx from 'rxjs';

/* custom */
import {ua} from './index';
import * as api from '../../api/userApi.rx';
import {reqStatus} from './user.action.request.status';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('User Actions:', () => {
    let delU_spy, loadU_spy, getU_spy, beginReq_spy, reqComplete_spy, reqError_spy;

    beforeEach(() => {
        beginReq_spy = spyOn(reqStatus, 'beginRequest').andReturn({type: 'mock_begin_req'});
        reqComplete_spy = spyOn(reqStatus, 'requestComplete').andReturn({type: 'mock_req_complete'});
        reqError_spy = spyOn(reqStatus, 'requestError').andReturn({type: 'mock_req_error'});
        delU_spy = spyOn(api, 'deleteUser');
        loadU_spy = spyOn(ua, 'loadUsers');
        getU_spy = spyOn(api, 'getUsers');
    });
    afterEach(() => {
        delU_spy.restore();
        loadU_spy.restore();
        getU_spy.restore();
    });

    it('`deleteUser` dispatches `loadUser`', (done) => {
        let store = mockStore({users: []}, {}, done);

        /* expect.spy */
        delU_spy.andReturn(Rx.Observable.interval(0));
        loadU_spy.andCall(() => {
            expect(delU_spy.calls.length).toEqual(1);
            expect(loadU_spy.calls.length).toEqual(1);
            done();
        });

        store.dispatch(ua.deleteUser('x'));
    });

    it('`loadUsers` dispatches `beginRequest` then calls `api.getUsers`', (done) => {
        loadU_spy.restore();
        getU_spy.andReturn(Rx.Observable.from([{users: 'mock_users'}]));

        let store = mockStore({users: []}, {}, done);
        let loadUSuccess = spyOn(ua, 'loadUsersSuccess').andCall((data) => {
            expect(api.getUsers.calls.length).toEqual(1);
            expect(beginReq_spy.calls.length).toEqual(1);
            expect(reqComplete_spy.calls.length).toEqual(1);
            expect(ua.loadUsersSuccess.calls.length).toEqual(1);
            expect(loadUSuccess).toHaveBeenCalledWith({users: 'mock_users'});
            done();
        });

        store.dispatch(ua.loadUsers());
    });

    it('`loadUsers` handles errors', (done) => {
        loadU_spy.restore();
        getU_spy.andCall(() => {
            return Rx.Observable.throw(new Error('bad request'));
        });
        reqError_spy.andCall((error) => {
            expect(reqError_spy).toHaveBeenCalledWith(error);
            done();
        });

        let store = mockStore({users: []});

        store.dispatch(ua.loadUsers());

    });
});
