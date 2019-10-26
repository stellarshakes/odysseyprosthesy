import React from 'react'
import CycleSpan from "../components/CycleSpan";
import TextLink from "../components/TextLink";
import ScrollToTop from "../components/ScrollToTop"

function Calypso() {
	return (
		<div className='poem calypso setOdysseus'>
		<h2>Calypso with Hermes' Message</h2>
		<p>
			Gods do as they please<br/>
			and hate for goddesses to do the same<br/>
			<br/>
			You intervene and strike our joy down<br/>
			then would strike us too for insubordination<br/>
			<br/>
			And what do I do?<br/>
			I tend to my garden<br/>
			I rescue a hero<br/>
			I love him from time to time<br/>
			I offer him freedom from time<br/>
			<br/>
			Zeus will not have it<br/>
			Zeus decides his fate is to leave<br/>
			and forces me to bow my head<br/>
			like some mortal withering<br/>
			<br/>
			It would be just as easy<br/>
			to make <TextLink link={'/consent'} class={"text-button text-button-odysseus"} text={"his fate"}/> to stay<br/>
			<br/>
			My bare heart<br/>
			is not enough for <CycleSpan entries={["Zeus","you","him"]}/><br/>
			<br/>
			And what can I do?<br/>
			I reveal him to the world<br/>
			I expose him to the stark sea<br/>
			I relinquish him to his all-important fate<br/>
			<br/>
			I return to my garden<br/>
			or does Zeus want that, too?<br/>
			<br/>
			<TextLink link={'/farewell'} class={"text-button text-button-odysseus"} text={"←"}/> 
			<div class="indent"> </div> 
			<TextLink link={'/act-ii'} class={"text-button text-button-odysseus"} text={"⌂"}/>
			<div class="indent"> </div> 
			<TextLink link={'/nausikaa'} class={"text-button text-button-odysseus"} text={"→"}/><br/>
			<br/>

		</p>
		<ScrollToTop/>
		</div>
	)
}

export default Calypso