import React from 'react'
import CycleSpan from "../components/CycleSpan";
import TextLink from "../components/TextLink";
import ScrollToTop from "../components/ScrollToTop"

function Reminiscences() {
	return (
		<div className='poem Reminiscences setOdysseus'>
		<h2>The Boar Hunt</h2>
		<p>
			I remember one day<br/>
			<br/>
			My brother had returned<br/>
			from a long voyage<br/>
			to visit family<br/>
			<br/>
			<div className='blockquote'><i>
			The family welcomed me home<br/>
			remarking at the lurid glower<br/>
			of the fresh scar on my thigh<br/>
			<br/>
			At least I had gathered strength enough<br/>
			to walk<br/>
			from the ship to the palace<br/>
			from the front door to a dining chair<br/>
			<br/>
			Ctimene stared in morbid fascination<br/>
			at dinner<br/>
			asked<br/></i></div>
			<br/>
			Before he answered me<br/>
			he tossed his head back<br/>
			laughed around a mouthful of pork<br/>
			<br/>
			His gaze at least is<br/>
			characteristic<br/>
			not easily forgotten<br/>
			<br/>
			<div className='blockquote'><i>
			My sister<br/>
			and the curious focus<br/>
			arrow-direct<br/>
			<br/>
			My answer came:<br/>
			<CycleSpan entries={['"The spoils of war!"',
			'"Exactly what happens to children who ask lots of questions!"',
			'"Healing, but only well enough to scar."']}/><br/></i></div>
			<br/>
			While some god distracted our parents<br/>
			I pulled a face at him<br/>
			<br/>
			Odysseus looked affronted<br/>
			dropped a morsel of bread in mock shock<br/>
			twisted to retrieve it<br/>
			grimaced<br/>
			balanced<br/>
			and flexed his thigh<br/>
			<br/>
			<div className='blockquote'><i>
			Ctimene's brow only creased like that<br/>
			when she noticed secrets<br/>
			<br/>
			I resolved to learn to do that too someday<br/></i></div>
			<br/>
			
			<TextLink link={'/eurycleiasrecognition'} class={"text-button text-button-odysseus"} text={"←"}/><br/>
			<br/>

		</p>
		<ScrollToTop/>
		</div>
	)
}

export default Reminiscences