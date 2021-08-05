import axios from 'axios'
import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAIL
} from '../userConstants'

export const listUsers = () => async(dispatch) => {
    try{
        dispatch({type: FETCH_USER_REQUEST})

        const {data} = await axios.get('https://reqres.in/api/users?page=2')
        dispatch({
            type: FETCH_USER_SUCCESS,
            payload: data.data
        })

    }catch(error){

        dispatch({
            type: FETCH_USER_FAIL,
            payload: error
        })

    }
}