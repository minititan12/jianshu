import { combineReducers } from 'redux-immutable';
import headerReducer from '../common/header/store/reducer';
import homeReducer from '../pages/home/store/reducer';
import detailReducer from '../pages/detail/store/reducer';
import loginReducer from '../pages/login/store/reducer';

//把reducer中生成的state变成一个immutable对象(不可变对象)
const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer
})

export default reducer;