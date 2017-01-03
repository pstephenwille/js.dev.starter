import {types} from '../actions/action.types';
import initState from './initial.state.shape';

function actionTypeEndsInSuccess(type) {
    return type.match(/_COMPLETE$/);
}

export default function requestStatusReducer(state = initState.requestsCount, action) {
    if(action.type == types.BEGIN_REQUEST) {
        return ++state;
    } else if(action.type.match(/_ERROR$/) || action.type.match(/_COMPLETE$/)) {
        return --state;
    }

    return state;
}
