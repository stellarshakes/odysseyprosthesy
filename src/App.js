import React from 'react';
import './App.css';
import TheVeil from './poemfiles/theveil';
import Phemios from './poemfiles/phemios';
import Despair from './poemfiles/despair';
import HalithersesProphecy from './poemfiles/halithersesprophecy';
import IntroPage from "./components/introPage";
import {Switch, Route} from 'react-router-dom'
import Odysseus from './poemfiles/odysseus';
import PenelopesShroud from './poemfiles/penelopesshroud';
import TelemachosLeaves from './poemfiles/telemachosleaves';
import Penelope from './poemfiles/penelope';
import Helen from './poemfiles/helen';
import BabyTelemachos from "./poemfiles/babytelemachos";
import NavBar from "./components/NavBar";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path={'/theveil'}>
                    <div className={"poemContainer theveil"}>
                        <TheVeil/>
                    </div>
                </Route>
                <Route path={'/phemios'}>
                    <div className={"poemContainer"}>
                        <Phemios/>
                    </div>
                </Route>
                <Route path={'/despair'}>
                    <div className={"poemContainer"}>
                        <Despair/>
                    </div>
                </Route>
                <Route path={'/halithersesprophecy'}>
                    <div className={"poemContainer"}>
                        <HalithersesProphecy/>
                    </div>
                </Route>
                <Route path={'/babytelemachos'}>
                    <div className={"poemContainer"}>
                        <BabyTelemachos/>
                    </div>
                </Route>
                <Route path={'/odysseus'}>
                    <div className={"poemContainer"}>
                        <Odysseus/>
                    </div>
                </Route>
                <Route path={'/penelopesshroud'}>
                    <div className={"poemContainer"}>
                        <PenelopesShroud/>
                    </div>
                </Route>
                <Route path={'/telemachosleaves'}>
                    <div className={"poemContainer"}>
                        <TelemachosLeaves/>
                    </div>
                </Route>
                <Route path={'/penelope'}>
                    <div className={"poemContainer"}>
                        <Penelope/>
                    </div>
                </Route>
                <Route path={'/helen'}>
                    <div className={"poemContainer"}>
                        <Helen/>
                    </div>
                </Route>
                <Route path={'/'}>
                    <IntroPage/>
                </Route>
            </Switch>
            <NavBar/>
        </div>
    );
}

export default App;
