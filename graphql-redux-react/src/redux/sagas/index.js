import { takeEvery } from "@redux-saga/core/effects";
import { messageActions } from "../actionTypes";
import { handleGetMessageDetails, handlePostMessage } from "./messageSagas";

export default function* watcherSaga(){
  yield takeEvery(messageActions.GET_MESSAGES, handleGetMessageDetails)
  yield takeEvery(messageActions.POST_MESSAGE_REQUESTED, handlePostMessage)
}