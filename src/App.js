import React from 'react';
import './App.css';
import TheVeil from './poemfiles/theveil';
import Phemios from './poemfiles/phemios';
import Despair from './poemfiles/despair';
import HalithersesProphecy from './poemfiles/halithersesprophecy';
import BabyTelemachos from './poemfiles/babytelemachos';
import Odysseus from './poemfiles/odysseus';
import PenelopesShroud from './poemfiles/penelopesshroud';
import TelemachosLeaves from './poemfiles/telemachosleaves';
import Penelope from './poemfiles/penelope';
import Helen from './poemfiles/helen';
import TheSuitorsConference from './poemfiles/thesuitorsconference';
import TheFirstDream from './poemfiles/thefirstdream';
import Farewell from './poemfiles/farewell';
import Calypso from './poemfiles/calypso';
import Consent from './poemfiles/consent';
import Nausikaa from './poemfiles/nausikaa';
import Demodokos from './poemfiles/demodokos';

import Poem1 from './poemfiles/poem1';
import IntroPage from "./components/introPage";
import Main from './poemfiles/main';
import {Switch, Route} from 'react-router-dom'
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
                <Route path={'/thesuitorsconference'}>
                    <div className={"poemContainer"}>
                        <TheSuitorsConference/>
                    </div>
                </Route>
                <Route path={'/thefirstdream'}>
                    <div className={"poemContainer"}>
                        <TheFirstDream/>
                    </div>
                </Route>
                <Route path={'/farewell'}>
                    <div className={"poemContainer"}>
                        <Farewell/>
                    </div>
                </Route>
                <Route path={'/calypso'}>
                    <div className={"poemContainer"}>
                        <Calypso/>
                    </div>
                </Route>
                <Route path={'/consent'}>
                    <div className={"poemContainer"}>
                        <Consent/>
                    </div>
                </Route>
                <Route path={'/nausikaa'}>
                    <div className={"poemContainer"}>
                        <Nausikaa/>
                    </div>
                </Route>
                <Route path={'/demodokos'}>
                    <div className={"poemContainer"}>
                        <Demodokos/>
                    </div>
                </Route>
                <Route path={'/act-ii'}>
                    <div className={"poemContainer"}>
                        <Main/>
                    </div>
                </Route>
                <Route path={'/'}>
                    <IntroPage/>
                </Route>

            </Switch>
        </div>
    );
}

export default App;

        /* This was under <NavBar/> and in the className='App' <div> 
        I muted because it was replicating the pages' contents
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

            */