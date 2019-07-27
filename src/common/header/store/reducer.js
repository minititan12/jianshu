import { actionTypes } from './';
import { fromJS } from 'immutable';


//把defaultState变成一个immutable对象(不可变对象)
const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1 
})

export default function reducer(state = defaultState, action) {
    switch(action.type){
        case actionTypes.INPUT_FOCUS:
            return state.set("focused",true);
        case actionTypes.INPUT_BLUR:
            return state.set("focused",false);
        case actionTypes.LIST_DATA_UPDATE:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
        case actionTypes.SWITCH_INFO:
            return state.set("page",action.page);
        case actionTypes.MOUSE_ENTER:
            return state.set("mouseIn",true);
        case actionTypes.MOUSE_LEAVE:
            return state.set("mouseIn",false);
        default:
            return state;
    }
}