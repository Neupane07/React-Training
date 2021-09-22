import {takeLatest} from 'redux-saga/effects'
import { GET_SEARCH_RESULTS } from '../ducks/search';
import { handleGetSearchResults } from './handlers/search';

export function* watcherSaga() {
  yield takeLatest(GET_SEARCH_RESULTS, handleGetSearchResults)
}