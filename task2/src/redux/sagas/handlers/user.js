import { call,put } from "@redux-saga/core/effects";
import { setUser } from "../../ducks/user";
import { requestGetUser } from "../requests/user";


export function* handleGetUser(action){
  try{
    const response = yield call(requestGetUser,action)
    const {data} = response
    yield put(setUser(data))
  }catch(e){
    console.log(e);
  }
}