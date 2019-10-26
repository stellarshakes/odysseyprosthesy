import React from 'react'
import CycleSpan from "../components/CycleSpan";
import StopCycleSpan from "../components/StopCycleSpan";
import {Link} from 'react-router-dom'
import TextLink from "../components/TextLink";
import ScrollToTop from "../components/ScrollToTop"

function ADistantBattle() {
	return (
		<div className='poem ADistantBattle'>
		<h2>A <div className='invisible'>Distant</div> Battle</h2>
		<p>
			We are not to try the lock<br/>
			<br/>
			Eurycleia confined us<br/>
			standing guard at the door<br/>
			<div className='invisible'>answered no questions</div><br/>
			with promises to explain<br/>
			<br/>
			We are not to try the lock<br/>
			<br/>
			Kept in the dark<br/>
			shock choking<br/>
			our breath<br/>
			at the muted<br/>
			<div className='invisible'>sweat-ripened perfume</div><br/>
			distant<br/>
			<div className='invisible'>metallic stings</div><br/>
			screams<br/>
			<div className='invisible'>death rattles</div><br/>
			scratching<br/>
			<div className='invisible'>desperate</div><br/>
			at the walls<br/>
			<br/>
			Someone murmurs<br/>
			we are next<br/>
			<br/>
			We<br/>
			<CycleSpan entries={["are not to try the lock","do not try the lock","do not want to"]}/><br/>
			<br/>
			<TextLink link={'/thefairerexecution'} class={"text-button text-button-telemachos"} text={"Telemachos"}/> 
			| 
			<TextLink link={'/welcomehome'} class={"text-button text-button-odysseus"} text={"Odysseus"}/><br/>
			<br/>

		</p>
		<ScrollToTop/>
		</div>
	)
}

export default ADistantBattle