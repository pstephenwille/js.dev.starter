import {types} from './action.types';

export const beginRequest = () => ({type: types.BEGIN_REQUEST});
export const requestError = () => ({type: types.REQUEST_ERROR});
export const requestComplete = () => ({type: types.REQUEST_COMPLETE});
