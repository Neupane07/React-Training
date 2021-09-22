import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Container, Image, Input } from 'semantic-ui-react';
import './App.css';
import { getSearchResults } from './redux/ducks/search';

function App() {
  const dispatch = useDispatch()

  const searchResults = useSelector(state => state.searchResults)
  console.log('search results====>',searchResults)

  const movies =  searchResults?.searchResults?.movies?.search?.edges

  const handleSubmit = e => {
    e.preventDefault();
    const term = e.target[0].value
    dispatch(getSearchResults(term))
  }

  return (
    <div className="App">
      <div>
      <Container textAlign="center">
        <h1>Search Movies</h1>
        <form onSubmit={e => handleSubmit(e)}>
          <Input icon="search" placeholder="search" type="text"/>
        </form>
      </Container>

      {movies && movies.map(image => {
        return (
          <Container key={image.node.title}>
            <h3 textAlig="center">{image.node.title}</h3>
            <Image fluid src={image.node?.images?.backdrops[0]?.image}/> 
          </Container>
        )
      })}
    </div>
    </div>
  );
}

export default App;
