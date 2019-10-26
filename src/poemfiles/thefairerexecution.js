import React from 'react'
import CycleSpan from "../components/CycleSpan";
import StopCycleSpan from "../components/StopCycleSpan";
import {Link} from 'react-router-dom'
import TextLink from "../components/TextLink";
import ScrollToTop from "../components/ScrollToTop"

function TheFairerExecution() {
	return (
		<div className='poem TheFairerExecution setTelemachos'>
		<h2>The Fairer Execution</h2>
		<p>
			Finally still<br/>
			the house girls hang for their <StopCycleSpan entries={[
                "impudence","impropriety","infidelity"
            ]} className={"cycleSpan"} lastClassName={"finalCycleSpan"}/><br/>
			suspended<br/>
			weighing down boughs of rope<br/>
			like a dozen overripe fruits<br/>
			bursting their skins<br/>
			ripening yet<br/>
			in the profane light that looks down on them<br/>
			<div className='blockquote'>
			relentless voyeur</div>
			and draws gaze upon gaze<br/>
			<br/>
			In their wine-purple cheeks<br/>
			in the stillness of their feet<br/>
			still lurks their reputation:<br/>
			flowers that were<br/>
			<br/>

			<TextLink link={'/adistantbattle'} class={"text-button text-button-telemachos"} text={"←"}/> 
			<div class="indent"> </div> 
			<TextLink link={'/act-ii'} class={"text-button text-button-telemachos"} text={"⌂"}/>
			<div class="indent"> </div> 
			<TextLink link={'/enoughisenough'} class={"text-button text-button-telemachos"} text={"→"}/><br/>
			<br/>

		</p>
		<ScrollToTop/>
		</div>
	)
}

export default TheFairerExecution