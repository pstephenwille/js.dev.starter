import { combineReducers } from 'redux';
import {users, deleteUser} from './user.reducer';

const rootReducer = combineReducers({
    users,
    deleteUser
});

export default rootReducer;
