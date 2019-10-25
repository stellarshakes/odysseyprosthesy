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
import Interview from './poemfiles/interview';
import PenelopeandtheShroud from './poemfiles/penelopeandtheshroud';
import PenelopesShroudEnds from './poemfiles/penelopesshroudends';
import EurycleiasRecognition from './poemfiles/eurycleiasrecognition';
import Reminiscences from './poemfiles/reminiscences';
import TheSecondDream from './poemfiles/theseconddream';
import Reckoning from './poemfiles/reckoning';
import OdysseusReturning from './poemfiles/odysseusreturning';
import TheKingReturns from './poemfiles/thekingreturns';
import OdysseusProof from './poemfiles/odysseusproof';
import TheThirdDream from './poemfiles/thethirddream';
import Athena from './poemfiles/athena';
import OdysseusProclamation from './poemfiles/odysseusproclamation';
import ADistantBattle from './poemfiles/adistantbattle';
import TheFairerExecution from './poemfiles/thefairerexecution';

import IntroPage from "./components/introPage";
import Main from './poemfiles/main';
import {Route, Switch} from 'react-router-dom'
import ScrollRestore from "./components/ScrollRestore";

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
                <Route path={'/interview'}>
                    <div className={"poemContainer"}>
                        <Interview/>
                    </div>
                </Route>
                <Route path={'/penelopeandtheshroud'}>
                    <div className={"poemContainer"}>
                        <PenelopeandtheShroud/>
                    </div>
                </Route>
                <Route path={'/penelopesshroudends'}>
                    <div className={"poemContainer"}>
                        <PenelopesShroudEnds/>
                    </div>
                </Route>
                <Route path={'/eurycleiasrecognition'}>
                    <div className={"poemContainer"}>
                        <EurycleiasRecognition/>
                    </div>
                </Route>
                <Route path={'/reminiscences'}>
                    <div className={"poemContainer"}>
                        <Reminiscences/>
                    </div>
                </Route>
                <Route path={'/theseconddream'}>
                    <div className={"poemContainer"}>
                        <TheSecondDream/>
                    </div>
                </Route>
                <Route path={'/reckoning'}>
                    <div className={"poemContainer"}>
                        <Reckoning/>
                    </div>
                </Route>
                <Route path={'/odysseusreturning'}>
                    <div className={"poemContainer"}>
                        <OdysseusReturning/>
                    </div>
                </Route>
                <Route path={'/thekingreturns'}>
                    <div className={"poemContainer"}>
                        <TheKingReturns/>
                    </div>
                </Route>
                <Route path={'/odysseusproof'}>
                    <div className={"poemContainer"}>
                        <OdysseusProof/>
                    </div>
                </Route>
                <Route path={'/thethirddream'}>
                    <div className={"poemContainer"}>
                        <TheThirdDream/>
                    </div>
                </Route>
                <Route path={'/athena'}>
                    <div className={"poemContainer"}>
                        <Athena/>
                    </div>
                </Route>
                <Route path={'/odysseusproclamation'}>
                    <div className={"poemContainer"}>
                        <OdysseusProclamation/>
                    </div>
                </Route>
                <Route path={'/adistantbattle'}>
                    <div className={"poemContainer"}>
                        <ADistantBattle/>
                    </div>
                </Route>
                <Route path={'/thefairerexecution'}>
                    <div className={"poemContainer"}>
                        <TheFairerExecution/>
                    </div>
                </Route>
                <Route path={'/act-ii'}>
                    <div className={"poemContainer"}>
                        <ScrollRestore />
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