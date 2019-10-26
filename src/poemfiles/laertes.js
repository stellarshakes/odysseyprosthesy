import React from 'react'
import CycleSpan from "../components/CycleSpan";
import StopCycleSpan from "../components/StopCycleSpan";
import {Link} from 'react-router-dom'
import TextLink from "../components/TextLink";
import ScrollToTop from "../components/ScrollToTop"

function Laertes() {
	return (
		<div className='poem Laertes setOdysseus'>
		<h2>Laertes</h2>
		<p>
			The nightingale trees have been silent<br/>
			too many summers<br/>
			<br/>
			A little voice played there once<br/>
			I fear now<br/>
			its last words were only for the sea<br/>
			<br/>
			How cruel the blessings of the gods<br/>
			to make me<br/>
			a grandfather still<br/>
			a father no longer<br/>
			<br/>
			
			<TextLink link={'/pillowtalk'} class={"text-button text-button-odysseus"} text={"←"}/>
			<div class="indent"> </div> 
			<TextLink link={'/act-ii'} class={"text-button text-button-odysseus"} text={"⌂"}/>
		</p>
		<ScrollToTop/>
		</div>
	)
}

export default Laertes