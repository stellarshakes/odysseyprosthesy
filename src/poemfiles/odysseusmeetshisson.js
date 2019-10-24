import React from 'react'
import CycleSpan from "../components/CycleSpan";
import StopCycleSpan from "../components/StopCycleSpan";
import {Link} from 'react-router-dom'
import TextLink from "../components/TextLink";
import NavBar from "../components/NavBar";
import ScrollToTop from "../components/ScrollToTop"

function OdysseusMeetsHisSon() {
	return (
		<div className='poem odysseusmeetshisson'>
		<h2>Odysseus Meets His Son</h2>
		<p>
			Telemachos sits on brushwood<br/>
			spread with fleece<br/>
			<br/>
			He declined the offered seat<br/>
			<div className='blockquote'>his father's seat!</div><br/>
			and smiled at the offer of yesterday's meat<br/>
			<br/>
			Odysseus, disguised<br/>
			steals glimpses of his son's face<br/>
			now cast down in silent thought<br/>
			<br/>
			His own form stares back<br/>
			<br/>
			The shape of the head<br/>
			and even the hair that covers it<br/>
			<br/>
			the curl of his fingers at the edge of the olive-wood bowl<br/>
			the shuffle of his feet along the worn floor<br/>
			the turn of his lips around a cadent speech<br/>
			of striking familiarity<br/>
			<br/>
			and<br/>
			in a sweep of his gaze<br/>
			the piercing regard of a set of eyes<br/>
			Odysseus has only ever looked through<br/>
			not at<br/>
			<br/>
			Craving to burst<br/>
			<CycleSpan entries={["into song","into light","into bloom"]}/><br/>
			Odysseus' heart behaves its way through the dizzying spell<br/>
			<br/>
			Eumaeus' wine is the most potent Odysseus has ever tasted<br/>
			<br/>
			He drinks<br/>
			beholds his son<br/>
			<div className='blockquote'>his son!</div><br/>
			and the gods themselves place some divine hearth<br/>
			within him<br/>
			<br/>
			Telemachos<br/>
			straight-backed on the wood pile<br/>
			tilts his head to look at the fire<br/>
			<br/>
			Odysseus sits by it<br/>
			warms his withering muscle through the rags<br/>
			prays its shadows veil his face<br/>
			<br/>
			Yesterday's leftovers between them smell fragrant<br/>
			and the eastern Sun is gentle<br/>
			as he begins the survey of his kingdom<br/>
			<br/>
			For now<br/>
			it must be enough<br/>
			<br/>
			

			<TextLink link={'/reckoning'} class={"text-button text-button-telemachos"} text={"Telemachos"}/> 
			| 
			<TextLink link={'/farewellrecalled'} class={"text-button text-button-odysseus"} text={"Odysseus"}/><br/>
			<br/>

		</p>
		<ScrollToTop/>
		</div>
	)
}

export default OdysseusMeetsHisSon