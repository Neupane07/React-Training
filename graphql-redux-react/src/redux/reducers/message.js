import { messageActions } from "../actionTypes";

const initialState = {
  messages: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state=initialState, action) => {
  switch(action.type){
    case messageActions.SET_MESSAGES:
      return{
        ...state, 
       messages: action.payload 
      }
    case messageActions.POST_MESSAGE_REQUESTED:
      return{
        ...state,
      }
    case messageActions.POST_MESSAGE_SUCCESS:
      return {
        ...state,
        action
      }
    default:
      return state  
  }
}