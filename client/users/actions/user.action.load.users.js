import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {types}  from './action.types';
import * as api from '../../api/userApi.rx';

export const loadUsers = () => {
    return handleLoadUsers;
};
const handleLoadUsers = (dispatch) => {
    api.getUsers().subscribe(
        data => dispatch(loadUsersSuccess(data)),
        error => console.log('...loadUsers error ', error)
    );
};

const loadUsersSuccess = users => {
    return {type: types.GET_ALL_USERS, users};
};
