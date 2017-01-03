import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {types}  from './action.types';
import * as api from '../../api/userApi.rx';
import {reqStatus} from './user.action.request.status';
import {ua} from './index'

export const loadUsers = () => {
    return handleLoadUsers;
};
const handleLoadUsers = (dispatch) => {
    dispatch(reqStatus.beginRequest());
    api.getUsers().subscribe(
        data => {
            dispatch(reqStatus.requestComplete());
            dispatch(ua.loadUsersSuccess(data))
        },
        error => {
            dispatch(reqStatus.requestError(error));
        }
    );
};

export const loadUsersSuccess = users => {
    return {type: types.GET_ALL_USERS, users};
};
