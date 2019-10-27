import React from 'react'
import CycleSpan from "../components/CycleSpan";
import TextLink from "../components/TextLink";
import ScrollToTop from "../components/ScrollToTop"

function FarewellRecalled() {
	return (
		<div className='poem farewellrecalled'>
		<h2>Farewell</h2>
		<p>
			But Penelope<br/>
			prudence made presence<br/>
			could endure any amount of needling in her heart<br/>
			every day<br/>
			<br/>
			but today<br/>
			<br/>
			<CycleSpan entries={['"I do not think we will all return from Ilios unhurt."',
			'"They say the Trojans are skilled fighters."',
			'"I cannot say whether I shall fall on Trojan soil."']}/><br/>
			<br/>
			The sky fell slowly on her head<br/>
			and made speech impossible<br/>
			<br/>
			Odysseus was<br/>
			<CycleSpan entries={["patient","considerate","still Odysseus"]}/><br/>
			his gaze did not waver<br/>
			never wavered<br/>
			but its pierce was softer<br/>
			and its focus fraying<br/>
			<br/>
			A rare tremor flooded<br/>
			her right hand<br/>
			visible to no one<br/>
			<br/>
			Odysseus could only bring himself to take her wrist<br/>
			steady enough for both of them<br/>
			warm with comfort<br/>
			muslin-light<br/>
			and despite himself and the listening walls<br/>
			murmured<br/>
			<br/>
			"All I have is yours<br/>
			<br/>
			Take good care of my parents<br/>
			good enough for both of us<br/>
			and<br/>
			<br/>
			when you see a beard<br/>
			on our boy's face<br/>
			<br/>
			marry whomever you love<br/>
			and go with him freely"<br/>
			<br/>
			He turned his eyes away<br/>
			uncharacteristically bright<br/>
			and a strange cold invaded her wrist<br/>
			where his hand used to be<br/>
			<br/>
			Penelope bowed her head to nod<br/>
			could not find the will to raise it again<br/>
			<br/>
			The tremor returned<br/>
			<br/>
			Time to put this right hand to work<br/>
			<br/>

			<TextLink link={'/thedogdies'} class={"text-button text-button-odysseus"} text={"Odysseus"}/> 
			| 
			<TextLink link={'/penelopesshroudends'} class={"text-button text-button-penelope"} text={"Penelope"}/><br/>
			<br/>
		</p>
		<ScrollToTop/>
		</div>
	)
}

export default FarewellRecalled