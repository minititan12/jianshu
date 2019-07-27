import { CHANGE_LOGIN, LOGOUT } from './actionTypes';
import axios from 'axios';

export const login = (account, password) => {
    return (dispatch) => {
        axios.get('https://easy-mock.com/mock/5d3bc54f8f4f4547b18e7682/api/login?account=' + account + "&password=" + password)
            .then((res) => {
                const result = res.data.data;
                if (result) {
                    const action = {
                        type: CHANGE_LOGIN,
                        value: true
                    }
                    dispatch(action);
                } else {
                    alert("登陆失败")
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
        value: false
    }
}