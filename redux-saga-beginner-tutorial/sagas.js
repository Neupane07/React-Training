import { put, takeEvery, all, takeLatest } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* helloSaga() {
  console.log('Hello Sagas!')
}

function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

function* fetchUsers(){
  yield axios.get('https://jsonplaceholder.typicode.com/users')
  yield put({type: 'FETCH_USERS'})
}

function* watchFetchUsers() {
  yield takeEvery('FETCH_USERS', fetchUsers)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchIncrementAsync(),
    watchFetchUsers()
  ])
}