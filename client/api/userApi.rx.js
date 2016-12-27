import {load} from './restApi.rx';

export const getUsers = ()=> {
    /* transform data here */
    return load('get', 'users').map(transformUser);
};

export const deleteUser = id => {
    return load('delete', `users/${id}`);
};

const transformUser = users =>{
    return users.map((user, index) => {
        user.woot = `transformed prop ${index}`;
        return user;
    });
};
