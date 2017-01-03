import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import * as api from '../../api/userApi.rx';
import {ua} from './index'

export const deleteUser = (id) => {
    return handleDelete.bind(null, id);
};

const handleDelete = (id, dispatch) => {
    api.deleteUser(id).subscribe(
        data => {
            dispatch(ua.loadUsers())
        },
        error => console.log('del user error ', error)
    )
};

