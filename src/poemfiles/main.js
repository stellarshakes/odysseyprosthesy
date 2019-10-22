import React from 'react'
import CycleSpan from "../components/CycleSpan";
import StopCycleSpan from "../components/StopCycleSpan";
import {Link} from 'react-router-dom'
import TextLink from "../components/TextLink";
import NavBar from "../components/NavBar";

function Main() {
	return (
		<div className='poem main'>
		<p>
			Verse<br/>
			
			<blockquote>indented text</blockquote>

			This cycle stops
			<StopCycleSpan entries={[
                "entry1","entry2","entry3"
            ]} className={"cycleSpan"}/>
            <br/>
            This cycle doesn't stop
			<CycleSpan entries={["entry1","entry2","entry3"]}/>
			<br/>
			<a className='hovertext' title='hovertext'>
			Page text
			</a><br/>

			<div class="indent">text or space</div>
			<br/>
			<TextLink link={'/nextpoeminthisthread'} class={"text-button text-button-character"} text={"Character"}/> 
			| 
			<TextLink link={'/nextpoeminthatthread'} class={"text-button text-button-othercharacter"} text={"Other Character"}/><br/>
			<br/>
			OR
			<br/>
			<TextLink link={'/lastpoeminthisthread'} class={"text-button text-button-character"} text={"←"}/> 
			<div class="indent"> </div> 
			<TextLink link={'/nextpoeminthisthread'} class={"text-button text-button-character"} text={"→"}/><br/>
			<br/>
			Arrows include: ← → ⌂
		</p>
		<NavBar/>
		</div>
	)
}

export default Main