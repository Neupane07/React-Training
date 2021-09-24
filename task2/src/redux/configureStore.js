import { applyMiddleware, combineReducers, createStore } from "redux";
import searchReducer from './reducers/search'
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from "./rootSaga";
import { composeWithDevTools } from "redux-devtools-extension";


const reducer = combineReducers({
  searchResults: searchReducer
})

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const store = createStore(reducer,{},composeWithDevTools( applyMiddleware(...middleware)))

sagaMiddleware.run(watcherSaga)

export default store