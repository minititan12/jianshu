import { GET_MORE_LIST, SWITCH_WRITER_PAGE, GET_WRITER_TOTAL_PAGE, CODE_MOUSE_ENTER, CODE_MOUSE_LEAVE, GET_ARTICLE_LIST, GET_WRITER_LIST } from './actionTypes';
import axios from 'axios';

export const getCodeMouseEnterAction = () => {
    return {
        type: CODE_MOUSE_ENTER
    }
}

export const getCodeMouseLeaveAction = () => {
    return {
        type: CODE_MOUSE_LEAVE
    }
}

export const getArticleList = () => {
    return (dispatch) => {
        axios.get("https://easy-mock.com/mock/5d3bc54f8f4f4547b18e7682/api/articleList")
            .then((res) => {
                let articleList = res.data.list;
                const action = {
                    type: GET_ARTICLE_LIST,
                    articleList
                }
                dispatch(action);
            })
            .catch((err) => {
                console.log('err');
            })
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get("https://easy-mock.com/mock/5d3bc54f8f4f4547b18e7682/api/moreList?page="+ page)
            .then((res) => {
                let moreList = res.data.list;
                const action = {
                    type: GET_MORE_LIST,
                    moreList,
                    page
                }
                dispatch(action);
            })
            .catch((err) => {
                console.log("err");
            })
    }
}

export const getWriteList = () => {
    return (dispatch) => {
        axios.get("https://easy-mock.com/mock/5d3bc54f8f4f4547b18e7682/api/writerList")
            .then((res) => {
                let writerList = res.data.users;
                const action = {
                    type: GET_WRITER_LIST,
                    writerList
                }
                dispatch(action);
                let totalPage = Math.ceil(writerList.length / 5);
                const pageAction = {
                    type: GET_WRITER_TOTAL_PAGE,
                    totalPage
                }
                dispatch(pageAction);
            })
            .catch((err) => {
                console.log('err');
            })
    }
}

export const switchWriterPage = (page) => {
    return {
        type: SWITCH_WRITER_PAGE,
        page
    }
}