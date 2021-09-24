import { call,put } from "@redux-saga/core/effects";
import { setSearchResults } from "../actions/search";
import {
  ApolloClient,
  InMemoryCache,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://tmdb.apps.quintero.io/',
  cache: new InMemoryCache()
});

export function requestGetSearchResults(action){
  return client
  .query({
    query: gql`
    query{
      movies{
        search(term:"${action.term}"){
          edges{
            node{
              title
              images{
                backdrops{
                  image(size:Original)
                }     
              }
            }
          }
          pageInfo{
            hasNextPage
          }
          totalCount
        }
      }
    }
    `
  })
}

export function* handleGetSearchResults(action){
  try{
    const response = yield call(requestGetSearchResults,action)
    const {data} = response
    yield put(setSearchResults(data))
  }catch(e){
    console.log(e);
  }
}