import { postMessageFailed, postMessageSuccess, setMessages } from "../actions/message";
import {
  ApolloClient,
  InMemoryCache,
  gql,
} from "@apollo/client";
import { put,call } from 'redux-saga/effects'


const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
})

function getMessageDetails(){
  try{
    const GET_MESSAGES_QUERY = gql`
    query{
      messages{
        id
        content
        user
      }
    }
    `
    return client.query({
      query: GET_MESSAGES_QUERY
    })
  }catch(e){
   return e
  }
}

export function* handleGetMessageDetails(){
  try{
    const response = yield call(getMessageDetails)
    const {data} = response
    yield put(setMessages(data))
  }catch(e){
    console.log(e)
  }
}


function postMessage(message){
  console.log("message was",message.payload)
  const POST_MESSAGE_QUERY = gql`
    mutation{
      postMessage(user:"Ryan", content:"${message.payload}")
    }
    `
    return client.mutate({
      mutation: POST_MESSAGE_QUERY
    })
}

export function* handlePostMessage(message){
  try{
    const response = yield call(postMessage,message)
    const {data} = response
    yield put(postMessageSuccess(data))

  }catch(e){
    yield put(postMessageFailed(e))
  }
}