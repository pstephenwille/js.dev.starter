import 'rxjs/add/operator/mergeMap';
import {types}  from '../actions/action.types';

export const users = (state = [], action) => {
    switch(action.type) {
        case types.GET_ALL_USERS:
            return action.users;
        default:
            return state;
    }
};

export const deleteUser = (state = [], action) =>{
    switch(action.type) {
        case types.DELETE_USER:
            return action.users;
        default:
            return state;
    }
}
