import React, { useState } from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import { Container,Image, Input } from 'semantic-ui-react';

const client = new ApolloClient({
  uri: 'https://tmdb.apps.quintero.io/',
  cache: new InMemoryCache()
});


const MovieSearch = () => {

  const [images, setImages] = useState([])
  console.log(images)

  const handleSubmit = e => {
    e.preventDefault();
    const term = e.target[0].value
    client
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
  .then(result => setImages(result.data.movies.search.edges));

  }


  return (
    <div>
      <Container textAlign="center">
        <h1>Search Movies</h1>
        <form onSubmit={e => handleSubmit(e)}>
          <Input icon="search" placeholder="search" type="text"/>
        </form>
      </Container>

      {images && images.map(image => {
        return (
          <Container key={image.node.title}>
            <h3 textAlig="center">{image.node.title}</h3>
            <Image fluid src={image.node?.images?.backdrops[0]?.image}/> 
          </Container>
        )
      })}
    </div>
  )
}

export default MovieSearch
