import React from 'react'

import VideoList from './VideoList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UploadForm from './UploadForm';

const App = () => {

    return (
        <div className="ui container">

            <Router>
                <Switch>
                    <Route component={() => (<UploadForm />)} path="/" exact />
                    <Route component={() => (<VideoList />)} path="/videos" />
                </Switch>
            </Router>
        </div>
    )
}

export default App
