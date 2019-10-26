import React from 'react'
import CycleSpan from "../components/CycleSpan";
import StopCycleSpan from "../components/StopCycleSpan";
import {Link} from 'react-router-dom'
import TextLink from "../components/TextLink";
import ScrollToTop from "../components/ScrollToTop"

function Outburst() {
	return (
		<div className='poem Outburst'>
		<h2>Outburst</h2>
		<p>
			Now?<br/>
			Am I to fail now?<br/>
			<br/>
			I<br/>
			who have done all<br/>
			the gods asked of me<br/>
			and more<br/>
			<br/>
			Father is safe<br/>
			here<br/>
			because of me<br/>
			<br/>
			and you will not even<br/>
			<CycleSpan entries={["speak to him","go to him","hug him"]}/>!<br/>
			<br/>
			How<br/>
			is he supposed to convince you?<br/>
			<br/>
			Sit with him!<br/>
			Talk to him!<br/>
			<br/>
			You cry over him<br/>
			for twenty years<br/>
			and your heart turns to stone<br/>
			now?<br/>
			When he's right there?<br/>
			<br/>
			I am appalled<br/>
			<br/>

			<TextLink link={'/reunion'} class={"text-button"} text={"←"}/> 
			<div class="indent"> </div> 
			<TextLink link={'/act-ii'} class={"text-button"} text={"⌂"}/>
			<div class="indent"> </div> 
			<TextLink link={'/themarriagebed'} class={"text-button"} text={"→"}/><br/>
			<br/>

		</p>
		<ScrollToTop/>
		</div>
	)
}

export default Outburst