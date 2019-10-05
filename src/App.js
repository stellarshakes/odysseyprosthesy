import React from 'react';
import Poem1 from './poemfiles/poem1';
import Poem2 from './poemfiles/poem2';
import Poem3 from './poemfiles/poem3';
import {Switch, Route} from 'react-router-dom'
import './App.css';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path={'/poem2'}>
                    <Poem2/>
                </Route>
                <Route path={'/poem3'}>
                    <Poem3/>
                </Route>
                <Route path={'/'}>
                    <Poem1/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
