import React from 'react'
import CycleSpan from "../components/CycleSpan";
import StopCycleSpan from "../components/StopCycleSpan";
import {Link} from 'react-router-dom'
import TextLink from "../components/TextLink";
import NavBar from "../components/NavBar";

function TheSuitorsConference() {
	return (
		<div className='poem thesuitorsconference setTelemachos setPenelope'>
		<h2>The Suitors' Conference</h2>
		<p>
			It will be a body<br/>
			to welcome back the king<br/>
			<br/>
			saltwater infesting the face<br/>
			<br/>
			an emptied body<br/>
			and the small white hands<br/>
			that still attempt to weave a course away from fate<br/>
			will be still<br/>
			<br/>
			and Odysseus<br/>
			will smell the brine<br/>
			will turn and see<br/>
			<br/>
			It will be a body<br/>
			to welcome him home<br/>
			<br/>
			Choose the place, Eurymachos<br/>
			show me where<br/>
			and I will leave it there<br/>
			<br/>
			
			<TextLink link={'/'} class={"text-button text-button-telemachos"} text={"Telemachos"}/> | <TextLink link={'/'} class={"text-button text-button-penelope"} text={"Penelope"}/><br/>
			

		</p>
		<NavBar/>
		</div>
	)
}

export default TheSuitorsConference