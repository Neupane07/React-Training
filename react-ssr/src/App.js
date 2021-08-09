import React from 'react'
import {  Link, Route, Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

const pageOne = () => {
  return (
    <div>
      <h1>This is page 1</h1>
      <Link to="/pagetwo">Go to page two</Link>
    </div>
    
  )
}

const pageTwo = () => {
  return (
    <>
      <h1>This is page 2</h1>
      <Link to="/">Back to page one</Link>
    </>
  )
}

function App() {
  const history = createMemoryHistory();
  return (
        <Router history={history}>
          <div>
            <Route path="/" exact component={pageOne}/>
            <Route path="/pagetwo" component={pageTwo}/>
          </div>
        </Router>
  );
}

export default App;
