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
  console.log('term',action)
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