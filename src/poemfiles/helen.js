import React from 'react'
import TextLink from "../components/TextLink";
import ScrollToTop from "../components/ScrollToTop"

function Helen() {
	return (
		<div className='poem helen setPenelope setTelemachos'>
		<h2>
			<a className='hovertext' title='penelope writes helen'>
			Telemachos Meets Helen
			</a>
		</h2>
		<p>
			<a className='hovertext' title='dear one'>
			"Shameless creature"
			</a><br/>
			<a className='hovertext' title='when did you last call on me?'>
			she calls herself
			</a><br/>
			<a className='hovertext' title='when was I last your guest?'>
			before family and guests alike
			</a><br/>
			<br/>
			<a className='hovertext' title='so long away'>
			Her years in Ilios
			</a><br/>
			<a className='hovertext' title='subjected to womanhood'>
			have shaped her
			</a><br/>
			<br/>
			<a className='hovertext' title='what trauma must it have been?'>
			I notice her ready store
			</a><br/>
			<a className='hovertext' title='to send you drowning in drugs that numb'>
			of those potions that numb
			</a><br/>
			<a className='hovertext' title='the pain of living'>
			men's sorrows
			</a><br/>
			<br/>
			<a className='hovertext' title='we were girls together once'>
			The daughter of Zeus
			</a><br/>
			<a className='hovertext' title='teaching each other to spin and weave'>
			and her keen wits
			</a><br/>
			<a className='hovertext' title='to do so still keeps you in my mind'>
			which are still about her
			</a><br/>
			<a className='hovertext' title='but I was never a match for your games'>
			are matched only
			</a><br/>
			<a className='hovertext' title='and the tricky way you spoke in my voice'>
			by her silver tongue
			</a><br/>
			<a className='hovertext' title='made me laugh'>
			and its tender words
			</a><br/>
			<a className='hovertext' title='cackle'>
			murmuring
			</a><br/>
			<a className='hovertext' title='until you joined me in breathless glee, collapsed on the ground'>
			ease and comfort lightly
			</a><br/>
			<br/>
			<a className='hovertext' title='I wonder how you are'>
			I wonder at her
			</a><br/>
			<a className='hovertext' title='I hope you, at least, do not regret'>
			regrets
			</a><br/>
			<a className='hovertext' title='I hope your cheeks, at least, are not wet with tears'>
			infectious tears
			</a><br/>
			<a className='hovertext' title='I hope your husband, at least, is warm in your arms'>
			stories of my father
			</a><br/>
			<br/>
			<a className='hovertext' title='is your courage any quieter since our youth?'>
			and his legendary valiance
			</a><br/>
			<br/>
			<a className='hovertext' title='we will meet again someday'>
			I hope to meet him soon
			</a><br/>
			<br/>
			<TextLink link={'/thesuitorsconference'} class={"text-button"} text={"→"}/><br/>
            <br/>
		</p>
		<ScrollToTop/>
		</div>
	)
}

export default Helen