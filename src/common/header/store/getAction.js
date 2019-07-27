import { MOUSE_LEAVE, MOUSE_ENTER, INPUT_FOCUS, INPUT_BLUR, LIST_DATA_UPDATE, SWITCH_INFO } from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';

const getListPostAction = (data) => {
    var totalPage = Math.ceil(data.length / 10);
    return {
        type: LIST_DATA_UPDATE,
        data: fromJS(data),
        totalPage: totalPage
    }
}

export const getMouseEnterAction = () => {
    return {
        type: MOUSE_ENTER
    }
}

export const getMouseLeaveAction = () => {
    return {
        type: MOUSE_LEAVE
    }
}

export const getSwitchInfoAction = (page) => {
    return {
        type: SWITCH_INFO,
        page
    }
}

export const getInputFocusAction = () => {
    return {
        type: INPUT_FOCUS
    }
}

export const getInputBlurAction = () => {
    return {
        type: INPUT_BLUR
    }
}

export const getListData = () => {
    return (dispatch) => {
        axios.get('https://easy-mock.com/mock/5d3bc54f8f4f4547b18e7682/api/headerList')
        .then((res) => {
            dispatch(getListPostAction(res.data.headerList));
        }).catch((err) => {
            console.log('err');
        })
    }
}