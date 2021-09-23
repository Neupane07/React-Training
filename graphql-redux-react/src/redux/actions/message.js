import { messageActions } from "../actionTypes"

export const getMessages = (data) => ({
  type: messageActions.GET_MESSAGES,
  payload: data
})

export const setMessages = data => ({
  type: messageActions.SET_MESSAGES,
  payload: data
})

export const postMessageRequested = data => ({
  type: messageActions.POST_MESSAGE_REQUESTED, 
  payload: data
})

export const postMessageSuccess = data => ({
  type: messageActions.POST_MESSAGE_SUCCESS, 
  payload: data
})

export const postMessageFailed = data => ({
  type: messageActions.POST_MESSAGE_FAILED, 
  payload: data
})
