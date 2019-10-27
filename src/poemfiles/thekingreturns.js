import React from 'react'
import TextLink from "../components/TextLink";
import ScrollToTop from "../components/ScrollToTop"

function TheKingReturns() {
	return (
		<div className='poem TheKingReturns setTelemachos'>
		<h2>The King Returns</h2>
		<p>
			<a className='hovertext' title='my dad'>
			The trickster king
			</a><br/>
			<a className='hovertext' title='Athena the strategist, avenger Athena'>
			veiled by a trickster god
			</a><br/>
			returns<br/>
			and finds<br/>
			<br/>
			his house thick with rot<br/>
			<br/>
			Its every pore is clogged<br/>
			with impunity<br/>
			with men<br/>
			glutted<br/>
			at playing nobility<br/>
			<br/>
			They eat his father's fruit<br/>
			they drink his mother's wine<br/>
			they throw his furniture<br/>
			and scraps of his food<br/>
			at him<br/>
			as he passes<br/>
			through his courtyard<br/>
			<br/>
			<a className='hovertext' title='but this bitter fever is four years old'>
			I wish I could ignore them
			</a><br/>
			<a className="hovertext" title="and I can't sweat it out">
			as easily as he does
			</a><br/>
			<br/>
			He must have picked up a lot of divine friends on his way home<br/>
			<br/>
			<a className='hovertext' title='warns him of wayward hooves'>
			the god perched on his shoulder
			</a><br/>
			<a className='hovertext' title='checks his clever tongue'>
			and the one he hides in his throat
			</a><br/>
			<br/>
			His house is choked<br/>
			with swollen egos<br/>
			<br/>
			Its every artery<br/>
			calcified<br/>
			with callous laughter and virility<br/>
			<br/>
			<a className='hovertext' title='as he should'>
			He knows these men
			</a><br/>
			<a className='hovertext' title='he helped raise some of them'>
			better than they know themselves
			</a><br/>
			<br/>
			<a className='hovertext' title='bounced them on his knee'>
			and he has been gone twenty years
			</a><br/>
			<br/>
			The king is seated<br/>
			on his porch<br/>
			devises ways to purge his house<br/>
			of cancerous tissue<br/>
			and tumescent flakes of vital material<br/>
			<a className='hovertext' title='cauterisation'>
			with fire
			</a><br/>
			<a className='hovertext' title='excision'>
			with bronze
			</a><br/>
			<a className='hovertext' title='fumigation'>
			with sulphur
			</a><br/>
			<br/>

			<TextLink link={'/reckoning'} class={"text-button text-button-telemachos"} text={"←"}/> 
			<div class="indent"> </div> 
			<TextLink link={'/act-ii'} class={"text-button text-button-telemachos"} text={"⌂"}/>
			<div class="indent"> </div> 
			<TextLink link={'/odysseusreturning'} class={"text-button text-button-telemachos"} text={"→"}/><br/>
			<br/>
		</p>
		<ScrollToTop/>
		</div>
	)
}

export default TheKingReturns