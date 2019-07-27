import { fromJS } from 'immutable';
import { actionTypes } from './index';


//把defaultState变成一个immutable对象(不可变对象)
const defaultState = fromJS({
    codeMouseIn: false,
    articleList: [],
    articlePage: 1,
    writerList: [],
    writerPage: 1,
    writerTotalPage: 1
})

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CODE_MOUSE_ENTER:
            return state.set("codeMouseIn", true);
        case actionTypes.CODE_MOUSE_LEAVE:
            return state.set("codeMouseIn", false);
        case actionTypes.GET_ARTICLE_LIST:
            return state.set("articleList", fromJS(action.articleList));
        case actionTypes.GET_MORE_LIST:
            return state.merge({
                articleList: state.get('articleList').concat(fromJS(action.moreList)),
                articlePage: action.page
            })
        case actionTypes.GET_WRITER_LIST:
            return state.set("writerList", fromJS(action.writerList));
        case actionTypes.GET_WRITER_TOTAL_PAGE:
            return state.set("writerTotalPage", action.totalPage);
        case actionTypes.SWITCH_WRITER_PAGE:
            return state.set("writerPage", action.page);
        default:
            return state;
    }
}