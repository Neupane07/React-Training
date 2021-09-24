import {takeLatest} from 'redux-saga/effects'
import { search } from './acctionTypes';
import { handleGetSearchResults } from './sagas/searchSaga';

export function* watcherSaga() {
  yield takeLatest(search.GET_SEARCH_RESULTS, handleGetSearchResults)
}