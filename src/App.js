import React from 'react';
import './App.css';
import TheVeil from './poemfiles/theveil';
import Phemios from './poemfiles/phemios';
import Despair from './poemfiles/despair';
import HalithersesProphecy from './poemfiles/halithersesprophecy';
import IntroPage from "./components/introPage";
import {Switch, Route} from 'react-router-dom'
import BabyTelemachos from "./poemfiles/babytelemachos";
import NavBar from "./components/NavBar";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <div>
                <Switch>
                    <Route path={'/theveil'}>
                        <TheVeil/>
                    </Route>
                    <Route path={'/phemios'}>
                        <Phemios/>
                    </Route>
                    <Route path={'/despair'}>
                        <Despair/>
                    </Route>
                    <Route path={'/halithersesprophecy'}>
                        <HalithersesProphecy/>
                    </Route>
                    <Route path={'/babytelemachos'}>
                        <BabyTelemachos/>
                    </Route>
                    <Route path={'/'}>
                        <IntroPage/>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;
