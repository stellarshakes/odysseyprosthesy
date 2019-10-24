import React from 'react'
import CycleSpan from "../components/CycleSpan";
import StopCycleSpan from "../components/StopCycleSpan";
import {Link} from 'react-router-dom'
import TextLink from "../components/TextLink";
import NavBar from "../components/NavBar";
import ScrollToTop from "../components/ScrollToTop"

function TeiresiasProphecy() {
	return (
		<div className='poem teiresiasprophecy setOdysseus'>
		<h2>Teiresias' Prophecy</h2>
		<p>
			The mountains at the end of the world<br/>
			thought Odysseus<br/>
			were nothing like the steep clarity of Ithaki<br/>
			<br/>
			Heralding the night<br/>
			they sank blackly<br/>
			backed into the west<br/>
			as if some god had torn away a strip of garish dusk<br/>
			to reveal the nothing behind it<br/>
			<br/>
			His crew sailed<br/>
			into the tear at the end of the world<br/>
			sank deep into its draping creases<br/>
			suspended directionless until ex-heroes rose to meet them<br/>
			<br/>
			So this was the Underworld<br/>
			<br/>
			He offered them ritual<br/>
			in milk, honey, wine, water, barley<br/>
			and to complete the recipe<br/>
			poured fresh blood<br/>
			that ran red<br/>
			then folded thickly black upon itself<br/>
			that peculiar way that blood does<br/>
			<br/>
			A<br/>
			panoply<br/>
			of<br/>
			mute<br/>
			heroes<br/>
			found<br/>
			their<br/>
			voice<br/>
			in<br/>
			it<br/>
			<br/>
			Teiresias too approached<br/>
			the Theban ex-prophet<br/>
			to address Odysseus<br/>
			<br/>
			<a className="hovertext" title="if you can control your men's appetites before they devour a god">
			You will return safely
			</a><br/>
			<a className='hovertext' title='if you find a people who do not know boats with oars, food with salt, a sealess people'>
			You will age peacefully
			</a><br/>
			<a className='hovertext' title='if you live away from the sea, from mountain-island Ithaki'>
			You will die gently
			</a><br/>
			<br/>
			Teiresias' prophecy was bound in divine truth<br/>
			<br/>
			his teeth were stained red with it<br/>
			<br/>
			TextLink link={'/aeaea'} class={"text-button text-button-odysseus"} text={"←"}/> 
			<div class="indent"> </div> 
			<TextLink link={'/act-ii'} class={"text-button text-button-odysseus"} text={"⌂"}/>
			<div class="indent"> </div> 
			<TextLink link={'/sirens'} class={"text-button text-button-odysseus"} text={"→"}/><br/>
			<br/>
		</p>
		<ScrollToTop/>
		</div>
	)
}

export default TeiresiasProphecy