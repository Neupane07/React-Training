import { call,put } from "@redux-saga/core/effects";
import { setSearchResults } from "../../ducks/search";
import { requestGetSearchResults } from "../requests/search";


export function* handleGetSearchResults(action){
  try{
    const response = yield call(requestGetSearchResults,action)
    const {data} = response
    yield put(setSearchResults(data))
    console.log("yiled data ===> ",data)
  }catch(e){
    console.log(e);
  }
}