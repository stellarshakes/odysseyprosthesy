import React from 'react'
import CycleSpan from "../components/CycleSpan";
import StopCycleSpan from "../components/StopCycleSpan";
import {Link} from 'react-router-dom'
import TextLink from "../components/TextLink";
import ScrollToTop from "../components/ScrollToTop"

function Reunion() {
	return (
		<div className='poem Reunion'>
		<h2>Reunion</h2>
		<p>
			But when Penelope looks at Odysseus<br/>
			Odysseus looks at the floor<br/>
			<br/>
			His heart may melt into tears if he speaks to her<br/>
			if he so much as looks at her<br/>
			now that she knows<br/>
			<br/>
			For all those years<br/>
			he still can't divine what she must be thinking<br/>
			<br/>
			Telemachos breaks the silence for them<br/>
			<TextLink link={'/outburst'} class={"text-button"} text={"shatters"}/> it, actually<br/>
			with pettish vitriol<br/>
			<br/>
			Odysseus sends him away from their privacy<br/>
			<br/>
			<div className='blockquote'><i>
			Mistake</i></div>
			<br/>
			Being alone with her is too much<br/>
			he excuses himself to bathe<br/>
			<br/>
			Penelope is left alone with her steady wisdom<br/>
			and trembling hand<br/>
			<br/>
			She ought to lean on him<br/>
			press him gently<br/>
			just to be sure<br/>
			just in case the gods had devised a newer fresher cruelty<br/>
			<br/>
			He returns<br/>
			the air is different<br/>
			they are husband and wife<br/>
			<br/>
			They tease each other<br/>
			with ancient familiarity<br/>
			and Penelope shrugs<br/>
			and<br/>
			as if it is nothing<br/>
			asks for his bed to be <TextLink link={'/themarriagebed'} class={"text-button"} text={"uprooted"}/> to a common room<br/>
			<br/>
			He jumps up in an angry panic<br/>
			<br/>
			<div className='blockquote'><i>
			Had she done that much redecorating in his absence?</i></div>
			<br/>
			and Penelope's warm smile grows<br/>
			in pace with his realisation<br/>
			<br/>
			He groans<br/>
			chagrined<br/>
			Penelope laughs<br/>
			takes him in her arms<br/>
			<br/>
			He could never outfox her<br/>
			<br/>
			They weep again<br/>
			hold each other<br/>
			for a <TextLink link={'pillowtalk'} class={"text-button"} text={"night"}/><br/>
			that is twice as long<br/>
			as usual<br/>
			<br/>

			<TextLink link={'/eurycleiadeliversthenews'} class={"text-button"} text={"←"}/> 
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

export default Reunion