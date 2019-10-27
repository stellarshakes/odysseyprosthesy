import React from 'react'
import CycleSpan from "../components/CycleSpan";
import TextLink from "../components/TextLink";
import ScrollToTop from "../components/ScrollToTop"

function Athena() {
	return (
		<div className='poem Athena'>
		<h2>Athena at the Battle in the Hall</h2>
		<p>
			Crouched high upon a ceiling beam<br/>
			<div className='blockquote'>
			the light that cloaks her<br/>
			screaming in
			</div>
			Pallas devours the steady collapse<br/>
			arms like wings<br/>
			gleaming<br/>
			sharpened<br/>
			bare<br/>
			<br/>
			Terror from her golden aegis<br/>
			turns the pooling ferrous red <CycleSpan entries={["to bronze","to copper","to amber"]}/><br/>
			<br/>
			Her revenant hero<br/>
			the tempest she had dusted off<br/>
			eats men<br/>
			<div className='blockquote'>
			and leaves their bodies vacant
			</div><br/>
			<br/>

			<TextLink link={'/odysseusproclamation'} class={"text-button text-button-odysseus"} text={"Odysseus"}/> 
			| 
			<TextLink link={'/adistantbattle'} class={"text-button text-button-telemachos"} text={"Telemachos"}/><br/>
			<br/>
			
		</p>
		<ScrollToTop/>
		</div>
	)
}

export default Athena