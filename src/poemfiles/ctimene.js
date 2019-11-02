import React from 'react'
import CycleSpan from "../components/CycleSpan";
import StopCycleSpan from "../components/StopCycleSpan";
import TextLink from "../components/TextLink";
import ScrollToTop from "../components/ScrollToTop"

function Ctimene() {
	return (
		<div className='poem ctimene setOdysseus'>
		<h2>Ctimene</h2>
		<p>
			I at last can voyage through my memories<br/>
			and see again the home I grew up in<br/>
			without that tearful sting<br/>
			<br/>
			<div className='blockquote'><i>
			When I was bought out of this nook of my childhood<br/>
			my heart would not be bought out with me</i>
			</div>
			<br/>
			It comes back to me in cupfuls<br/>
			sackfuls<br/>
			silver gobletfuls<br/>
			I remember remembering crocuses<br/>
			<CycleSpan entries={["tucked away between grasses","shredded brightly in my palms","under my brother's sneezing nose"]}/><br/>
			<br/>
			I think my friends really knew how to play games:<br/>
			right until we were saturated with stains<br/>
			of soil and grass<br/>
			<br/>
			I cried the last time I saw them<br/>
			<br/>
			"Why cry?" my eyes asked me<br/>
			"You are better off spreading yourself<br/>
			across the colours and lights of the world<br/>
			that don't exist here"<br/>
			<br/>
			My friends envied my luck<br/>
			but I can almost recall their reckless joy<br/>
			<br/>
			my ears must remember it<br/>
			<br/>
			Time has passed<br/>
			and behold me<br/>
			trying in vain to recall the home I loved<br/>
			Where are the voices? Where the flowers?<br/>
			Where all the green and the gold I held onto?<br/>
			<br/>
			There remains no trace of them<br/>
			of my friends' faces<br/>
			other sounds, other people, have stolen their places<br/>
			<br/>
			<StopCycleSpan entries={[
                "Where my friends used to be, farewells",
                "Where the trees used to be, farewells",
                "Where the port used to be, farewells"
            ]} className={"cycleSpan"} lastClassName={"finalCycleSpan"}/><br/>
			<br/>
			<StopCycleSpan entries={[
                "Where my gaze used to be, strangers",
                "Where my home used to be, strangers",
                "Where my brother used to be, strangers"
            ]} className={"cycleSpan"} lastClassName={"finalCycleSpan"}/><br/>
			<br/>
			Where is it, <TextLink link={'/theboarhunt'} class={"text-button text-button-odysseus"} text={"the home I grew up in"}/>?<br/>
			Where has it wandered off to?<br/>
			<br/>
			<TextLink link={'/charybdis'} class={"text-button text-button-odysseus"} text={"←"}/> 
			<div class="indent"> </div> 
			<TextLink link={'/act-ii'} class={"text-button text-button-odysseus"} text={"⌂"}/>
			<div class="indent"> </div> 
			<TextLink link={'/odysseusmeetshisson'} class={"text-button text-button-odysseus"} text={"→"}/><br/>
			<br/>

		</p>
		<ScrollToTop/>
		</div>
	)
}

export default Ctimene