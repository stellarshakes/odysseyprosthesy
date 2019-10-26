import React from 'react'
import TextLink from "../components/TextLink";
import ScrollToTop from "../components/ScrollToTop"

function Consent() {
	return (
		<div className='poem consent setOdysseus'>
		<h2>Consent</h2>
		<p>
			<a className='hovertext' title='staining it slowly black'>
			Night crept its way into the sky
			</a><br/>
			<br/>
			<a className='hovertext' title='resolute'>
			Resplendent
			</a><br/>
			<a className='hovertext' title='powerful'>
			beautiful
			</a><br/>
			<a className='hovertext' title='terrible'>
			divine
			</a><br/>
			<a className='hovertext' title='but he was no immortal Heracles, no invincible Achilles'>
			the goddess prompted his answer
			</a><br/>
			<br/>
			<a className='hovertext' title='a leonine contract'>
			<i>Well?</i>
			</a><br/>
			<br/>
			<a className='hovertext' title='meaning no, meaning never'>
			He said yes
			</a><br/>
			<a className='hovertext' title='gaping like a jaw around him'>
			followed her into the cavernous den
			</a><br/>
			<a className='hovertext' title='anything but olive-wood...'>
			into the olive-wood bed
			</a><br/>
			<a className='hovertext' title='for once in his life not to notice, for once in his life to forget'>
			closed his eyes
			</a><br/>
			<br/>
			<a className='hovertext' title='as with all else, he would have to endure it'>
			A routine formed
			</a><br/>
			<br/>
			<a className='hovertext' title='in the night, he lied in silence'>
			In the night, he laid with the goddess
			</a><br/>
			<a className='hovertext' title='in the day, he cried at the nights'>
			In the day, he cried for Penelope
			</a><br/>
			<br/>
			<a className='hovertext' title='staining it slowly black'>
			Death crept its way into his mind
			</a><br/>
			<br/>

			<TextLink link={'/calypso'} class={"text-button text-button-odysseus"} text={"←"}/>

		</p>
		<ScrollToTop/>
		</div>
	)
}

export default Consent