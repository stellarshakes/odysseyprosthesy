/*
muted for its own good

import React from 'react'
import CycleSpan from "../components/CycleSpan";
import StopCycleSpan from "../components/StopCycleSpan";
import {Link} from 'react-router-dom'
import TextLink from "../components/TextLink";
import NavBar from "../components/NavBar";
import ScrollToTop from "../components/ScrollToTop"

function PoemTitle() {
	return (
		<div className='poem poemtitle setCharacter'>
		<h2>Title</h2>
		<p>
			Verse<br/>
			verse<br/>
 			<br/>
			
			<blockquote>indented text</blockquote>

			This cycle stops
			<StopCycleSpan entries={[
                "entry1","entry2","entry3"
            ]} className={"cycleSpan"}/>

            This cycle doesn't stop
			<CycleSpan entries={["entry1","entry2","entry3"]}/>

			<a className='hovertext' title='hovertext'>
			Page text
			</a><br/>

			<div class="indent">text or space</div>

			<TextLink link={'/nextpoeminthisthread'} class={"text-button text-button-character"} text={"Character"}/> 
			| 
			<TextLink link={'/nextpoeminthatthread'} class={"text-button text-button-othercharacter"} text={"Other Character"}/><br/>
			<br/>
			
			OR

			TextLink link={'/lastpoeminthisthread'} class={"text-button text-button-character"} text={"←"}/> 
			<div class="indent"> </div> 
			<TextLink link={'/act-ii'} class={"text-button text-button-character"} text={"⌂"}/>
			<div class="indent"> </div> 
			<TextLink link={'/nextpoeminthisthread'} class={"text-button text-button-character"} text={"→"}/><br/>
			<br/>

			Arrows include: ← → ⌂
		</p>
		<ScrollToTop/>
		<NavBar/>
		</div>
	)
}

export default PoemTitle

*/

