import React from 'react'
import CycleSpan from "../components/CycleSpan";
import TextLink from "../components/TextLink";
import ScrollToTop from "../components/ScrollToTop"

function TheSirens() {
	return (
		<div className='poem thesirens setOdysseus'>
		<h2>The Sirens</h2>
		<p>
			This particular meadow<br/>
			private in the sea's embrace<br/>
			is home to <br/>
			<CycleSpan entries={["singers","scholars","dancers","historians","musicians"]}/><br/>
			the favourites of the Muses<br/>
			<br/>
			The sea breeze whispers knowledge to the meadow<br/>
			and its inhabitants<br/>
			in their infinite lives and infinite thirsts<br/>
			study<br/>
			<br/>
			From the north it brings military secrets bound in tight twists of arctic wind<br/>
			<br/>
			From the east it brings history in coloured waves, sun-dyed and sun-mad<br/>
			<br/>
			From the south it brings medicine soaked into drifts of black earth<br/>
			<br/>
			From the west it brings a prophecy<br/>
			strapped to a pillar<br/>
			<br/>
			To the meadow's relief, this particular prophecy passes<br/>
			<br/>
			It cannot bear the rotting weight of any more prophecies<br/>
			and their mortal curiosity<br/>
			<br/>
			Waves dash against its edges<br/>
			winds strip its soil<br/>
			currents eat at its foundations<br/>
			but it will not yet stop<br/>
			<br/>
			There is yet<br/>
			<CycleSpan entries={["research to be done","music to be spun","knowledge to be sung"]}/><br/>
			<br/>

			<TextLink link={'/teiresiasprophecy'} class={"text-button text-button-odysseus"} text={"←"}/> 
			<div class="indent"> </div> 
			<TextLink link={'/act-ii'} class={"text-button text-button-odysseus"} text={"⌂"}/>
			<div class="indent"> </div> 
			<TextLink link={'/scylla'} class={"text-button text-button-odysseus"} text={"→"}/><br/>
			<br/>
		</p>
		<ScrollToTop/>
		</div>
	)
}

export default TheSirens