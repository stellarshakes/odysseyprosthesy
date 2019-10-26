import React from 'react'
import CycleSpan from "../components/CycleSpan";
import StopCycleSpan from "../components/StopCycleSpan";
import {Link} from 'react-router-dom'
import TextLink from "../components/TextLink";
import ScrollToTop from "../components/ScrollToTop"

function EurycleiasRecognition() {
	return (
		<div className='poem EurycleiasRecognition setOdysseus'>
		<h2>Eurycleia's Recognition</h2>
		<p>
			Eurycleia's popping joints ease the beggar's foot<br/>
			cracking dry<br/>
			into the basin<br/>
			<br/>
			the dirt loosens from under his nails<br/>
			and swirls<br/>
			clouding<br/>
			where the afternoon sun defines it<br/>
			plays along the broken water<br/>
			and flashes warmly <CycleSpan entries={["along the ceiling","up his calves","under her wrists"]}/><br/>
			<br/>
			The water seeps between his toes<br/>
			clots the hair on his shins<br/>
			pools enough droplets to trickle back down<br/>
			and steal the amplified petrichor and sweat with it<br/>
			<br/>
			She notices a thick line of skin knitted into a scar above his knee<br/>
			past the canny uneven squint of her keener eye<br/>
			but not <CycleSpan entries={["the edge to his fists","the prominent tension of his tendons","the white of knucklebones pushing past olive skin"]}/><br/>
			<br/>
			She knows that scar<br/>
			and wants to stop staring but<br/>
			she can't because<br/>
			she's not in her head anymore<br/>
			<br/>
			she's thirty years ago<br/>
			with a young Odysseus<br/>
			returned from a <TextLink link={'/reminiscences'} class={"text-button text-button-odysseus"} text={"boar hunt"}/><br/>
			<br/>
			she's forty years ago<br/>
			with a younger Odysseus<br/>
			face wet with the chagrin of his first real injury<br/>
			eyes big<br/>
			<br/>
			the same eyes the beggar fixes her with<br/>
			as if warning<br/>
			<br/>
			She drops the foot heel-first<br/>
			<CycleSpan entries={["with a clang and the brilliant glare of water",
			"with a clatter and the blinding flash of bronze",
			"with a high gasp that upsets her blood pressure"]}/><br/>
			<br/>
			The water is cast up thick in the air<br/>
			then spreads flat and patchy<br/>
			lace left to block across the floor<br/>
			<br/>
			The foot jerks up in pain<br/>
			and sprinkles both their faces<br/>
			<br/>
			Clever patient Odysseus sheds his sheepskin<br/>
			claws closing around her throat<br/>
			with threats as if Charon were speaking to her<br/>
			<br/>
			There is no weight behind his hands<br/>
			but all the intent and thick impunity<br/>
			<StopCycleSpan entries={["of a soldier prepared to die for war",
			"of a man determined to outlive war"]} className={"cycleSpan"} lastClassName={"finalCycleSpan"}/><br/>
			<br/>
			Her blood pressure is very vocal<br/>
			about the fact that she can't really breathe<br/>
			crowding in her head<br/>
			and pounding there<br/>
			<br/>
			but that characteristic gaze is louder<br/>
			resounding<br/>
			that he has come all this way<br/>
			and loose lips will not be what stops him<br/>
			<br/>
			
			<TextLink link={'/interview'} class={"text-button text-button-odysseus"} text={"←"}/> 
			<div class="indent"> </div> 
			<TextLink link={'/act-ii'} class={"text-button text-button-odysseus"} text={"⌂"}/>
			<div class="indent"> </div> 
			<TextLink link={'/reckoning'} class={"text-button text-button-odysseus"} text={"→"}/><br/>
			<br/>
		</p>
		<ScrollToTop/>
		</div>
	)
}

export default EurycleiasRecognition