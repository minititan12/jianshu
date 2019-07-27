import { GET_DETAIL } from './actionTypes';
import axios from 'axios';

export const getDetail = (id) => {
    return (dispatch)=>{
        axios.get("https://easy-mock.com/mock/5d3bc54f8f4f4547b18e7682/api/detail?id=" + id)
            .then((res)=>{
                const data = res.data.data;
                let action = {
                    type: GET_DETAIL,
                    title: data.title,
                    content: data.content
                };
                dispatch(action);
            })
            .catch((err)=>{
                console.log(err);
            })
    }
}