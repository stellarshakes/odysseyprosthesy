import React from 'react'
import CycleSpan from "../components/CycleSpan";
import StopCycleSpan from "../components/StopCycleSpan";
import {Link} from 'react-router-dom'
import TextLink from "../components/TextLink";
import ScrollToTop from "../components/ScrollToTop"

function TheMarriageBed() {
	return (
		<div className='poem TheMarriageBed'>
		<h2>The Marriage Bed</h2>
		<p>
			The monumental bed<br/>
			spreads its roots into the coarse high soil<br/>
			of Ithaki's hilly coast<br/>
			<br/>
			These are no sprawling seven hills<br/>
			shining with pillars of auspice<br/>
			<br/>
			but the dream stele in its frame<br/>
			endures interred<br/>
			in the temple bedroom<br/>
			<br/>
			Odysseus constructed their lives around it<br/>
			<br/>
			Penelope tends it nightly in his absence<br/>
			with saltwater<br/>
			<br/>
			<TextLink link={'/outburst'} class={"text-button"} text={"←"}/> 
			<div class="indent"> </div> 
			<TextLink link={'/act-ii'} class={"text-button"} text={"⌂"}/>
			<div class="indent"> </div> 
			<TextLink link={'/nightowls'} class={"text-button"} text={"→"}/><br/>
			<br/>

		</p>
		<ScrollToTop/>
		</div>
	)
}

export default TheMarriageBed