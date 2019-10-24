import React from 'react'
import CycleSpan from "../components/CycleSpan";
import StopCycleSpan from "../components/StopCycleSpan";
import {Link} from 'react-router-dom'
import TextLink from "../components/TextLink";
import ScrollToTop from "../components/ScrollToTop"

function OdysseusProof() {
	return (
		<div className='poem OdysseusProof setOdysseus setPenelope'>
		<h2>Odysseus' Proof</h2>
		<p>
			Waking from a mildewed hibernation<br/>
			in the springtime thaw of its master's hands<br/>
			the aged bow<br/>
			<br/>
			twists<br/>
			<div className='blockquote'>
			flexes<br/>
			<div className='blockquote'>
			stretches<br/>
			<br/>
			finds itself<br/>
			taut<br/>
			once again<br/>
			<br/>
			like any master<br/>
			musician<br/>
			artist<br/>
			craftsman<br/>
			<br/>
			Odysseus<br/>
			teaches it<br/>
			to sing<br/>
			on his fingertips<br/>
			<br/>
			he plucks up an arrow<br/>
			<div className='blockquote'>
			nocks it<br/>
			</div>
			and aims<br/>
			<br/>
			the great bow<br/>
			tense and keen<br/>
			like an ox<br/>
			made to kneel<br/>
			by a seized horn<br/>
			for the sacrifice<br/>
			buckles<br/>
			yields<br/>
			<br/>
			springs to attention<br/>
			with a gasp<br/>
			and looses<br/>
			in flight<br/>
			into a dozen axe-hooks<br/>
			a bronze warning<br/>
			<br/>
			the first<br/>
			</div>
			of many<br/>
			</div>
			such warnings<br/>
			<br/>
			Odysseus is home again<br/>
			his bow sings<br/>
			drinks in<br/>
			the hundred targets<br/>
			<br/>
			proximal<br/>
			penetrable<br/>
			mute<br/>
			<br/>
			
			
            
			<TextLink link={'/eurycleiadeliversthenews'} class={"text-button text-button-penelope"} text={"Penelope"}/> 
			| 
			<TextLink link={'/athena'} class={"text-button text-button-odysseus"} text={"Odysseus"}/><br/>
			<br/>
			
		</p>
		<ScrollToTop/>
		</div>
	)
}

export default OdysseusProof