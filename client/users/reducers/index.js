import {combineReducers} from 'redux';
import {users, deleteUser} from './user.reducer';
import requestsInProgress from './request.status.reducer';

const rootReducer = combineReducers({
    users,
    deleteUser,
    requestsInProgress
});

export default rootReducer;
