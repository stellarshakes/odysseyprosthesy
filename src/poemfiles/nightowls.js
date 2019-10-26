import React from 'react'
import CycleSpan from "../components/CycleSpan";
import StopCycleSpan from "../components/StopCycleSpan";
import {Link} from 'react-router-dom'
import TextLink from "../components/TextLink";
import ScrollToTop from "../components/ScrollToTop"

function NightOwls() {
	return (
		<div className='poem NightOwls setCharacter'>
		<h2>Night Owls</h2>
		<p>
			Penelope smells in his arms<br/>
			<a className="hovertext" title="a fresh crate from his father's orchard">
			pears
			</a><br/>
			<a className='hovertext' title='she still feeds those wild geese'>
			grain 
			</a><br/>
			<a className='hovertext' title='the ones that seal her weaving'>
			fragrant oils
			</a><br/>
			and dizzies him in delight of forgotten familiarities<br/>
			<br/>
			She matches his breathless tightness<br/>
			<br/>
			<a className='hovertext' title='lively as Spring hyacinths'>
			His hair is soft and still thick
			</a><br/>
			<a className='hovertext' title='she counts each year as she weaves her fingers past it'>
			but ten years long
			</a><br/>
			and his beard smuggles flakes of the sea<br/>
			onto her cheeks and lips<br/>
			<br/>
			They stand by their fireplace<br/>
			sloughing slumber off their senses<br/>
			hearts running full<br/>
			and beg the night to last longer<br/>
			<br/>
			It does<br/>
			<br/>
			Athena yokes it to the sky<br/>
			looses Dawn's horses below the Eastern horizon<br/>
			crafts the moment into stasis<br/>
			<br/>
			After two decades of despair<br/>
			two nights in a row<br/>
			<a className='hovertext' title='for her favourite'>
			are a humble favour
			</a><br/>
			<br/>

			<TextLink link={'/themarriagebed'} class={"text-button"} text={"←"}/> 
			<div class="indent"> </div> 
			<TextLink link={'/act-ii'} class={"text-button"} text={"⌂"}/>
			<div class="indent"> </div> 
			<TextLink link={'/pillowtalk'} class={"text-button"} text={"→"}/><br/>
			<br/>
		</p>
		<ScrollToTop/>
		</div>
	)
}

export default NightOwls