import React from 'react'
import CycleSpan from "../components/CycleSpan";
import StopCycleSpan from "../components/StopCycleSpan";
import {Link} from 'react-router-dom'
import TextLink from "../components/TextLink";
import NavBar from "../components/NavBar";
import ScrollToTop from "../components/ScrollToTop"

function Scylla() {
	return (
		<div className='poem scylla setOdysseus'>
		<h2>Scylla</h2>
		<p>
			He should've listened<br/>
			<br/>
			The sorceress of the sea<br/>
			told him<br/>
			all the clever ways to avoid the monster's ravenous heads<br/>
			all six of them<br/>
			<br/>
			To call on its mother<br/>
			to sail straight past<br/>
			to not fight back<br/>
			<br/>
			But Odysseus, too, is clever<br/>
			and fierce and proud<br/>
			<br/>
			Donning armour and calling orders<br/>
			he doomed a dozen fathers<br/>
			to teeth plunging from the sky<br/>
			<br/>
			He should've listened<br/>
			<br/>
			Even the dread roar of the dashing waves<br/>
			did not mask<br/>
			the crack of splintering bones<br/>
			and the high distance of the monster's abyss<br/>
			did not veil<br/>
			six twisted horrors on six twisted faces<br/>
			<br/>
			And then again<br/>
			<br/>
			Scylla was born for speed<br/>
			<br/>
			He did not listen<br/>
			so<br/>
			he witnessed the most pitiable site<br/>
			of all his wanderings on the sea<br/>
			<br/>

			TextLink link={'/sirens'} class={"text-button text-button-odysseus"} text={"←"}/> 
			<div class="indent"> </div> 
			<TextLink link={'/act-ii'} class={"text-button text-button-odysseus"} text={"⌂"}/>
			<div class="indent"> </div> 
			<TextLink link={'/charybdis'} class={"text-button text-button-odysseus"} text={"→"}/><br/>
			<br/>

		</p>
		<ScrollToTop/>
		</div>
	)
}

export default Scylla