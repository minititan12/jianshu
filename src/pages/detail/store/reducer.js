import { fromJS } from 'immutable';
import { actionTypes } from './index';


//把defaultState变成一个immutable对象(不可变对象)
const defaultState = fromJS({
    title: "",
    content: ""
})

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.GET_DETAIL:
            return state.merge({
                title: fromJS(action.title),
                content: fromJS(action.content)
            })
        default:
            return state;
    }
}