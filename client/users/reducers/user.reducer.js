import 'rxjs/add/operator/mergeMap';

export const users = (state = [], action) => {
    switch(action.type) {
        case 'GET_ALL_USERS':
            return action.users;
        default:
            return state;
    }
};
