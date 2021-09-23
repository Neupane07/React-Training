import './App.css';
import Mutation from './components/Mutation';
import Query from './components/Query'
import Subscribe from './components/Subscribe';

function App() {
  return (
    <div className="App" style={{display:'flex',justifyContent:'space-around'}}>
      <Query/>
      <Mutation/>
      <Subscribe/>
    </div>
  );
}

export default App;
