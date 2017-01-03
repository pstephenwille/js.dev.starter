import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {types}  from './action.types';
import * as api from '../../api/userApi.rx';
import {beginRequest, requestError, requestComplete} from './user.action.request.status';

export const loadUsers = () => {
    console.log('....ua.loadusers');
    return handleLoadUsers;
};
const handleLoadUsers = (dispatch) => {
    dispatch(beginRequest());

    api.getUsers().subscribe(
        data => {
            console.log('.....api.getusers');
            dispatch(requestComplete());
            dispatch(loadUsersSuccess(data))
        },
        error => {
            dispatch(requestError());
            console.log('...loadUsers error ', error)}
    );
};

const loadUsersSuccess = users => {
    return {type: types.GET_ALL_USERS, users};
};
