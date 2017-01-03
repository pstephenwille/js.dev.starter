import {types} from './action.types';

export const reqStatus = {
    beginRequest : () => ({type: types.BEGIN_REQUEST}),
    requestError : (error) => ({type: types.REQUEST_ERROR}, error),
    requestComplete : () => ({type: types.REQUEST_COMPLETE})
}
