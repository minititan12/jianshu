import { fromJS } from 'immutable';
import { actionTypes } from './index';


//把defaultState变成一个immutable对象(不可变对象)
const defaultState = fromJS({
    login: false,
})

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_LOGIN:
            return state.set("login",action.value);
        case actionTypes.LOGOUT:
            return state.set("login",action.value);
        default:
            return state;
    }
}