import {takeLatest, put} from 'redux-saga'
import {
  ApolloClient,
  InMemoryCache,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://tmdb.apps.quintero.io/',
  cache: new InMemoryCache()
});

export function* fetchResultsAsync(term){
  yield client
  .query({
    query: gql`
    query{
      movies{
        search(term:"${term}"){
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
  .then(result => console.log(result.data.movies.search.edges));
}