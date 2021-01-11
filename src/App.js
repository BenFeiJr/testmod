import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './business/home';
import Spu from './business/spu';
import Address from './business/address';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/item"><Spu /></Route>
                <Route path="/address"><Address /></Route>
            </Switch>
        </Router>
    );
}

export default App;
