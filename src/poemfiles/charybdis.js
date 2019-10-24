import React from 'react'
import CycleSpan from "../components/CycleSpan";
import StopCycleSpan from "../components/StopCycleSpan";
import {Link} from 'react-router-dom'
import TextLink from "../components/TextLink";
import NavBar from "../components/NavBar";
import ScrollToTop from "../components/ScrollToTop"

function Charybdis() {
	return (
		<div className='poem charybdis setOdysseus'>
		<h2>Charybdis</h2>
		<p>
			The fig tree teetering<br/>
			on the precipice<br/>
			considers<br/>
			the typhoon below<br/>
			<br/>
			Thrice the beast<br/>
			gorges herself<br/>
			on saltwater<br/>
			or sails and sailors<br/> 
			a baritone slurp<br/>
			roaring<br/>
			down<br/>
			to lodge in her gullet<br/>
			<br/>
			heaves a load<br/>
			spits the splinters out with the foam<br/>
			with the rot<br/>
			and the rocks about her<br/>
			shudder<br/>
			<br/>
			split<br/>
			<br/>
			She points her nose to the sky<br/>
			crunching heaven<br/>
			stars between her teeth<br/>
			<br/>
			The precipice cowers<br/>
			<br/>
			And the fig tree<br/>
			clinging to its roots<br/>
			<div className='blockquote'>and the tight grip of heroism<br/>
			weighing down its trunk</div>
			considers<br/>
			how long<br/>
			until<br/>
			<br/>
			
			<TextLink link={'/scylla'} class={"text-button text-button-odysseus"} text={"←"}/> 
			<div class="indent"> </div> 
			<TextLink link={'/act-ii'} class={"text-button text-button-odysseus"} text={"⌂"}/>
			<div class="indent"> </div> 
			<TextLink link={'/ctimene'} class={"text-button text-button-odysseus"} text={"→"}/><br/>
			<br/>

		</p>
		<ScrollToTop/>
		</div>
	)
}

export default Charybdis