import { applyMiddleware, combineReducers, createStore } from "redux";
import searchReducer from './ducks/search'
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from "./sagas/rootSaga";


const reducer = combineReducers({
  searchResults: searchReducer
})

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const store = createStore(reducer,{}, applyMiddleware(...middleware))

sagaMiddleware.run(watcherSaga)

export default store