import 'rxjs/add/operator/mergeMap';

export const users = (state = [], action) => {
    switch(action.type) {
        case 'GET_ALL_USERS':
            return action.users;
        default:
            return state;
    }
};

export const deleteUser = (state = [], action) =>{
    switch(action.type) {
        case 'DELETE_USER':
            console.log('......yup');
            return [action.users];
        default:
            return state;
    }
}
