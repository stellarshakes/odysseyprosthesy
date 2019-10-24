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
import Polyphemos from './poemfiles/polyphemos';
import Circe from './poemfiles/circe';
import TeiresiasProphecy from './poemfiles/teiresiasprophecy';
import TheSirens from './poemfiles/thesirens';
import Scylla from './poemfiles/scylla';
import Charybdis from './poemfiles/charybdis';
import Ctimene from './poemfiles/ctimene';
import TheBoarHunt from './poemfiles/theboarhunt';
import OdysseusMeetsHisSon from './poemfiles/odysseusmeetshisson';
import FarewellRecalled from './poemfiles/farewellrecalled';
import CharonMeetsArgos from './poemfiles/charonmeetsargos';

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
                <Route path={'/polyphemos'}>
                    <div className={"poemContainer"}>
                        <Polyphemos/>
                    </div>
                </Route>
                <Route path={'/aeaea'}>
                    <div className={"poemContainer"}>
                        <Circe/>
                    </div>
                </Route>
                <Route path={'/teiresiasprophecy'}>
                    <div className={"poemContainer"}>
                        <TeiresiasProphecy/>
                    </div>
                </Route>
                <Route path={'/sirens'}>
                    <div className={"poemContainer"}>
                        <TheSirens/>
                    </div>
                </Route>
                <Route path={'/scylla'}>
                    <div className={"poemContainer"}>
                        <Scylla/>
                    </div>
                </Route>
                <Route path={'/charybdis'}>
                    <div className={"poemContainer"}>
                        <Charybdis/>
                    </div>
                </Route>
                <Route path={'/ctimene'}>
                    <div className={"poemContainer"}>
                        <Ctimene/>
                    </div>
                </Route>
                <Route path={'/theboarhunt'}>
                    <div className={"poemContainer"}>
                        <TheBoarHunt/>
                    </div>
                </Route>
                <Route path={'/odysseusmeetshisson'}>
                    <div className={"poemContainer"}>
                        <OdysseusMeetsHisSon/>
                    </div>
                </Route>
                <Route path={'/farewellrecalled'}>
                    <div className={"poemContainer"}>
                        <FarewellRecalled/>
                    </div>
                </Route>
                <Route path={'/thedogdies'}>
                    <div className={"poemContainer"}>
                        <CharonMeetsArgos/>
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