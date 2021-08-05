import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAIL
}from '../userConstants'

const usersListReducer = (state = {users: []},action) => {
    switch(action.type){
        case FETCH_USER_REQUEST:
            return{
                loading: true,
                users: []
            }
        case FETCH_USER_SUCCESS:
            return {
                loading: false,
                users: action.payload
            }
        case FETCH_USER_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default: 
            return state;
    }
}

export default usersListReducer;