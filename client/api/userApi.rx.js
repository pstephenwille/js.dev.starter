import {load} from './restApi.rx';
import 'rxjs/add/operator/map';

export function getUsers() {
    /* transform data here */
    return load('get', 'users').map(items => {
        "use strict";
        return items.map(transformUser);
    });
}

export function deleteUser(id) {
    return load('delete', `users/${id}`);
}


function transformUser(user) {
    user.woot = 'transformed prop';
    return user;
}
