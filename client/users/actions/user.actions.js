import * as api from '../../api/userApi.rx';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

export const deleteUser = (id) => {
    return function(dispatch){
        api.deleteUser(id).subscribe(
            data=>{
                console.log('..data', data);
                dispatch(loadUsers())},
            error=>console.log('del user error ', error)
        )
    }
};
const deleteUserSuccess = (id) => ({type: 'DELETE_USER', id: id});

export function loadUsers() {
    return function(dispatch) {
        api.getUsers().subscribe(
            data=>dispatch(loadUsersSuccess(data)),
            error=>console.log('...loadusers error ', error)
        );
    };
};
const loadUsersSuccess = users =>{
    return {type: 'GET_ALL_USERS', users}
};
