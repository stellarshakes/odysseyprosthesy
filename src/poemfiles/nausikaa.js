import React from 'react'
import TextLink from "../components/TextLink";
import ScrollToTop from "../components/ScrollToTop"

function Nausikaa() {
	return (
		<div className='poem nausikaa setOdysseus'>
		<h2>Nausikaa & the Bull</h2>
		<p>
			Bursting from a thick bush<br/>
			the dark shape frightened the maids<br/>
			and they scattered<br/>
			surprising the frogs in the reeds<br/>
			laundry crumpled in the river bank<br/>
			<br/>
			Rounding on the princess
			<div className='blockquote'>still standing resolute</div>
			the man sized her up<br/>
			<br/>
			Even under his fierce gaze<br/>
			and fearsome appearance
			<div className ='blockquote'>muscles firm with hardship<br/>
			skin thick with mud and sea salt<br/>
			modesty preserved only by a leafy bough</div>
			courageous clever Nausikaa stood<br/>
			stared him down<br/>
			waiting for him to speak<br/>
			<br/>
			Nausikaa knew<br/>
			how to spot a prince<br/>
			cursed by an evil<br/>
			god<br/>
			<br/>
			This would make the perfect story<br/>
			to someday tell her grandchildren<br/>
			<br/>
			<TextLink link={'/calypso'} class={"text-button text-button-odysseus"} text={"←"}/> 
			<div class="indent"> </div> 
			<TextLink link={'/act-ii'} class={"text-button text-button-odysseus"} text={"⌂"}/>
			<div class="indent"> </div>
			<TextLink link={'/demodokos'} class={"text-button text-button-odysseus"} text={"→"}/><br/>
			<br/>

		</p>
		<ScrollToTop/>
		</div>
	)
}

export default Nausikaa