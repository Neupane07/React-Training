import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Container, Image, Input } from 'semantic-ui-react';
import './App.css';
import { getUser } from './redux/ducks/user';

function App() {
  const dispatch = useDispatch()


  // useEffect(() => {
  //   console.log('dispatching ===>');
  //   dispatch(getUser('new term'))
  // },[dispatch])

  const users = useSelector(state => state.user)
  console.log("something",users?.user?.movies?.search?.edges)

  const handleSubmit = e => {
    e.preventDefault();
    const term = e.target[0].value
    dispatch(getUser(term))
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

      {users?.user?.movies?.search?.edges && users.user.movies.search.edges.map(image => {
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
