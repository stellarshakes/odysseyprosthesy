import React from 'react';
import './App.css';
import TheVeil from './poemfiles/theveil';
import Poem1 from './poemfiles/poem1';
import Poem2 from './poemfiles/poem2';
import Poem3 from './poemfiles/poem3';
import IntroPage from "./introPage";
import {Switch, Route} from 'react-router-dom'


function App() {
    return (
        <div className="App">
            <Switch>
                <Route path={'/theveil'}>
                    <TheVeil/>
                </Route>                
                <Route path={'/poem2'}>
                    <Poem2/>
                </Route>
                <Route path={'/poem3'}>
                    <Poem3/>
                </Route>
                <Route path={'/poem1'}>
                    <Poem1/>
                </Route>
                <Route path={'/'}>
                    <IntroPage/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
