import {getUsers} from '../../api/userApi.rx';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

const loadUsersSuccess = users =>{
    return {type: 'GET_ALL_USERS', users}
};

export function loadUsers() {
    return function(dispatch) {
        getUsers().subscribe(
            data=>dispatch(loadUsersSuccess(data)),
            error=>console.log('...loadusers error ', error)
        );
    };
};

