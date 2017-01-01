import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {types}  from './action.types';
import * as api from '../../api/userApi.rx';
import {loadUsers} from './user.action.load.users'

export const deleteUser = (id) => {
    return handleDelete.bind(null, id);
};

const handleDelete = (id, dispatch) => {
    api.deleteUser(id).subscribe(
        data => {
            dispatch(loadUsers())
        },
        error => console.log('del user error ', error)
    )
};
const deleteUserSuccess = (id) => ({type: types.DELETE_USER, id: id});

