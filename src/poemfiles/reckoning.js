import React from 'react'
import CycleSpan from "../components/CycleSpan";
import StopCycleSpan from "../components/StopCycleSpan";
import {Link} from 'react-router-dom'
import TextLink from "../components/TextLink";
import ScrollToTop from "../components/ScrollToTop"

function Reckoning() {
	return (
		<div className='poem Reckoning setOdysseus setTelemachos'>
		<h2>Reckoning</h2>
		<p>
			The war goddess knows<br/>
			half the battle is won in the mind<br/>
			<br/>
			Her eyes cast black dread upon the suitors<br/>
			<br/>
			She tamps tears and wails of laughter down their throats<br/>
			until they blast forth<br/>
			their minds fodder<br/>
			their hearts scrap<br/>
			and<br/>
			madness' playthings<br/>
			they lose themselves<br/>
			<br/>
			A steady collapse devours them<br/>
			<br/>
			Plates of meat pool thickly red<br/>
			Palace walls are masked with splatters<br/>
			Their souls vault from their twisted skins<br/>
			<div className='blockquote'>
			clawing westwards to Erebos<br/>
			attemptive abortive pre-emptive escape<br/>
			from Theoclymenos' prophecy
			</div>
			and pollute the courtyard with congestion<br/>
			<br/>
			It passes soon enough<br/>
			<br/>
			The porch thrums with <a className='hovertext' title='silenced'>echoed</a><br/>
			laughter and lamentation<br/>
			and the suitors ignore their penultimate warning<br/>
			<br/>

			<TextLink link={'/odysseusreturning'} class={"text-button text-button-odysseus"} text={"Odysseus"}/> 
			| 
			<TextLink link={'/thekingreturns'} class={"text-button text-button-telemachos"} text={"Telemachos"}/><br/>
			<br/>
			
		</p>
		<ScrollToTop/>
		</div>
	)
}

export default Reckoning